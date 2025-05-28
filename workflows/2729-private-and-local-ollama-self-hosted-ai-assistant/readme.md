# 🗨️Ollama Chat

## Use cases:

- **Chatbot Integration:** Create a chatbot that uses the Llama 3.2 model to provide responses to user queries within a website or messaging app.
- **Automated Customer Support:** Use the workflow to automatically answer common customer questions, providing instant support and reducing the workload on human agents.
- **Content Generation Assistant:** Assist users in generating content by processing prompts and providing structured JSON responses with the generated content.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a new chat message is received by the "When chat message received" trigger node.
2.  **LLM Chain Processing:** The received message is passed to the "Basic LLM Chain" node, which formats the message as a prompt for the language model. The prompt instructs the model to provide the user's prompt and the model's response in a JSON object with "Prompt" and "Response" fields.
3.  **Ollama Model Integration:** The formatted prompt is sent to the "Ollama Model" node, which uses the Llama 3.2 model to generate a response. This node requires Ollama API credentials to function.
4.  **JSON Conversion:** The raw text output from the Ollama Model will be converted to a JSON object using the "JSON to Object" node and save it under the "response" key.
5.  **Structured Response:** The "Structured Response" node uses the "response" key and formats a user-friendly response including the original prompt and the model's answer.
6.  **Error Handling:** If the "Basic LLM Chain" node fails, the workflow uses the "Error Response" node to provide a default error message.

## Services:

-   Ollama (with Llama 3.2 model)

## Hashtags:

#n8n #automation #workflow #ollama #chatbot
