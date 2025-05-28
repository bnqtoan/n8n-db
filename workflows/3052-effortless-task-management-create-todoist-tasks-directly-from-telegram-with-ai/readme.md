# Telegram to Todoist Task Creator with Voice Support

## Use cases:

*   **Effortless Task Management:** Users can quickly create tasks in Todoist by simply sending a voice message or text to a Telegram bot.
*   **Hands-Free Task Creation:** Allows users to create tasks while on the move, without needing to manually type them out.
*   **Automated Project Breakdown:** Automatically breaks down large tasks into smaller, manageable sub-tasks for better organization.

## How it works:

1.  **Receive Telegram Message:** The workflow starts by listening for new messages (text or voice) sent to a Telegram bot.
2.  **Voice or Text?** A switch node checks if the message is text or voice.
3.  **Fetch Voice Message (if voice):** If the message is a voice message, the workflow fetches the audio file from Telegram.
4.  **Transcribe Voice to Text (if voice):** The voice message is transcribed into text using OpenAI's Whisper API.
5.  **Prepare for LLM (if text):** If the message is text, it gets prepared.
6.  **Basic LLM Chain:** The text (either transcribed voice or direct text) is passed to an OpenAI Chat Model (gpt-4o-mini) configured with a prompt designed to break down the input into sub-tasks formatted as JSON objects suitable for Todoist.
7.  **Extract Tasks:** Parses the LLM response to extract the task data.
8.  **Create Todoist Tasks:**  For each extracted task, a new task is created in Todoist, using the "content" as the task description and the "priority" to set the task priority.
9.  **Send Confirmation:** A confirmation message is sent back to the user via Telegram, including the task name and a link to the task in Todoist.

## Services:

*   **Telegram:** Messaging platform for receiving user input and sending confirmations.
*   **OpenAI:** Used for transcribing voice messages (Whisper API) and for the LLM Chain.
*   **Todoist:** Task management application where tasks are created.

## Hashtags:

#n8n #automation #Telegram #Todoist #taskmanagement
