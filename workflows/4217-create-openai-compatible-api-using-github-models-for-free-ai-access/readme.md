# My Workflow

## Use cases:

- **Integration of Github Models with n8n LLM Nodes:** Allows users to leverage Github's free AI models within their existing n8n workflows without extensive refactoring.
- **Custom OpenAI-Compatible API for Github Models:** Creates a custom API mimicking OpenAI's structure, enabling seamless integration of Github Models into n8n's LLM ecosystem.
- **Prototyping AI Models with Webhooks:** Facilitates testing and experimentation with various Github AI models through configurable webhook endpoints within n8n.

## How it works:

1.  **Custom OpenAI Credential:** The workflow begins by setting up a new OpenAI credential in n8n, but instead of connecting to OpenAI, it's configured to point to n8n's own webhook endpoints.
2.  **"Models" Webhook (GET):** A webhook is triggered to list all available models from the Github Models API. The data is transformed into a format compatible with n8n's LLM node.
3.  **"Chat Completion" Webhook (POST):** Another webhook is set up to handle chat completion requests, forwarding them to the Github Models API. The request is transformed into the required json body and the response is returned.
4.  **Conditional Response Handling:** If the request is for an agent, the response is treated as a data stream and returned as text; otherwise, the response is returned as a standard JSON object.
5.  **Chat Trigger:** A chat trigger initiates the workflow when a message is received.
6. **Powered by Github Models:** This node connects to our newly configured OpenAI model.
7. **LLM Node:** This acts as our Language Model node.

## Services:

-   **Github Models API:** Interacts with Github's AI model catalog and chat completion endpoints.

## Hashtags:

#n8n #automation #workflow #github #llm
