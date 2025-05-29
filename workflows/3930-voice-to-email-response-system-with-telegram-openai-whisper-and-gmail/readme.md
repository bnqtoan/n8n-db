# VoicerEmailer

## Use Cases
- **Automated Email Response:** Automatically generates draft email replies based on voice notes received via Telegram, saving time and effort.
- **Hands-Free Email Management:** Allows users to manage and respond to emails while on the go, using voice input instead of typing.
- **Improved Accessibility:** Enables users with mobility issues to respond to emails more easily using voice notes.

## How it works
1. **New Email Trigger:** The workflow starts when a new email is received in Gmail.
2. **Inbox Check:** Checks if the email is in the Inbox.
3. **Response Needed?:** Uses OpenAI to determine if the email requires a response.  It analyzes the email content and sender to decide if a reply is necessary. The `Structured Output Parser` formats the OpenAI response into a usable JSON format.
4. **Telegram Notification:** If a response is needed, a message is sent to a Telegram bot with the email details.  The `Set Chat ID` node is used to specify which Telegram chat to send the message to.
5. **Telegram Audio Reply:** When the user replies to the Telegram message with a voice note, the workflow is triggered.
6. **Audio Transcription:** The voice note is transcribed into text using the OpenAI Whisper API.
7. **Compose Draft:** OpenAI creates a draft email response based on the original email content and the transcribed voice note.
8. **Draft Creation:** A new draft email is created in Gmail, pre-filled with the generated response, with the subject and thread ID taken from the original email. A link to the draft is sent back to the user via Telegram for review and sending.

## Services
- Gmail
- OpenAI
- Telegram

## Hashtags
#n8n #automation #email #openai #telegram
