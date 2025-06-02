[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/custom-certificate-authority.md "Edit this page")

# Configure n8n to use your own certificate authority or self-signed certificate[#](#configure-n8n-to-use-your-own-certificate-authority-or-self-signed-certificate "Permanent link")

You can add your own certificate authority (CA) or self-signed certificate to n8n. This means you are able to trust a certain SSL certificate instead of trusting all invalid certificates, which is a potential security risk.

Available in version 1.42.0

This feature is only available in version 1.42.0+.

To use this feature you need to place your certificates in a folder and mount the folder to `/opt/custom-certificates` in the container.

## Docker[#](#docker "Permanent link")

The examples below assume you have a folder called `pki` that contains your certificates in either the directory you run the command from or next to your docker compose file.

### Docker CLI[#](#docker-cli "Permanent link")

When using the CLI you can use the `-v` flag from the command line:

1
2
3
4
5

`docker run -it --rm \  --name n8n \  -p 5678:5678 \  -v ./pki:/opt/custom-certificates \  docker.n8n.io/n8nio/n8n`

### Docker Compose[#](#docker-compose "Permanent link")

1
2
3
4
5
6
7
8
9

`name: n8n services:     n8n:         volumes:             - ./pki:/opt/custom-certificates         container_name: n8n         ports:             - 5678:5678         image: docker.n8n.io/n8nio/n8n`

You should also give the right permissions to the imported certs. You can do this once the container is running (assuming n8n as the container name):

1

`docker exec --user 0 n8n chown -R 1000:1000 /opt/custom-certificates`