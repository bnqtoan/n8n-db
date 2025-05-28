## Workflow Readme

### Use cases:

1.  **Voice-to-Text Transcription:** This workflow can be used to convert audio files (specifically `.wav` files) into text using the Wit.ai speech recognition API.
2.  **Automated Audio Analysis:**  Integrate this workflow into a larger system to automatically analyze audio files, extract insights, or trigger actions based on the transcribed text.
3.  **Speech-Enabled Applications:** Create applications where audio input is processed and used to control functionality or retrieve information.

### How it works:

1.  **Read Binary File:** The workflow starts by reading a `.wav` audio file located at `/data/demo1.wav`. This node reads the binary data of the audio file.
2.  **HTTP Request:**  The binary data from the audio file is then sent to the Wit.ai speech recognition API (`https://api.wit.ai/speech?v=20200513`) via an HTTP POST request.
    *   The `Content-Type` header is set to `audio/wav`, indicating the type of data being sent.
    *   The `Authorization` header includes a bearer token (`Bearer {your_token_goes_here}`) for authentication with the Wit.ai API.  **Important:** You will need to replace `{your_token_goes_here}` with your actual Wit.ai API token for the workflow to function correctly.

### Services:

*   **Wit.ai:** A natural language processing platform that provides speech recognition services.  (Note: This workflow requires you to have an account with Wit.ai and obtain an API token.)

### Hashtags:

#n8n #automation #speechtotext #witai #audioanalysis
