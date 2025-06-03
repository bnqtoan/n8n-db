[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/googleai.md "Edit this page")

# Google Gemini(PaLM) credentials[#](#google-geminipalm-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Embeddings Google Gemini](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglegemini/)
*   [Google Gemini Chat Model](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/)
*   [Embeddings Google PaLM](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Google Cloud](https://cloud.google.com/) account.
*   Create a [Google Cloud Platform project](https://developers.google.com/workspace/marketplace/create-gcp-project).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Gemini(PaLM) API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Google's Gemini API documentation](https://ai.google.dev/gemini-api/docs) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using Gemini(PaLM) API key[#](#using-geminipalm-api-key "Permanent link")

To configure this credential, you'll need:

*   The API **Host** URL: Both PaLM and Gemini use the default `https://generativelanguage.googleapis.com`.
*   An **API Key**: Create a key in [Google AI Studio](https://makersuite.google.com/app/apikey).

Custom hosts not supported

The related nodes don't yet support custom hosts or proxies for the API host and must use 'https://generativelanguage.googleapis.com'.

To create an API key:

1.  Go to the API Key page in Google AI Studio: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey).
2.  Select **Create API Key**.
3.  You can choose whether to **Create API key in new project** or search for an existing Google Cloud project to **Create API key in existing project**.
4.  Copy the generated API key and add it to your n8n credential.