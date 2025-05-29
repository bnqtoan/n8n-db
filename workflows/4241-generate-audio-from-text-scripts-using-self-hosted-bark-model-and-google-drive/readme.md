# Audio Generator

## Use cases:

- **Automated Content Creation:** Generate audio versions of blog posts or articles for accessibility or on-the-go listening.
- **E-learning Material Generation:** Convert scripts into audio lectures or training modules for online courses.
- **Accessibility Enhancement:** Create audio versions of documents for visually impaired individuals.

## How it works:

1.  The workflow is triggered either manually or via an external trigger, receiving two Google Drive folder IDs: one for the scripts and one for the audio output.
2.  The "Aggregate Inputs" node combines these folder IDs.
3.  The "Get Scripts" node retrieves all `.txt` files from the specified Google Drive folder (id_repo_script).
4.  The "Loop Scripts" node splits the script files into individual items for processing.
5.  The "Download Script" node downloads each `.txt` script from Google Drive.
6.  The "Save Script" node saves the script content to a temporary file `/tmp/script.txt`.
7.  The "Generate WAV" node executes a Python script (`/scripts/generate_voice.py`) that converts the text file into a WAV audio file. The output filename includes the original script's name.
8.  The "Read Audio" node reads the generated audio file.
9.  The "Upload Audio" node uploads the generated audio file to the specified Google Drive folder (id_repo_audio), using the original script's name as the audio file's name.
10. The loop continues until all scripts have been processed.

## Services:

-   Google Drive
-   Python (with a TTS library like Bark - implied by the instructions)

## Hashtags:

#n8n #automation #audioGeneration #googleDrive #textToSpeech
