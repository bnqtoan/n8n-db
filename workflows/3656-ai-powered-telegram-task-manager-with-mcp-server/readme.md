# Telegram Task Manager with AI Agent

## Use cases:

- **Personal Task Management:** A user can send task-related requests or voice notes via Telegram, and the AI agent manages and updates their Google Tasks accordingly.
- **Automated Task Completion:** The system can automatically mark tasks as complete based on voice commands or text input received through Telegram.
- **Daily Task Briefing:** The AI agent can provide a summary of today's or upcoming tasks when prompted via Telegram.

## How it works:

1.  **Incoming Message (Telegram Trigger):** The workflow starts when a message is received via Telegram.
2.  **Switch:** The message type is checked to determine if it's a text message or a voice note.
3.  **Voice Note Processing:**
    - If it's a voice note, the `file_id` is extracted.
    - The audio file is downloaded from Telegram.
    - The audio is transcribed using OpenAI to convert it into text.
    - The transcribed text is set as `chatInput`.
4.  **Text Message Processing:**
    - If it's a text message, the text is directly set as `chatInput`.
5.  **AI Agent:** The `chatInput` is fed to the AI Agent. The AI Agent uses:
    - **OpenAI Chat Model (gpt-4o-mini):** For processing the input and generating responses.
    - **Simple Memory:** To maintain conversation history.
    - **MCP Client:** To communicate with a MCP Server for actions, and allows the AI agent to use tools like:
        - **Google Tasks Tools:** Which are triggered by a Multi Control Plane (MCP) Server to do the following:
            - `create_todays_task`
            - `create_upcoming_task`
            - `complete_task`
            - `get_todays_tasks`
            - `get_upcoming_tasks`
6.  **Chat Output:** The AI Agent's response is stored in `chatOutput`.
7.  **Send Message (Telegram):** The `chatOutput` is sent back to the user via Telegram.

## Services:

-   **Telegram:** For receiving user input and sending responses.
-   **OpenAI:** For transcribing audio and processing natural language to complete task.
-   **Google Tasks:** For managing the task list.
-   **Multi Control Plane (MCP) Server:** Is trigger by a client that allows the AI agent to use the google tasks tool

## Hashtags:

#n8n #automation #telegram #taskmanagement #aiagent
