# 💬 Demo Call Back

## Use Cases

- **Automated Customer Service:**  The workflow can be used to create a chatbot that provides voice responses to customer inquiries via Telegram, offering support in multiple languages.
- **Multilingual Voice Assistant:** Enables building a voice assistant accessible through Telegram that can understand and respond in different languages (Chinese, Cantonese, Japanese, English).
- **Demo Application for Voice-Based Interactions:** This workflow serves as a demo for showcasing voice-based interactions with a Telegram bot, potentially for sales calls or educational purposes.

## How it Works

This workflow automates voice-based interactions with a Telegram bot. Here's a breakdown:

1.  **Trigger:** The workflow is initiated either by a `Flow Trigger` or a `Test Trigger` (likely a webhook).
2.  **Input Processing:** Initial `Input` and `Test Fields` nodes capture the incoming data.
3.  **Provider Logic:**
    *   The workflow checks for a provider in a Redis cache (`Provider Cache`).
    *   If not found, it loads provider data from a Postgres database (`Load Provider Data`) and saves it to the Redis cache (`Save Provider Cache`).
    *   If found in the cache it parse the cache.
4.  **Language Detection/Selection:** Based on the input, a `Switch` node directs the flow to the appropriate language-specific node (`Chinese, Yue`, `Chinese`, `Japanese`, `English`).
5.  **Text-to-Speech (TTS):**  The selected language node sends the text to the Minimax TTS service (`Minimax TTS`) to generate speech.
6.  **Audio Download:** The workflow downloads the audio file from Minimax (`Download Minimax Audio`).
7.  **Telegram Voice Output:** The audio is sent as a voice message via Telegram (`Telegram Voice Output`).
8.  **Chat Logging:** The workflow creates logs for both input and output in a Postgres database (`Create Chat Log Input`, `Create Chat Log Output`).
9.  **Reply Handling:** The workflow determines whether to send the voice message as a reply or a new message via `Telegram Reply Output` and `Telegram Output`.
10. **Output:** The final result is set in the `Output` node.

## Services

*   **Telegram:**  Messaging platform for sending and receiving messages.
*   **Redis:** In-memory data store for caching provider information.
*   **Postgres:** Database for storing provider data and chat logs.
*   **Minimax TTS:** Text-to-speech service for generating audio from text.

## Hashtags

#n8n #automation #telegrambot #voiceassistant #multilingual
