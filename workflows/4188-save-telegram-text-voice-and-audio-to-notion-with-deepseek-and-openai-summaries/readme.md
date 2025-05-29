# Telegram Text, Voice Note or Audio file to Notion Database

## Use cases:

*   **Personal Note-Taking:** Automatically save Telegram messages, voice notes, or audio files to a Notion database for personal record-keeping and organization.
*   **Meeting Summarization:** When used in conjunction with transcription services (not explicitly in the workflow but implied), automatically transcribe and summarize voice notes or audio files from Telegram and save them to Notion as meeting notes.
*   **Customer Feedback Logging:**  Forward specific Telegram messages (e.g., from a customer service bot) containing feedback to a Notion database for tracking and analysis, potentially using AI to categorize sentiment.

## How it works:

This workflow listens for incoming messages, voice notes, or audio files in Telegram and saves this information into a Notion database.

1.  **Telegram Trigger:** The workflow starts when a new message, voice note, or audio file is received in Telegram via the "Telegram Trigger" node.
2.  **Switch:** The "Switch" node likely routes the workflow based on the type of Telegram input (text, voice note, or audio file).
3.  **Telegram/OpenAI/AI Agent/Notion path:** Route for text type Telegram messages.
4.  **Telegram1/OpenAI2/AI Agent1/Notion3 path:** Route for audio or voice note messages.
5.  **AI Agent/Notion1 path:** Route for generic messages.
6.  **AI Agent2/Notion4 path:** This path is only connected to OpenAI without a Telegram connection, so it will not work.
7.  **Notion:** The data (message content, potentially processed by OpenAI or other AI models for summarization or analysis) is saved as a new entry in a specified Notion database. Several "Notion" nodes are used to define the databases.

## Services:

*   Telegram
*   Notion
*   OpenAI
*   DeepSeek Chat Model

## Hashtags:

#n8n #Telegram #Notion #Automation #VoiceNotes
