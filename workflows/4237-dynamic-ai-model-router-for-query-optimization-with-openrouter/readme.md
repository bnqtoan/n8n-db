# Automated AI Routing with OpenRouter

## Use cases:

- **Intelligent Customer Support:** Automatically route customer inquiries to the most appropriate AI model based on the nature of the question (e.g., coding questions to a coding model, factual questions to a web-search model).
- **Optimized Content Generation:** Dynamically select the best AI model for different content creation tasks, such as creative writing, technical documentation, or data analysis reports.
- **Adaptive Learning Platform:** Route student questions to different AI models based on the subject matter or difficulty level, ensuring the most effective learning experience.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger node.
2.  **Routing Agent:** The message is sent to a "Routing Agent", which is an AI agent powered by a large language model (LLM). This agent analyzes the user's query and decides which specific AI model from OpenRouter is best suited to handle it.
3.  **Structured Output Parser:** A "Structured Output Parser" ensures the Routing Agent returns its decision in a predefined JSON format, specifying the prompt (the original user query) and the selected model.
4.  **Dynamic Model Invocation:** Based on the "model" field in the parsed JSON output, the workflow uses a second "OpenRouter Chat Model" node, dynamically configuring the model to be used.
5.  **AI Agent Processing:** The user's prompt is then sent to the dynamically selected AI model for processing and response generation.
6.  **Final Response:** The AI model generates a response based on the user's prompt and the selected model's capabilities.

## Services:

*   **OpenRouter:** A service that provides access to various large language models (LLMs) from different providers through a unified API.

## Hashtags:

#n8n #automation #ai #OpenRouter #LLM #RoutingAgent #AIChatbot
