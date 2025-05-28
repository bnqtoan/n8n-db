# 🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠

## Use cases:

- **Personal AI Assistant:**  Users can interact with an AI assistant through Telegram, receiving personalized and context-aware responses based on their past conversations and stored memories.
- **Information Retrieval and Note-Taking:** The bot can save important information from user messages to Google Docs for long-term storage, acting as a personal knowledge base.
- **Customer Support Automation:** Businesses can use this workflow to automate customer support interactions on Telegram, providing relevant information and assistance based on customer history.

## How it works:

1.  **Receive Telegram Message:** The workflow starts when a user sends a message to the Telegram bot via a webhook (`Listen for Telegram Events`).
2.  **Validate User:** The workflow validates the user based on first name, last name, and ID (`Validation` and `Check User & Chat ID`). If the user is not validated, an error message is sent.
3.  **Route Message:** The workflow analyzes the message type (`Message Router`). If the message is audio, image, text, or extra. If it's text, it proceeds; otherwise, it sends an error message or handles accordingly (although other types aren't fully implemented here).
4.  **Retrieve Memories:** The workflow retrieves long-term memories from a Google Docs document (`Retrieve Long Term Memories`).
5.  **AI Agent Interaction:** The user's message and retrieved memories are sent to the DeepSeek AI Agent (`AI Agent`). The AI Agent processes the information, generates a response, and decides whether to save new information to memory. The DeepSeek Agent uses `deepseek-chat` model to provide conversation.
6.  **Save Long Term Memories:** Based on the `AI Agent` response, the workflow can save long-term memories to the Google Docs document (`Save Long Term Memories`).
7.  **Send Telegram Response:** The AI Agent's response is sent back to the user via Telegram (`Telegram Response`).
8.  **Error Handling:** If any step fails, an error message is sent back to the user via Telegram (`Error message`, `Response Error message`).

## Services:

-   Telegram API: For receiving messages and sending responses.
-   DeepSeek AI: For processing user input, generating responses, and deciding whether to save memories.
-   Google Docs API: For storing and retrieving long-term memories.

## Hashtags:

#n8n #automation #telegrambot #ai #memory
