[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/mistral.md "Edit this page")

# Mistral Cloud credentials[#](#mistral-cloud-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Mistral Cloud](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud/)
*   [Embeddings Mistral Cloud](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Mistral](https://mistral.ai/) La Plateforme account.
*   You must add payment information in **Workspace >** [**Billing**](https://admin.mistral.ai/organization/billing) and activate payments to enable API keys. Refer to [Account setup](https://docs.mistral.ai/getting-started/quickstart/#account-setup) for more information.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Mistral's API documentation](https://docs.mistral.ai/api/) for more information about the APIs.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**

Once you've added payment information to your Mistral Cloud account:

1.  Sign in to your [Mistral account](https://console.mistral.ai/home).
2.  Go to the **API Keys** page.
3.  Select **Create new key**.
4.  Copy the API key and enter it in your n8n credential.

Refer to [Account setup](https://docs.mistral.ai/getting-started/quickstart/#account-setup) for more information.

Paid account required

Mistral requires you to add payment information and activate payments to use API keys. Refer to the [Prerequisites](#prerequisites) section above for more information.