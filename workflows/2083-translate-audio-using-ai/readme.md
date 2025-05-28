# French Text to English Audio

## Use cases:

- **Language Learning:** Translate French text into English audio to help language learners improve their listening comprehension and pronunciation.
- **Content Localization:** Convert French articles, blog posts, or documents into English audio for a wider audience.
- **Accessibility:** Make French content accessible to individuals who prefer listening to reading.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it.
2.  **Set ElevenLabs voice ID and text:** This node sets the ElevenLabs voice ID and the French text that will be translated to speech.
3.  **Generate French Audio:** The workflow calls the ElevenLabs API to convert the French text into an audio file using the specified voice ID and saves it as binary data.
4.  **Add Filename:** Adds the filename `audio.mp3` to the binary data.
5.  **Transcribe audio:** The workflow sends the audio file to OpenAI's transcription service to convert the audio back into text.
6.  **Translate Text to English:** The workflow uses an OpenAI Language Model to translate the transcribed French text into English.
7.  **Translate English text to speech:** The workflow calls the ElevenLabs API again, this time converting the translated English text into an audio file using the same voice ID.

## Services:

-   **ElevenLabs:** Text-to-speech service for generating audio from text.
-   **OpenAI:** Used for both audio transcription (Whisper) and text translation.

## Hashtags:

#n8n #automation #translation #elevenlabs #openai
