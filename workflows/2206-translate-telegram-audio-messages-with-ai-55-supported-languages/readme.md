# Translate Telegram audio messages with AI (55 supported languages) v1

## Use cases:

- **Language Learning:** Users can send voice messages in their native language and receive translations in the target language, aiding in vocabulary and pronunciation practice.
- **International Communication:** Facilitates real-time communication between individuals who speak different languages by automatically translating voice messages.
- **Accessibility:** Helps individuals who prefer to communicate via voice but need translations for comprehension due to language barriers.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a message is received by a Telegram bot via the "Telegram Trigger" node.
2.  **Settings:** The "Settings" node initializes languages for translation.
3.  **Input Error Handling:** The "Input Error Handling" node checks for text in the message.
4.  **Telegram:** The "Telegram1" node takes the file ID from the Telegram message to get the voice message file.
5.  **OpenAI2:** The "OpenAI2" node transcribes the audio from the telegram voice message to text.
6.  **Auto-detect and translate:** The "Auto-detect and translate" node identifies the source language and translates the text to the configured output language using a prompt for the LLM Chain node.
7.  **Text Reply:** The "Text reply" node sends the translated text back to the user in a Telegram message.
8.  **OpenAI:** The "OpenAI" node creates an audio based on the translated text.
9.  **Audio Reply:** The "Audio reply" node sends the translated audio message back to the user in a Telegram message.

## Services:

-   **Telegram API:** Used for receiving messages and sending text/audio replies.
-   **OpenAI API:** Used for speech-to-text transcription, text translation, and text-to-speech audio generation.

## Hashtags:

#n8n #automation #telegram #openai #translation
