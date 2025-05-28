# 🐋DeepSeek V3 Chat & R1 Reasoning Quick Start

## Use cases:

- **Chatbot Development:** Build a chatbot that leverages the DeepSeek V3 model for general conversation or the DeepSeek R1 model for reasoning tasks.
- **Local AI Prototyping:** Quickly prototype and test DeepSeek's reasoning capabilities using a local Ollama instance.
- **API Integration:** Integrate DeepSeek's models into existing applications via its OpenAI-compatible API.

## How it works:

This workflow provides multiple ways to interact with DeepSeek's language models:

1.  **Chat Trigger:** The workflow is initiated by a chat message received (e.g., via webhook).
2.  **DeepSeek with HTTP Request (Raw Body):** Sends the chat input to the DeepSeek API (reasoning model), using a raw JSON body for the request.
3.  **DeepSeek with HTTP Request (JSON Body):** Sends the chat input to the DeepSeek API (chat model), using a structured JSON body.
4.  **DeepSeek Conversational Agent w/Memory:** Uses a DeepSeek large language model in a conversational agent setup. Utilizes memory to keep track of the conversation.
5.  **DeepSeek with Ollama Local Model:** Uses a DeepSeek large language model running with Ollama.

## Services:

-   **DeepSeek API:** Interacts with DeepSeek's language models (V3 Chat and R1 Reasoning) through their API.
-   **Ollama:**  Uses Ollama to interact with a local DeepSeek model.

## Hashtags:

#n8n #automation #workflow #deepseek #AI #ollama #chatbot
