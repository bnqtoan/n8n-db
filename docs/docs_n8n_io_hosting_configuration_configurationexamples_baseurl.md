[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/base-url.md "Edit this page")

# Configure the Base URL for n8n's front end access[#](#configure-the-base-url-for-n8ns-front-end-access "Permanent link")

Requires manual UI build

This use case involves configuring the `VUE_APP_URL_BASE_API` environmental variable which requires a manual build of the `n8n-editor-ui` package. You can't use it with the default n8n Docker image where the default setting for this variable is `/`, meaning that it uses the root-domain.

You can configure the Base URL that the front end uses to connect to the back end's REST API. This is relevant when you want to host n8n's front end and back end separately.

1

`export VUE_APP_URL_BASE_API=https://n8n.example.com/`

Refer to [Environment variables reference](../../environment-variables/deployment/) for more information on this variable.