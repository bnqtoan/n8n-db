# Use any LLM-Model via OpenRouter

## Use cases:

- **Custom Chatbot:** Build a chatbot that can switch between different LLMs (e.g., `deepseek/deepseek-r1-distill-llama-8b`, `openai/o3-mini`) based on performance, cost, or specific task requirements, all managed through a single interface.
- **Experimentation with LLMs:** Quickly test and compare the outputs of various LLMs for a given prompt, enabling informed decisions about which model best suits your needs.
- **Context-Aware AI Assistant:** Create an AI assistant that remembers previous conversations using the "Chat Memory" node, providing a more personalized and coherent experience.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger node.
2.  **Settings Configuration:** The "Settings" node sets the LLM `model`, `prompt`, and `sessionId`. The prompt is dynamically set based on the incoming chat message (`{{ $json.chatInput }}`). The session ID is also dynamically set based on the incoming session ID (`{{ $json.sessionId }}`).
3.  **AI Agent Processing:** The "AI Agent" node receives the prompt from the "Settings" node, as well as memory and the LLM to process the prompt.
4.  **LLM Interaction:** The "LLM Model" node uses the OpenAI Chat API via the `OpenRouter` credential to send the prompt to the configured LLM (defined in the "Settings" node).
5.  **Chat Memory:** The "Chat Memory" node stores the conversation history, using the session ID to differentiate between different conversations. This allows the AI to maintain context across multiple turns.

## Services:

-   **OpenRouter:** Acts as an abstraction layer, allowing to connect to different LLMs with one API Key.

## Hashtags:

#n8n #automation #LLM #OpenRouter #chatbot
