# 🦜✨Use OpenAI to Transcribe Audio + Summarize with AI + Save to Google Drive

## Use cases:

- Automatically transcribe audio files uploaded to a specific Google Drive folder, generate a summarized report in both JSON and Markdown formats, and save them back to Google Drive.
- Process podcast episodes or meeting recordings for generating summaries and action items, which are then delivered to stakeholders via email and Telegram.
- Automate the creation of documentation from audio-based notes, lectures, or presentations, ensuring consistency and saving time.

## How it works:

1.  **Trigger:** The workflow is manually triggered or by a new file created on a specific Google Drive folder.
2.  **Search Google Drive:** Searches a specific Google Drive folder ("Audio Recordings") for audio files with the `.m4a` extension.
3.  **Filter by .m4a extension:** Filters results to ensure only `.m4a` files are processed.
4.  **Limit to last file:** Takes the most recently added audio file.
5.  **Download audio file:** Downloads the audio file from Google Drive.
6.  **Transcribe with OpenAI:** Transcribes the audio file using OpenAI's audio transcription service.
7.  **Set Config:** Captures configuration details, like the transcribed text and current timestamp.
8.  **Summarize to Structured JSON:** Uses OpenAI to create a structured JSON summary of the transcribed text, identifying key points, action items, and other relevant information.
9.  **Summarize to JSON:** Uses OpenAI to create a Markdown summary of the transcribed text, identifying key points, action items, and other relevant information.
10. **Convert JSON to Markdown:** Converts the structured JSON to markdown file.
11. **Get Filename for JSON/Markdown:** Sets the filename for the JSON and Markdown files based on the audio file's ID, name, and timestamp.
12. **Save JSON/Markdown file to Google Drive:** Saves the structured JSON and Markdown summary to the "Audio Recordings" folder on Google Drive.
13. **Get JSON File Meta/Get Markdown File Meta:** Retrieves metadata (including webViewLink) from google drive from generated json and markdown files.
14. **Prepare Response JSON/Markdown:** Prepares the file's id and webViewLink to be combined in next step.
15. **Save Raw Transcript to Google Drive:** Saves the raw transcript to the "Audio Recordings" folder on Google Drive.
16. **Merge All Paths:** Merges the JSON and Markdown file paths and the raw text file paths.
17. **Email Content Formatter:** Formats the email based on the summary results, to be sent in the body.
18. **Send Gmail Message:** Sends an email with links to the JSON and Markdown reports.
19. **Send Telegram Message:** Sends a Telegram message with links to the generated JSON and Markdown reports.

## Services:

-   Google Drive
-   OpenAI
-   Gmail
-   Telegram

## Hashtags:

#n8n #automation #audioTranscription #OpenAI #GoogleDrive
