# OpenAI Responses API with Langchain Compatibility

## Use cases:

- **Integrating cutting-edge OpenAI features:** Utilize the latest OpenAI Responses API with multimodal support within existing Langchain-based AI workflows.
- **Testing new LLMs:** Experiment with different LLMs by simply adjusting the webhook configuration, allowing for rapid prototyping and evaluation.
- **Adapting to API changes:** Maintain compatibility with the evolving OpenAI Responses API by modifying the transformation logic within the n8n workflow.

## How it works:

This workflow acts as a bridge between Langchain-based AI agents and the OpenAI Responses API. It intercepts requests from an AI Agent node (or other LLM nodes configured with a custom OpenAI credential), remaps the request to be compatible with the Responses API, calls the Responses API, and then transforms the response back into a format that Langchain can understand.

1.  **Chat Trigger:** The workflow starts with a `When chat message received` trigger, which receives user queries.
2.  **AI Agent:** The `AI Agent` node processes the query using Langchain. Critically, the LLM used by the agent (`n8n Webhook` or `@n8n/n8n-nodes-langchain.lmChatOpenAi`) is configured with a custom OpenAI credential. This credential points to a webhook within this workflow instead of the actual OpenAI API.
3.  **Webhook (n8n-responses-api/models) & OpenAI Models:** If the agent asks for a list of avaiable models, the `Webhook` catches this request and redirect it to the OpenAI Models API via the `OpenAI Models` node. The result is send back as a JSON response.
4.  **POST ChatCompletions Webhook:** The AI Agent's request is routed to the `POST ChatCompletions` webhook, which triggers the remapping process.
5.  **Remap to Response API Schema:** The `Remap to Response API Schema` node transforms the incoming request body into the format expected by the OpenAI Responses API. This involves restructuring the input messages and handling different content types.
6.  **OpenAI Responses API:** The `OpenAI Responses API` node then sends the remapped request to the actual OpenAI Responses API endpoint using an OpenAI credential.
7.  **Is Agent?** The result is then sent to an if statement, depending on wether is a `stream` response or not, the output format is different.
8.  **Format Stream Response / Format Completion Response:** These nodes reformat the output for Langchain compatibility.
9.  **Response:** Finally, the reformatted response is sent back to the original requester (the AI Agent node) via the `Text Response` or `JSON Response` node.

## Services:

-   **OpenAI Responses API:** The core service providing access to advanced language models.
-   **OpenAI Models API:** An API to get the available models.

## Hashtags:

#n8n #OpenAI #Langchain #Automation #APIWrapper
