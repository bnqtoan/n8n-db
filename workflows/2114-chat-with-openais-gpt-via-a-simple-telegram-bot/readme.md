# Telegram AI Assistant

## Use cases

*   **Instant Customer Support:** Automatically respond to customer inquiries on Telegram with helpful and relevant information.
*   **Personal Assistant:** Create a personal assistant that can answer questions, provide summaries, or generate creative content via Telegram.
*   **Automated Information Retrieval:** Query a knowledge base and deliver answers to specific questions asked through Telegram.

## How it works

1.  The workflow is triggered when a new message is received via **Telegram Trigger**.
2.  The incoming message text is sent to **AI Agent**, which act as a helpful assistant with emojis.
3.  The **OpenAI Chat Model** is connected to the AI Agent, so the AI Agent uses the OpenAI's language model to formulate a response.
4.  The AI Agent formulates a response based on the model, the original message, and its defined persona.
5.  The response is then sent back to the user in Telegram via the **Telegram** node. The message is sent to the same chat ID from which the original message was received.

## Services

*   Telegram API
*   OpenAI API

## Hashtags

#n8n #automation #telegram #openai #chatbot
