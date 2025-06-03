[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/qdrant.md "Edit this page")

# Qdrant credentials[#](#qdrant-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Qdrant Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Qdrant's documentation](https://qdrant.tech/documentation/) for more information.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a [Qdrant cluster](https://qdrant.tech/documentation/cloud/create-cluster/) and:

*   An **API Key**
*   Your **Qdrant URL**

To set it up:

1.  Go to the [Cloud Dashboard](https://qdrant.to/cloud).
2.  Select **Access Management** to display available API keys (or go to the **API Keys** section of the **Cluster detail** page).
3.  Select **Create**.
4.  Select the cluster you want the key to have access to in the dropdown.
5.  Select **OK**.
6.  Copy the API Key and enter it in your n8n credential.
7.  Enter the URL for your Qdrant cluster in the **Qdrant URL**. Refer to [Qdrant Web UI](https://qdrant.tech/documentation/interfaces/web-ui/) for more information.

Refer to [Qdrant's authentication documentation](https://qdrant.tech/documentation/cloud/authentication/) for more information on creating and using API keys.