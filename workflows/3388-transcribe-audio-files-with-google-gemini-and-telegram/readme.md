# Telegram Audio Transcription Workflow

## Use cases:

- **Automated Meeting Summarization:** Transcribe audio recordings of meetings received via Telegram to quickly generate summaries and action items.
- **Voice Note Transcription:** Automatically convert voice notes received on Telegram into text for easier review and archiving.
- **Accessibility for Hearing-Impaired:** Provide real-time or near real-time transcriptions of audio content shared on Telegram to improve accessibility.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a message is received via Telegram.
2.  **Switch:** Determines the route based on if the message contains audio or text.
3.  **Telegram3:** If the switch contains audio, it then passes the audio to this node for processing.
4.  **Initialize Upload Session:** An HTTP request is made to initialize an upload session, likely for a cloud storage service where the audio will be temporarily stored.
5.  **Merge:** Merges the response from the upload initialization with the audio data.
6.  **Upload file:** Uploads the audio file to a cloud storage service using another HTTP request.
7.  **Ask Gemini to transcribe:** Sends the audio file to Google's Gemini API for transcription.
8.  **Reply in Telegram:** Sends the transcribed text back to the user via Telegram.

## Services:

*   Telegram
*   Google Gemini API (Implicit based on node name "Ask Gemini to transcribe")
*   Cloud Storage Service (Likely, based on "initialize upload session" and "Upload file" nodes, but the specific service isn't identified)

## Hashtags:

#n8n #automation #telegram #transcription #audio
