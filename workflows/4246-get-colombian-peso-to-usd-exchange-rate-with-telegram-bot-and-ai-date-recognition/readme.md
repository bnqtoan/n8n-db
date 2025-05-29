# Personal - Solicitar TRM

## Use cases:
- **Quick TRM Lookup**: Users can quickly retrieve the current or past TRM (Representative Market Rate) by simply sending a message with a date to a Telegram bot.
- **Automated Financial Tracking**: Automate tracking the historical exchange rate to feed into personal finance spreadsheets or investment analyses.
- **Voice-Activated Currency Conversion**: Allows users to ask for the TRM via voice messages, making it hands-free and accessible.

## How it works:
1.  **Telegram Trigger**: The workflow starts when a user sends a message (text or audio) to a Telegram bot.
2.  **Audio or Text Validation**: Based on whether it receives a voice message or a text message, the workflow decides which path to take.
3.  **Audio Transcription (if applicable)**: If the message is an audio, the workflow downloads the audio file from Telegram and transcribes it into text using OpenAI.
4.  **Text Extraction**: The text from the Telegram message is passed to the *Edit Fields* node.
5.  **Date Extraction with AI**: An *Extractor Agent* (powered by Langchain and OpenAI) attempts to identify and extract the date mentioned in the user's message. It uses a system message to guide the AI in extracting the date in YYYY-MM-DD format. It defaults to the current date if none is provided.
6.  **Date Validation**: The extracted date is validated against the current date to ensure it's not in the future. If the date is in the future, a notification is sent via Telegram.
7.  **TRM Data Retrieval**:
    *   If the date is valid (not in the future), an HTTP Request node fetches the TRM for the specified date from the `datos.gov.co` API.
    *   A check is performed to see if the 'valor' field exists in the response.
8.  **Handling Missing Data**:
    *   If the TRM data exists for the specified date, it sends the 'valor' (TRM value) back to the user via Telegram.
    *   If the TRM data does not exist for the specified date, the workflow loops through the past 10 days to find the last available TRM value.
9.  **Historical Data Retrieval (Loop)**:
    *   The workflow generates an array of 10 numbers (1 to 10) and splits it into individual items.
    *   For each number, it calculates a past date by subtracting the number of days from the initial date.
    *   It then fetches the TRM data for the adjusted date from the API.
    *   A filter node removes rows that does not have the "valor" value
10. **Final Response**: The most recent available TRM value from the past 10 days is sent back to the user via Telegram. If no data is found, a message indicating that no information is available is sent.

## Services:
- Telegram API
- OpenAI API
- datos.gov.co (Colombian Government Open Data API)

## Hashtags:
#n8n #automation #TRM #Colombia #TelegramBot
