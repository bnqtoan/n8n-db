# Text-to-Speech Workflow

## Use cases:

- **Automated Voice Notifications:** Generate and play audio notifications for system events, alerts, or reminders.
- **Content Narration:** Convert written text into spoken audio for accessibility or to create audio versions of articles and documents.
- **Personalized Audio Messages:** Create customized audio greetings or messages based on dynamic data.

## How it works:

1.  **Start (Manual Trigger):** The workflow begins with a manual trigger, allowing you to initiate the process.
2.  **Passing Variables (Set Node):** A "Set" node defines two variables: "voice" (set to "af\_sarah") and "text" (set to "Hello world!"). These variables contain the voice type and the text to be converted to speech.
3.  **Run python script (Execute Command):** The `Run python script` node executes a Python script (`C:\\KOKORO\\voicegen.py`). It passes the "text" and "voice" variables as arguments to the script. The script is responsible for generating an audio file (presumably `output.mp3`) using a text-to-speech engine. The "1" may indicate the speaker's gender.
4.  **Play sound (Read Binary Files):** A "Read Binary Files" node then reads the generated audio file (`D:/output.mp3`).  n8n would then use the file as a binary object. The workflow is configured to play the sound but lacks a node to trigger this.

## Services:

-   **Python:** Utilizes a Python script for text-to-speech conversion.
-   **Text-to-Speech Engine (Implicit):**  The Python script likely uses a text-to-speech library or API (not explicitly named but crucial for the workflow's functionality).

## Hashtags:

#n8n #automation #texttospeech #voicegeneration #audio
