# My workflow

## Use cases

- **Personal Finance Tracking via Telegram:** Allows users to track their income and expenses by sending text or voice messages to a Telegram bot. The bot uses AI to understand the message, update a Google Sheet, and respond with a summary.
- **Voice-Enabled Finance Management:** Users can record voice messages describing financial transactions. The workflow automatically transcribes these messages, extracts relevant information, updates a finance tracker, and provides feedback.
- **AI-Powered Budgeting Assistant:** Provides an interactive budgeting experience through Telegram. Users can ask questions about their financial status, and the AI leverages existing data in Google Sheets to provide personalized insights and suggestions.

## How it works

1.  **Receive Input via Telegram:** The workflow starts when a user sends a message (text or voice) to a Telegram bot.
2.  **Detect Message Type:** Determines whether the message is text or voice.
3.  **User's Text Message / Download User's Voice Message:**
    *   If text, the message is passed directly to the AI agent.
    *   If voice, the voice message is downloaded from Telegram.
4.  **Transcribe Voice Message:** The downloaded voice message is transcribed into text using an AI service (likely OpenAI).
5.  **Finance Tracker Agent:** The core of the workflow. An AI agent (likely built with Langchain) receives the user's message (either original text or transcribed voice input). This agent is designed to:
    *   **Watch Existing Finance Data:** Access and understand existing financial data from a Google Sheet.
    *   **Add New Finance Data:** Update the Google Sheet with new transaction information extracted from the user's message.
    *   **Remember Chat History:** Keeps track of the conversation for context.
    *   **Generate User's Reply With OpenAi:** Uses OpenAI to creates a response to the user based on the data.
6.  **Send AI Response to Telegram:** The AI agent's response is sent back to the user via Telegram.

## Services

*   Telegram
*   OpenAI
*   Google Sheets

## Hashtags

#n8n #automation #finance #telegram #AI
