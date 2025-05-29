# Agent AI Calendar [n8n pro]

## Use cases:

- **Automated Calendar Management:** Users can create, update, fetch, or delete Google Calendar events via natural language commands sent through Telegram.
- **Voice-Activated Scheduling:** Schedule events on the go by simply sending a voice message to Telegram, which is transcribed and then processed to update the calendar.
- **Personal Assistant Integration:** Acts as a personal digital assistant that efficiently manages a user's calendar, considering priorities and work-life balance.

## How it works:

1.  **Receive User Input (Telegram):** The workflow starts when a user sends a message (text or voice) via Telegram.
2.  **Is Voice Message?:** Checks if the message is a voice note.
3.  **Voice Transcription (if voice message):**
    *   **Download Voice File:** Downloads the voice file from Telegram.
    *   **Transcribe Voice to Text:** Uses OpenAI Whisper to convert the voice message to text.
4.  **Text Extraction (if text message):**
    *   **Extract Text Message:** Extracts the plain text from the user's message.
5.  **AI Calendar Assistant (LangChain):** Analyzes the user's intent using a Langchain agent and GPT-4 to determine the appropriate calendar action (create, update, fetch, or delete).  It uses a detailed prompt to define its role as a personal assistant.
6.  **Google Calendar Actions:** Performs the action on Google Calendar as determined by the AI. It uses dynamic values for event details like start and end times. The workflow includes nodes for:
    *   **Create Event:** Creates a new event in the user's Google Calendar.
    *   **Get events:** Retrieves events from the user's Google Calendar based on a period.
    *   **Update Calendar:** Updates an existing event in the user's Google Calendar.
    *   **Detele Event:** Deletes an event from the user's Google Calendar.
7.  **Send Response to Telegram:** Sends a confirmation or result message back to the user via Telegram.

## Services:

-   **Telegram:** For receiving user input and sending responses.
-   **Google Calendar:** For managing calendar events (create, update, fetch, delete).
-   **OpenAI (Whisper):** For transcribing voice messages to text.
-   **OpenAI (GPT-4):** For interpreting user intent and selecting the appropriate calendar action.

## Hashtags:

#n8n #automation #workflow #googlecalendar #openai #telegram #langchain
