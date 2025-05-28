# Angie, AI Assistant 👩🏻‍🏫

## Use cases:

- **Personal Assistant:**  Users can interact with the assistant via Telegram to retrieve information like upcoming calendar events, unread emails, or information from a task management system (Baserow).
- **Voice-to-Text Automation:**  Users can send voice notes via Telegram, which are transcribed into text and then processed by the AI assistant.
- **Contextual Information Retrieval:** The AI assistant can access and summarize information from multiple sources (Gmail, Google Calendar, Baserow) based on user queries via Telegram.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message or voice note to a Telegram bot ("Listen for incoming events").
2.  **Voice or Text selector:** The workflow determines if the telegram message is a text or voice message.
3.  **Conditional Branching:** If the message is empty it stops, otherwise continues.
4.  **Voice Processing (if applicable):** If the input is a voice note, it retrieves the file, transcribes the audio to text using OpenAI's Speech to Text, and proceeds to step 6.
5.  **Text Input:** If the input is text from the telegram message, it will proceed to step 6.
6.  **AI Assistant (Angie):** An AI agent powered by Langchain and OpenAI processes the transcribed text or the original text message. It uses tools like:
    *   **Memory Buffer:** To retain conversation history ("Window Buffer Memory").
    *   **Google Calendar:**  To fetch calendar events.
    *   **Gmail:** To search and summarize emails.
    *   **Baserow:** To access task information.
    *   **Contacts:** To access Contact information.
7.  **Telegram Response:** The AI assistant formulates a response and sends it back to the user via Telegram.

## Services:

*   Telegram
*   Google Calendar
*   Gmail
*   OpenAI
*   Baserow

## Hashtags:

#n8n #automation #AIassistant #Telegram #Langchain
