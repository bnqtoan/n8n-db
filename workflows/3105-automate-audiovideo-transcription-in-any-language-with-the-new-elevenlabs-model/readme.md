# Eleven Labs Speech to Text Transcription Workflow

## Use cases:

*   **Automatic Transcription of Audio Files:** Automatically transcribe audio files (e.g., recordings of meetings, lectures, or interviews) into text for documentation or analysis.
*   **Content Creation:** Generate written content from audio sources, which can then be used for blog posts, articles, or social media updates.
*   **Accessibility:** Create transcripts for videos or audio content to make it accessible to individuals who are deaf or hard of hearing.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Read Audio File:** The "Read/Write Files from Disk" node reads the audio file `/files/tmp/tst1.mp4` from the specified location.
3.  **Create Transcript:** The "Create Transcript1" node sends a POST request to the ElevenLabs Speech-to-Text API (`https://api.elevenlabs.io/v1/speech-to-text`).
    *   It uses the "scribe\_v1" model for transcription.
    *   It sends the audio file and model ID as multipart/form-data.
    *   Authentication is handled using the Eleven Labs credentials stored in n8n.
4.  **Output:** The API response will contain the generated transcription of the audio file.

## Services:

*   **ElevenLabs API:** Used for speech-to-text conversion.

## Hashtags:

#n8n #automation #speechtotext #elevenlabs #transcription
