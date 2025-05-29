# Telegram ChatBot with multiple sessions

## Use cases:

- **Customer Support:** Provide instant answers to customer inquiries on Telegram, maintaining context across multiple interactions.
- **Personal Assistant:** Manage tasks, set reminders, or answer questions based on a user's past conversations and preferences.
- **Educational Tool:** Facilitate interactive learning experiences by answering questions related to specific topics and adapting to the student's learning history.

## How it works:

This workflow automates a Telegram chatbot powered by AI and maintains conversation context across multiple sessions using Google Sheets as a database.

1.  **Receive Telegram Message:** The workflow starts when a user sends a message to the Telegram bot (`Telegram Trigger` node).
2.  **Check Command:** The `Switch` node then routes the message based on the command given by the user.
    *   `/new`: Starts a new session.
    *   `/current`: Gets the current session ID.
    *   `/resume [session_id]`: Resumes a specific session.
    *   `/summary`: Generates a summary of the current session.
    *   `/question [question]`: Asks a specific question based on the conversation history.
    *   *Default:* Pass the text to the Chatbot.
3.  **New Session:**
    *   The old `current` session in Google Sheets is set to `expire`.
    *   A new session is created and set to `current` in Google Sheets, using the message ID as a session ID.
    *   The bot sends a "New session activated" message to the user.
4.  **Get Current Session:** Retrieves the current session ID from Google Sheets.
    *   If the session exists, it sends the session ID to the user. Otherwise, sends an error message
5.  **Resume Session:**
    *   Parses the `/resume` command to extract the session ID.
    *   Sets the previous current session to expire.
    *   Sets the specified session to current in Google Sheets.
    *   Check if the new Session ID exist. If not, returns an error message
6.  **Get Summary**
    *   Retrieves all prompts and responses from the database (`Database` sheet) for the current session.
    *   Concatenates the prompts and responses into a single text.
    *   Summarizes the text using a Summarization Chain and the `gpt-4o-mini` model.
    *   Send the summary to the user.
7. **Ask Question**
    *   Retrieves all prompts and responses from the database (`Database` sheet) for the current session.
    *   Concatenates the prompts and responses into a single text.
    *   Parses the `/question` command to extract the question
    *   Answer the question based on the conversation history using a `gpt-4o-mini` model.
    *   Send the answer to the user.
8.  **Chatbot:**
    *   Send the prompt to the chatbot using `Telegram Chatbot` with `OpenAI Chat Model` and save the context using `Simple Memory`.
    *   The chatbot's response is sent back to the user.
    *   The prompt and response are saved to the `Database` sheet in Google Sheets, along with the session ID and the current timestamp.

## Services:

-   Telegram API
-   Google Sheets API
-   OpenAI API

## Hashtags:

#n8n #telegram #chatbot #automation #openai
