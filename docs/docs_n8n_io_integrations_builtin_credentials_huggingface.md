[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/huggingface.md "Edit this page")

# Hugging Face credentials[#](#hugging-face-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Hugging Face Inference](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference/)
*   [Embeddings Hugging Face Inference](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Hugging Face's documentation](https://huggingface.co/docs/api-inference/quicktour) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a [Hugging Face](https://huggingface.co/) account and:

*   An **API Key**: Hugging Face calls these API tokens.

To get your API token:

1.  Open your Hugging Face profile and go to the [**Tokens**](https://huggingface.co/settings/tokens) section.
2.  Copy the token listed there. It should begin with `hf_`.
3.  Enter this API token as your n8n credential **API Key**.

Refer to [Get your API token](https://huggingface.co/docs/api-inference/quicktour#get-your-api-token) for more information.