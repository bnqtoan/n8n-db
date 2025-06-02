[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/securing/set-up-ssl.md "Edit this page")

# Set up SSL[#](#set-up-ssl "Permanent link")

There are two methods to support TLS/SSL in n8n.

## Use a reverse proxy (recommended)[#](#use-a-reverse-proxy-recommended "Permanent link")

Use a reverse proxy like [Traefik](https://doc.traefik.io/traefik/) or a Network Load Balancer (NLB) in front of the n8n instance. This should also take care of certificate renewals.

Refer to [Security | Data encryption](https://n8n.io/legal/#security) for more information.

## Pass certificates into n8n directly[#](#pass-certificates-into-n8n-directly "Permanent link")

You can also choose to pass certificates into n8n directly. To do so, set the `N8N_SSL_CERT` and `N8N_SSL_KEY` environment variables to point to your generated certificate and key file.

You'll need to make sure the certificate stays renewed and up to date.

Refer to [Deployment environment variables](../../configuration/environment-variables/deployment/) for more information on these variables and [Configuration](../../configuration/configuration-methods/) for more information on setting environment variables.