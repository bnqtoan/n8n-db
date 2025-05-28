# Bitrix24 Chatbot Application Workflow example with Webhook Integration

## Use cases:

- **Automated Customer Support:** Configure a chatbot to respond to common customer queries in Bitrix24, freeing up human agents for complex issues.
- **Welcome Message Automation:** Automatically send a welcome message to new chat members or when the bot is installed in a Bitrix24 chat, introducing the bot's purpose and available commands.
- **Real-time Notifications:** Integrate the bot to provide real-time updates and notifications within Bitrix24 based on external triggers (e.g., new order, system alert).

## How it works:

1.  **Bitrix24 Handler (Webhook):** Listens for incoming HTTP POST requests from Bitrix24 at the specified `bitrix24/handler.php` path. This is the entry point of the workflow.
2.  **Credentials (Set):** Extracts and sets the necessary credentials (CLIENT\_ID, CLIENT\_SECRET, application\_token, domain, and access\_token) from the incoming webhook data for authenticating with the Bitrix24 REST API.
3.  **Validate Token (IF):** Checks if the received application token matches the CLIENT\_ID to ensure the request is authenticated. If validation fails, it sends an "Error Response" with a 401 status.
4.  **Route Event (Switch):** Determines the type of event received from Bitrix24 (e.g., `ONIMBOTMESSAGEADD`, `ONIMBOTJOINCHAT`, `ONAPPINSTALL`, `ONIMBOTDELETE`) and routes the workflow execution to the corresponding processing node.
5.  **Process Message (Function):** Handles incoming messages, extracts the message content and dialog ID, and formulates a response. If the message is "what's hot", the bot sends a predefined message; otherwise, it echoes the user's message.
6.  **Process Join (Function):** Handles the event when the bot joins a chat, extracting the dialog ID and sending a welcome message.
7.  **Process Install (Function):** Handles the bot installation event, constructs the data required for bot registration, including handler URLs and bot properties.
8.  **Process Delete (NoOp):** A placeholder for handling the bot deletion event.
9.  **Register Bot (HTTP Request):** Registers the bot with Bitrix24 using the `/rest/imbot.register` endpoint, passing the necessary details such as bot code, type, and event handlers.
10. **Send Message/Send Join Message (HTTP Request):** Sends a message to the specified dialog ID using the `/rest/imbot.message.add` endpoint with required parameters like `DIALOG_ID`, `MESSAGE`, and `AUTH`.
11. **Success Response/Error Response (Respond to Webhook):** Sends a success or error response back to Bitrix24, indicating the outcome of the operation.

## Services:

-   Bitrix24 (REST API)

## Hashtags:

#n8n #automation #Bitrix24 #chatbot #webhook
