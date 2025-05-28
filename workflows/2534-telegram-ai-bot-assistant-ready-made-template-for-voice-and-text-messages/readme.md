# Telegram AI multi-format chatbot

## Use cases:

- **Telegram-based personal assistant:** Users can interact with an AI assistant via Telegram, asking questions, seeking advice, or requesting information using text or voice messages.
- **Multilingual Voice transcription service:** Accept voice messages in different languages, transcribe them into text using OpenAI, and provide a textual response via Telegram.
- **Telegram bot for customer support:** Integrate the workflow into a customer support Telegram channel to answer customer inquiries, provide troubleshooting steps, or offer product information.

## How it works:

1.  **Listens for incoming Telegram events:** The workflow starts by using the "Telegram Trigger" node to listen for new messages sent to the Telegram bot.
2.  **Determine content type**: Determines the content type of the incoming message. Depending on its nature, the data will be routed to different nodes.
3.  **Transcribes voice messages (if applicable):** If the message is a voice message, the "Download voice file" node downloads the audio file, and the "Convert audio to text" node uses OpenAI to transcribe it into text.
4.  **Combines content and sets properties:** The "Combine content and set properties" node merges the text from either the direct text message or the transcribed voice message into a single `CombinedMessage` variable.
5.  **AI Agent interaction:** The "AI Agent" node sends the combined message to an OpenAI language model (specifically `gpt-4o`), with specific instructions on how to interact with the user, how to format code and general information on using Telegram’s supported HTML formatting.
6.  **Window Buffer Memory:** The "Window Buffer Memory" node is used to keep track of the conversation history to provide context for better responses
7.  **Sends the AI response:** The "Send final reply" node sends the response from the AI Agent back to the user via Telegram, formatted as HTML.
8.  **Error Handling:** There is error handling to format the text correctly before sending it with the node "Correct errors"

## Services:

-   Telegram API
-   OpenAI API

## Hashtags:

#n8n #Telegram #OpenAI #Chatbot #Automation
