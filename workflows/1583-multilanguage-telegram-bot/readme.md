# Telegram Multilingual Bot Workflow

## Use cases:

- **Multilingual Telegram Bot:** Create a Telegram bot that can interact with users in multiple languages, providing a personalized experience based on their Telegram language settings.
- **Command Handling:** Implement specific actions based on user commands (e.g., /start, /help), offering different functionalities or information.
- **User Management:** Track new and returning users to deliver tailored greetings and ensure relevant information is provided.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **chatID:** Extract the user's chat ID and preferred language from the Telegram message. It uses the language code provided by Telegram, defaulting to "en" if the language is not supported.
3.  **LoadDictionary:** Retrieve bot messages (greetings, help text, etc.) from a NocoDB database. It loads all messages for all available languages.
4.  **botmessages:** Transforms the data from NocoDB into a usable JSON format by grouping the bot messages by message type (e.g. "greeting").
5.  **CheckUser:** Check if the user exists in the "TG\_users" table in a NocoDB database using the chat ID.
6.  **Merge:** Combines the original Telegram message with the output from the CheckUser node, which determines if it is a new or existing user.
7.  **Switch:** Route the workflow based on the command sent by the user (e.g., /start, /help).
8.  **New user?:** Determines if the user is new by checking if the CheckUser node returned any results.
9.  **IF:** Based on whether the user is new or existing, the workflow branches to either add the user to the database or update their information.
10. **HTTP AddUser / HTTP UpdateUser:** Add a new user or update existing user data in the NocoDB database via HTTP requests. Includes the Telegram chat ID and last used language.
11. **msg\_greet / msg\_welcomeback / msg\_help / msg\_wrongcommand:** Send appropriate messages to the user via Telegram, based on the command they sent, whether they are a new or returning user, and their preferred language. The messages are fetched from the botmessages based on the extracted language.

## Services:

-   Telegram API
-   NocoDB

## Hashtags:

#n8n #telegrambot #multilingual #automation #nocodb
