# 📊 AI Token Tracker for WhatsApp & Telegram – Save AI Usage to Google Sheets

## Use cases:

- **Tracking AI Usage Costs:** Monitor the cost of AI interactions across WhatsApp and Telegram by logging token usage in a Google Sheet, aiding in budget management.
- **Analyzing AI Performance:**  Store AI interaction data (prompts, responses, and token counts) in a Google Sheet to analyze the effectiveness of the AI agent, identify areas for improvement, and refine prompts.
- **Auditing AI Interactions:** Maintain a detailed log of all AI interactions for compliance, security, or quality assurance purposes. This allows for easy review and analysis of conversations.

## How it works:

1.  **Trigger:** The workflow is triggered either by a message received via the Evolution API (WhatsApp) or a Telegram trigger.
2.  **Media Handling (WhatsApp):** If the message from WhatsApp contains media (audio), the workflow fetches the media file.
3.  **Audio Conversion (WhatsApp):** The audio file is converted into a usable format for transcription.
4.  **Transcription (WhatsApp Audio):** The audio is transcribed using an AI-powered transcription service.
5.  **Text Mapping:** The text from the transcription node or the text from the Telegram node is mapped using the "Text Mapping" node.
6.  **AI Agent:** The transcribed text or the text from Telegram is sent to an AI Agent (likely using a Large Language Model).
7.  **Clean Up:** The data is cleaned and formatted before being saved to a Google Sheet. Two Google Sheets nodes are used: one for logging standard data and one for logging errors.
8.  **Google Sheets Logging:** The workflow logs the AI usage data to a Google Sheets document.
9.  **Response:** The AI Agent response is sent back to the user via WhatsApp or Telegram, depending on the initial trigger.
10. **Error Handling:** If there are errors during the process, they are logged to a separate Google Sheets document and an error message is sent via either WhatsApp or Telegram to notify the user about an issue.

## Services:

-   **Evolution API:** Used for receiving WhatsApp messages.
-   **Telegram API:** Used for sending and receiving Telegram messages.
-   **Google Sheets API:** Used for logging AI usage data and errors.
-   **AI Agent (Langchain):** Used to process user requests with a Large Language Model.
-   **OpenAI API (Audio Transcription):** Used for transcribing audio messages to text.

## Hashtags:

#n8n #automation #ai #whatsapp #telegram #googleSheets
