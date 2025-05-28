# Telegram Bot Workflow

## Use cases:

- **Telegram Bot:** Automates interactions with a Telegram bot, handling different message types (text, photo, file, voice), commands, and callbacks.
- **User Registration:** Registers new users when they join the bot and updates their status in a Google Sheet.
- **Payment Handling:** Manages payment requests and processes successful payments through an external workflow.

## How it works:

1.  **Trigger:** The workflow starts with a Telegram Trigger node, listening for updates from the Telegram bot (messages, commands, callbacks, or system updates like new members joining).
2.  **Message Type Switch:** A Switch node determines the type of incoming message (Message, Callback, System, Payment) and routes the workflow accordingly.
3.  **Message Handling:**
    *   **Text Messages:** A Switch node checks if the message is a command (starting with "/").
        *   **Commands:** Process messages that start with specific command (e.g., `/pay`).
        *   **Other Text:** Sends a default message.
    *   **Photo, File, Voice:** Sends messages indicating the type of content (Photo, File, Voice).
    *   **Callbacks:** Process callback data for menu navigation.
    *   **System Updates:** Checks for new members and triggers a registration sub-workflow.
    *   **Payment Updates:** Handles successful payments.
4.  **User Registration:** If a new member joins the bot, it triggers a sub-workflow ("Register") to register the user. The data is passed to the Register workflow.
5.  **Payment Handling:** If a user requests a payment, trigger payment workflow to handle that request.

## Services:

-   Telegram API: Used for receiving updates and sending messages.
-   Google Sheets: Used for saving user status.

## Hashtags:

#n8n #TelegramBot #Automation #GoogleSheets #PaymentProcessing
