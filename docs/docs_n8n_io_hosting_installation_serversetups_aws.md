[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/installation/server-setups/aws.md "Edit this page")

# Hosting n8n on Amazon Web Services[#](#hosting-n8n-on-amazon-web-services "Permanent link")

This hosting guide shows you how to self-host n8n with Amazon Web Services (AWS). It uses n8n with Postgres as a database backend using Kubernetes to manage the necessary resources and reverse proxy.

## Hosting options[#](#hosting-options "Permanent link")

AWS offers several ways suitable for hosting n8n, including EC2 (virtual machines), and EKS (containers running with Kubernetes).

This guide uses [EKS](https://aws.amazon.com/eks/) as the hosting option. Using Kubernetes requires some additional complexity and configuration, but is the best method for scaling n8n as demand changes.

## Prerequisites[#](#prerequisites "Permanent link")

The steps in this guide use a mix of the AWS UI and [the eksctl CLI tool for EKS](https://eksctl.io).

While not mentioned in the documentation for eksctl, you also need to [install the AWS CLI tool](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), and [configure authentication of the tool](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Self-hosting knowledge prerequisites

Self-hosting n8n requires technical knowledge, including:

*   Setting up and configuring servers and containers
*   Managing application resources and scaling
*   Securing servers and applications
*   Configuring n8n

n8n recommends self-hosting for expert users. Mistakes can lead to data loss, security issues, and downtime. If you aren't experienced at managing servers, n8n recommends [n8n Cloud](https://n8n.io/cloud/).

Latest and Next versions

n8n releases a new minor version most weeks. The `latest` version is for production use. `next` is the most recent release. You should treat `next` as a beta: it may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

Current `latest`: 1.94.1  
Current `next`: 1.95.1

## Create a cluster[#](#create-a-cluster "Permanent link")

Use the eksctl tool to create a cluster specifying a name and a region with the following command:

1

`eksctl create cluster --name n8n --region <your-aws-region>`

This can take a while to create the cluster.

Once the cluster is created, eksctl automatically sets the kubectl context to the cluster.

## Clone configuration repository[#](#clone-configuration-repository "Permanent link")

Kubernetes and n8n require a series of configuration files. You can clone these from [this repository](https://github.com/n8n-io/n8n-kubernetes-hosting/tree/aws). The following steps tell you what each file does, and what settings you need to change.

Clone the repository with the following command:

1

`git clone https://github.com/n8n-io/n8n-kubernetes-hosting.git -b aws`

And change directory to the root of the repository you cloned:

1

`cd n8n-kubernetes-hosting`

## Configure Postgres[#](#configure-postgres "Permanent link")

For larger scale n8n deployments, Postgres provides a more robust database backend than SQLite.

### Configure volume for persistent storage[#](#configure-volume-for-persistent-storage "Permanent link")

To maintain data between pod restarts, the Postgres deployment needs a persistent volume. The default AWS storage class, [gp2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/general-purpose.html#EBSVolumeTypes_gp2), is suitable for this purpose. This is defined in the `postgres-claaim0-persistentvolumeclaim.yaml` manifest.

1
2
3
4
5
6

`… spec:   storageClassName: gp2   accessModes:     - ReadWriteOnce …`

### Postgres environment variables[#](#postgres-environment-variables "Permanent link")

Postgres needs some environment variables set to pass to the application running in the containers.

The example `postgres-secret.yaml` file contains placeholders you need to replace with values of your own for user details and the database to use.

The `postgres-deployment.yaml` manifest then uses the values from this manifest file to send to the application pods.

## Configure n8n[#](#configure-n8n "Permanent link")

### Create a volume for file storage[#](#create-a-volume-for-file-storage "Permanent link")

While not essential for running n8n, using persistent volumes helps maintain files uploaded while using n8n and if you want to persist [manual n8n encryption keys](../../../configuration/environment-variables/deployment/) between restarts, which saves a file containing the key into file storage during startup.

The `n8n-claim0-persistentvolumeclaim.yaml` manifest creates this, and the n8n Deployment mounts that claim in the `volumes` section of the `n8n-deployment.yaml` manifest.

1
2
3
4
5
6

`… volumes:   - name: n8n-claim0     persistentVolumeClaim:       claimName: n8n-claim0 …`

### Pod resources[#](#pod-resources "Permanent link")

[Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) lets you specify the minimum resources application containers need and the limits they can run to. The example YAML files cloned above contain the following in the `resources` section of the `n8n-deployment.yaml` file:

1
2
3
4
5
6
7

`… resources:   requests:     memory: "250Mi"   limits:     memory: "500Mi" …`    

This defines a minimum of 250mb per container, a maximum of 500mb, and lets Kubernetes handle CPU. You can change these values to match your own needs. As a guide, here are the resources values for the n8n cloud offerings:

*   **Start**: 320mb RAM, 10 millicore CPU burstable
*   **Pro (10k executions)**: 640mb RAM, 20 millicore CPU burstable
*   **Pro (50k executions)**: 1280mb RAM, 80 millicore CPU burstable

### Optional: Environment variables[#](#optional-environment-variables "Permanent link")

You can configure n8n settings and behaviors using environment variables.

Create an `n8n-secret.yaml` file. Refer to [Environment variables](../../../configuration/environment-variables/) for n8n environment variables details.

## Deployments[#](#deployments "Permanent link")

The two deployment manifests (`n8n-deployment.yaml` and `postgres-deployment.yaml`) define the n8n and Postgres applications to Kubernetes.

The manifests define the following:

*   Send the environment variables defined to each application pod
*   Define the container image to use
*   Set resource consumption limits
*   The `volumes` defined earlier and `volumeMounts` to define the path in the container to mount volumes.
*   Scaling and restart policies. The example manifests define one instance of each pod. You should change this to meet your needs.

## Services[#](#services "Permanent link")

The two service manifests (`postgres-service.yaml` and `n8n-service.yaml`) expose the services to the outside world using the Kubernetes load balancer using ports 5432 and 5678 respectively by default.

## Send to Kubernetes cluster[#](#send-to-kubernetes-cluster "Permanent link")

Send all the manifests to the cluster by running the following command in the `n8n-kubernetes-hosting` directory:

1

`kubectl apply -f .`

Namespace error

You may see an error message about not finding an "n8n" namespace as that resources isn't ready yet. You can run the same command again, or apply the namespace manifest first with the following command:

1

`kubectl apply -f namespace.yaml`

## Set up DNS[#](#set-up-dns "Permanent link")

n8n typically operates on a subdomain. Create a DNS record with your provider for the subdomain and point it to a static address of the instance.

To find the address of the n8n service running on the instance:

1.  Open the **Clusters** section of the **Amazon Elastic Kubernetes Service** page in the AWS console.
2.  Select the name of the cluster to open its configuration page.
3.  Select the **Resources** tab, then **Service and networking** > **Services**.
4.  Select the **n8n** service and copy the **Load balancer URLs** value. Use this value suffixed with the n8n service port (5678) for DNS.

Use HTTP

This guide uses HTTP connections for the services it defines, for example in `n8n-deployment.yaml`. However, if you click the **Load balancer URLs** value, EKS takes you to an "HTTPS" URL which results in an error. To solve this, when you open the n8n subdomain, make sure to use HTTP.

## Delete resources[#](#delete-resources "Permanent link")

If you need to delete the setup, you can remove the resources created by the manifests with the following command:

1

`kubectl delete -f .`

## Next steps[#](#next-steps "Permanent link")

*   Learn more about [configuring](../../../configuration/environment-variables/) and [scaling](../../../scaling/overview/) n8n.
*   Or explore using n8n: try the [Quickstarts](../../../../try-it-out/).