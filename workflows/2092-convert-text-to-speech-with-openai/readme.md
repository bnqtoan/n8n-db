# Text to Speech (OpenAI)

## Use cases

- **Automated Voice Notifications:** Generate audio notifications for various events, such as system alerts, appointment reminders, or order updates.
- **Content Creation:** Convert written articles, blog posts, or scripts into audio format for podcasts, audiobooks, or accessibility purposes.
- **Interactive Voice Response (IVR) Systems:** Create dynamic voice responses for IVR systems based on user input or data from external sources.

## How it works

1.  **Trigger:** The workflow starts with a "When clicking 'Test workflow'" node, which is a manual trigger for testing purposes.  This can be replaced with another trigger type for real-world use cases.
2.  **Set Input Text and TTS Voice:** A "Set" node defines the text to be converted to speech ("input\_text") and the voice to be used ("voice").  The default text is "The quick brown fox jumped over the lazy dog.", and the voice is set to "alloy". This node allows customization of the text and voice parameters.
3.  **Send HTTP Request to OpenAI's TTS Endpoint:** An "HTTP Request" node sends a POST request to OpenAI's Text-to-Speech API endpoint (`https://api.openai.com/v1/audio/speech`).
    -   It passes the `model`, `input` (from the Set node), and `voice` (from the Set node) parameters in the request body.
    -   It includes an `Authorization` header with the OpenAI API key. Make sure you have configured and provided valid OpenAI credentials.
4.  **Output:** The OpenAI API returns an MP3 audio file as a binary output. This audio file can then be used in subsequent nodes to play the audio, save it to a file, or send it to another service.

## Services

-   **OpenAI Text-to-Speech API:** Converts text into natural-sounding speech.

## Hashtags

#n8n #automation #workflow #texttospeech #openai
