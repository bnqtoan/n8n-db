# All-in-One Telegram/Baserow AI Assistant 🤖🧠 Voice/Photo/Save Notes/Long Term Mem

## Use cases:

- **Personal AI Assistant:** Users can interact with an AI assistant directly through Telegram to manage notes, memories, and answer general questions using text, voice, and images.
- **Automated Note-Taking:** The assistant can automatically save important information and reminders from Telegram chats into a Baserow database for later retrieval.
- **Image and Voice Analysis:** The workflow can analyze images sent via Telegram, transcribe voice recordings, and use the extracted information to provide contextually relevant responses.

## How it works:

1.  **Telegram Event Listener:** The workflow starts when a message is received via Telegram.
2.  **User Validation:** It validates the Telegram user based on first name, last name, and ID against predefined values.
3.  **Message Router:** The workflow checks if the message contains voice, text, or image content, then routes the message accordingly.
4.  **Content Processing:**
    -   **Voice:** The workflow retrieves the audio file, transcribes it using OpenAI, and then passes it to the AI Agent.
    -   **Text:** The text is directly passed to the AI Agent.
    -   **Image:** The image file ID is retrieved, the image is downloaded, converted to base64, and analyzed using OpenAI to get a description. The description and caption are then merged and passed to the AI Agent.
5.  **Memory and Note Retrieval:** Fetches memories and notes related to the current chat from Baserow.
6.  **AI Agent (Langchain):** The AI Agent uses the message content, retrieved memories/notes, and a predefined system message to generate a response. The agent has access to tools to save memories and notes to Baserow.
7.  **Chat Memory Management:** Uses Postgres to store chat history, improving contextual understanding over time.
8.  **Response:** The AI-generated response is sent back to the user via Telegram. The assistant also has the capability of saving user information to a Baserow database for Long Term Memory.

## Services:

-   Telegram API: For receiving messages and sending responses.
-   OpenAI API: For transcribing audio and analyzing images.
-   Baserow API: For storing and retrieving notes and memories.
-   Postgres: For storing short term chat history.

## Hashtags:

#n8n #automation #telegrambot #aiassistant #memorymanagement
