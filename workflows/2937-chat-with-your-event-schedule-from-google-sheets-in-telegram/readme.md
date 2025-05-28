# Telegram-bot AI Da Nang

## Use cases:

- **Telegram-based Meeting Scheduler:** Allow users to query and schedule meetings via a Telegram bot, which retrieves schedule information from a Google Sheet and provides context-aware responses using an AI.
- **n8n Chat Interface for Scheduling:** Use the n8n chat interface to test, debug, or demonstrate the scheduling bot's capabilities. This allows internal teams to interact with the bot without using Telegram.
- **Personal AI Assistant for Meetup Members:** Members can interact with an AI assistant to get information about the schedule and other details related to the events managed in the Google Sheet.

## How it works:

1.  **Input Handling:**
    *   The workflow is triggered either by a Telegram message (`telegramInput` node) or an n8n chat input (`n8nInput` node).
    *   Based on the trigger, either `telegramChatSettings` or `n8nChatSettings` is used to extract and standardize input data (message content, chat ID, and mode).
2.  **Data Preparation:**
    *   `Settings` node normalizes the input by setting a `scheduleURL`, `inputMessage`, `chatId` and `mode` variable.
    *   `Schedule` node fetches schedule data from a Google Sheet using the URL provided in `Settings` node.
    *   `ScheduleToMarkdown` node converts the fetched Google Sheet data into a Markdown table format. This table provides context for the AI.
3.  **AI Processing:**
    *   `ScheduleBot` node uses the Langchain Agent to process the user's input and the schedule data. It uses a system message to define its role as a helpful assistant. The `text` parameter takes the user's input from the `Settings` node, and it also feeds the LLM with the Markdown table of the current schedule.
    *   `Memory` node stores conversation history to maintain context across multiple interactions, using the chat ID as a session key.
    *   `LLM` (ChatOpenRouter) generate a response.
4.  **Response Routing and Sending:**
    *   `SetResponse` node assembles the response from the AI and stores it in a `responseMessage` variable.
    *   `Switch` node routes the response based on the input mode (`n8n` or `telegram`).
    *   If the mode is `telegram`, the `telegramResponse` node sends the response message back to the user via Telegram. If the mode is `n8n`, the `n8nResponse` node returns the response to the n8n chat.
5.  **Telegram-Specific Actions:**
    *   The `SendTyping` node sends a "typing" indicator to the Telegram chat before the AI processes the message, improving the user experience.

## Services:

*   Telegram API
*   Google Sheets API
*   OpenRouter API
*   Langchain

## Hashtags:

#n8n #automation #telegrambot #AI #scheduler
