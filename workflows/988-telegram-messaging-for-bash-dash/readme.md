# bash-dash telegram

## Use cases:

*   **Simple Telegram Bot:**  Quickly create a bot that echoes back messages received from users.
*   **Personal Notifications:**  Forward specific information or alerts to your Telegram account from other services or scripts.
*   **Command Relay:**  Receive commands via Telegram and trigger actions on a server, like running scripts or restarting services (requires additional nodes and security considerations).

## How it works:

This workflow creates a simple Telegram bot that responds to messages sent to it.

1.  **Webhook (Telegram):** Listens for incoming messages to a specific path (`/telegram`). When a message is received, it triggers the workflow.
2.  **Telegram:** Sends a message back to the user who sent the original message.  It extracts the text from the incoming webhook data and uses a hardcoded `chatId` to send the message to a specific user/chat.
3.  **Set:** Creates a new value with the message sent to Telegram
4.  **Response:** Returns the created message to the user.

## Services:

*   Telegram API

## Hashtags:

#n8n #telegram #bot #automation #messaging
