# My Workflow

## Use cases:

- **Chatbot Assistance:** This workflow can be used to create a chatbot that provides helpful and polite responses to user queries.
- **AI-Powered Customer Support:** Integrate this workflow into a customer support system to automate responses to common questions, providing quick and efficient assistance.
- **Personalized AI Assistant:** Customize the initial prompt to create a personalized AI assistant that offers advice or information based on specific user needs.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" node.
2.  **Basic LLM Chain:** The incoming message is passed to a "Basic LLM Chain" node, configured with an initial prompt. This prompt instructs the model to be a helpful assistant and reply politely, also using emojis and text. The prompt includes the user's input (`{{ $json.input }}`) as `Q:` and expects the model to provide the answer after `A:`.
3.  **Hugging Face Inference Model:** The "Basic LLM Chain" is connected to the "Hugging Face Inference Model" node, using the `ai_languageModel` connection. This node uses the Mistral-7B-Instruct-v0.1 model hosted on Hugging Face Inference. The model parameters, such as `maxTokens` and `temperature`, are configured to control the output generation.
4.  **Model Inference** The Hugging Face Inference Model will take the user input and the prompt and send the query to the Mistral-7B-Instruct-v0.1 Model
5. **Output:** Finally, the output can be used in another node such as sending the result to the end user via Telegram or Slack

## Services:

-   Hugging Face Inference API (Utilizing the Mistral-7B-Instruct-v0.1 model)

## Hashtags:

#n8n #automation #chatbot #AI #HuggingFace
