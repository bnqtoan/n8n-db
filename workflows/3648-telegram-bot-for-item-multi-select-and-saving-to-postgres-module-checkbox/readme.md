# TG-Bot-Module-Checkbox-v2-db-sell-full

## Use Cases

- **Telegram-based Order Management:** Allow users to place orders through a Telegram bot, with a checkbox-style interface for selecting items. The workflow manages order creation, updates, and retrieval using a database.
- **Interactive Product Selection:** Provide an interactive way for users to browse and select products or services via a Telegram bot, with real-time updates on their selections.
- **Database-Driven Telegram Bot:** Create a Telegram bot that leverages a database (PostgreSQL) to store and manage shop lists, choices, order details, and bot statuses.

## How it Works

1.  **Telegram Trigger:** The workflow starts when a user interacts with the Telegram bot.
2.  **Variable Initialization:** Sets initial variables required for the workflow.
3.  **Check for /start command:** check if command is "start" if so, send welcome message.
4.  **Define Type:** Determines the type of interaction based on user input.
5.  **New Order?:** Checks if the user is placing a new order. If so, adds a new order to the database.
6.  **Get Shop List:** Retrieves the list of available shops/items from a PostgreSQL database.
7.  **Add Shop List Choice:** Adds the shop list choices to the message.
8.  **Convert statuses:** Converts the statuses to right format.
9.  **Edit:** Edit the message in telegram.
10. **Get Order:** Retrieves order information from the database.
11. **Upsert bot status on START:** Insert or Update the bot status in the database on START.
12. **Delete Previous Message:** deletes previous SMS.
13. **Send message:** Send the message to the user in telegram.
14. **Update message ID:** Update the message ID in the database.

## Services

-   **Telegram:** Used for bot interaction, sending messages, and editing messages.
-   **PostgreSQL:** Used as a database to store shop lists, order details, user selections, and bot statuses.

## Hashtags

#n8n #telegrambot #automation #database #ordermanagement
