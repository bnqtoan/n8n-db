# 🤖 Telegram Messaging Agent for Text/Audio/Images

## Use cases:
- **Automated Task Management:** Users can send text or voice messages to a Telegram bot, which classifies them as tasks or general messages and then sends them to the appropriate channels.
- **Image Analysis and Reporting:** When users send images to the Telegram bot, the bot analyzes the image content and sends a description back to the user.
- **Webhook Management:** Streamline the setup and verification of Telegram bot webhooks for testing and production environments.

## How it works:

1.  **Receive Telegram Events:** The workflow starts by listening for incoming Telegram messages using a Webhook node (`Listen for Telegram Events`).
2.  **Validate User:** The workflow validates the user using the `Validation` and `Check User & Chat ID` nodes, and filters based on predefined user information.
3.  **Message Routing:** The workflow then routes the messages based on the media type, the type of message which can be: text, audio, image, or extra.
4.  **Process Audio Messages:**
    *   The workflow extracts the audio file (`Get Audio File`) and transcribes the audio using OpenAI's transcription service (`Transcribe Recording`).
    *   The transcribed text is then classified using a text classifier (`Text Classifier Audio`) to determine if it is a task-related message.
    *   A message is sent back to the user via Telegram (`Audio Task Message` or `Audio Other Message`) based on the classification.
5.  **Process Text Messages:**
    *   Extract the text message (`Edit Fields`).
    *   The text is classified using a text classifier (`Text Classifier`) to determine if it is a task-related message.
    *   A message is sent back to the user via Telegram (`Text Task Message` or `Text Other Message`) based on the classification.
6.  **Process Image Messages:**
    *   The workflow extracts the image (`Image Schema` and `Get Image`) and uses OpenAI to analyze the image (`Analyze Image`).
    *   The response from OpenAI is then sent back to the user via Telegram (`Image Message`).
7.  **Error Handling:** If the user validation fails, an error message is sent back to the user (`Error message`).
8.  **Webhook Management:**
    *   Set a telegram bot webhook with a set node (`Telegram Token & Webhooks`)
    *   Set Webhook to test URL (`Set Webhook Test URL`) or production URL (`Set Webhook Production URL`)
    *   Check the webhook status (`Get Telegram Webhook Info`)

## Services:

-   Telegram API
-   OpenAI API (for transcription, image analysis, and chat)

## Hashtags:

#n8n #TelegramBot #Automation #OpenAI #WorkflowAutomation
