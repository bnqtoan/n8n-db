# AA - Telegram bot 3 commands (for template)

## Use cases:

- **Interactive Telegram Bot:** Create a Telegram bot that responds to specific commands, guiding users through a series of interactions. This can be used for tasks like collecting feedback, running polls, or providing information on demand.
- **Content Submission Bot:** Develop a bot that allows users to submit content (e.g., text, links, images) based on predefined commands. The bot can then process and store this content for later use.
- **Simple Task Management:** Implement a basic task management system where users can use commands to add, view, or complete tasks. The bot can maintain a list of tasks and provide updates to the user.

## How it works:

This workflow automates a Telegram bot that handles three specific commands. Here's a breakdown of the process:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Command Check:** Verifies that a command was sent and if it exists from the 3 available options.
3.  **Send Typing action:** Sends a "typing" indicator to the user to show the bot is processing the request.
4.  **Switch (Command Routing):** Routes the workflow based on the recognized command.
5.  **Set waitingForContent[1-3]:** Sets the state to waiting for content.
6.  **Command[1-3] content request:** Sends a message to the user requesting specific content related to the command.
7.  **Prepare IF Value:** Checks the state of the conversation
8.  **Check State:** Routes the workflow based on the state.
9.  **Command[1-3] processing:** Performs actions to process the command result.
10. **Command[1-3] result:** Send the result back to the user on Telegram.
11. **Clear State:** Clears the state of the chat.
12. **No Command check:** If no command is detected, a message is sent to the user.

## Services:

-   **Telegram:** The workflow uses the Telegram Bot API to receive messages, send messages, and send typing indicators.

## Hashtags:

#n8n #TelegramBot #Automation #Workflow #Chatbot
