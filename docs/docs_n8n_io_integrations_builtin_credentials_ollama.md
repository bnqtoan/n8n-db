[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/ollama.md "Edit this page")

# Ollama credentials[#](#ollama-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Ollama](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/)
*   [Chat Ollama](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama/)
*   [Embeddings Ollama](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsollama/)

## Prerequisites[#](#prerequisites "Permanent link")

Create and run an [Ollama](https://ollama.com/) instance with one user. Refer to the Ollama [Quick Start](https://github.com/ollama/ollama/blob/main/README.md#quickstart) for more information.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Instance URL

## Related resources[#](#related-resources "Permanent link")

Refer to [Ollama's API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using instance URL[#](#using-instance-url "Permanent link")

To configure this credential, you'll need:

*   The **Base URL** of your Ollama instance.

The default **Base URL** is `http://localhost:11434`, but if you've set the `OLLAMA_HOST` environment variable, enter that value. If you have issues connecting to a local n8n server, try `127.0.0.1` instead of `localhost`.

Refer to [How do I configure Ollama server?](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server) for more information.

### Ollama and self-hosted n8n[#](#ollama-and-self-hosted-n8n "Permanent link")

If you're self-hosting n8n on the same machine as Ollama, you may run into issues if they're running in different containers.

For this setup, open a specific port for n8n to communicate with Ollama by setting the `OLLAMA_ORIGINS` variable or adjusting `OLLAMA_HOST` to an address the other container can access.

Refer to Ollama's [How can I allow additional web origins to access Ollama?](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-can-i-allow-additional-web-origins-to-access-ollama) for more information.