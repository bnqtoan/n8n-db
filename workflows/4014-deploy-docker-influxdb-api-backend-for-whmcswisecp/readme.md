# puq-docker-influxdb-deploy

## Use cases:

- Automated deployment of InfluxDB instances for multiple clients or projects, triggered via API calls. This could be integrated with a hosting platform or service management system.
- Dynamic scaling and management of InfluxDB instances, allowing users to easily start, stop, suspend, unsuspend, terminate, or change the resources (CPU, RAM, disk space) allocated to their InfluxDB containers.
- Centralized management of InfluxDB configurations, including version updates, password changes, and network access control (ACL), via API calls to the n8n workflow.

## How it works:

1.  The workflow starts with a **Webhook** node (`API`) that listens for incoming API requests with commands to manage InfluxDB instances.
2.  The **Parametrs** node sets default values like server domain, client directory, and mount directory.
3.  An **If** node checks if the incoming request's `server_domain` matches the predefined value in the **Parametrs** node. If they don't match, a `422` error is returned.
4.  A **Switch** node (`Container Actions`) routes the workflow based on the "command" parameter in the API request (e.g., `container_start`, `container_stop`, `container_mount_disk`, etc.).
5.  Another **Switch** node (`Service Actions`) handles commands related to the overall service (e.g., `create`, `suspend`, `terminate`, `change_package`).
6.  Depending on the command, a **Set** node prepares a shell script (`sh`) with commands to be executed on the target server via **SSH**. These scripts handle tasks such as creating directories, mounting disks, starting/stopping Docker containers, updating Nginx configurations, etc.
7.  The **SSH** node executes the shell script on the remote server.
8.  The output of the SSH command is processed by a **Code** node (`Code1`) to determine the status (success/error) and create a JSON response.
9.  Finally, a **Respond to Webhook** node (`API answer`) sends the JSON response back to the caller.

## Services:

-   Docker: Containerization platform for running InfluxDB.
-   nginx-proxy: Used for reverse proxying and SSL termination.
-   letsencrypt-nginx-proxy-companion: Automatically provisions Let's Encrypt SSL certificates.
-   InfluxDB: Time series database.

## Hashtags:

#n8n #automation #docker #influxdb #devops
