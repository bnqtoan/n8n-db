[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/milvus.md "Edit this page")

# Milvus credentials[#](#milvus-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Milvus Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus/)

## Prerequisites[#](#prerequisites "Permanent link")

Create and run an [Milvus](https://milvus.io/) instance. Refer to the [Install Milvus](https://milvus.io/docs/install-overview.md) for more information.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth

## Related resources[#](#related-resources "Permanent link")

Refer to [Milvus's Authentication documentation](https://milvus.io/docs/authenticate.md?tab=docker#Authenticate-User-Access) for more information about setting up authentication.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need:

*   **Base URL**: The base URL of your Milvus instance. The default is `http://localhost:19530`.
*   **Username**: The username to authenticate to your Milvus instance. The default value is `root`.
*   **Password**: The password to authenticate to your Milvus instance. The default value is `Milvus`.