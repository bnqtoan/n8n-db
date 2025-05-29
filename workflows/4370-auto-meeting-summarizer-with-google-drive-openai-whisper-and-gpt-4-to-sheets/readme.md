# Meeting Audio to Summary in Google Sheets

## Use cases:
- **Automated Meeting Summarization:** Automatically transcribe and summarize meeting audio files, saving time and effort for participants.
- **Knowledge Management:** Store meeting summaries in Google Sheets for easy access, searchability, and knowledge sharing across teams.
- **Action Item Extraction:** Identify and extract action items from meeting transcripts, ensuring clear ownership and follow-up.

## How it works:
1. **Google Drive Trigger:** The workflow starts when a new audio file is uploaded to a specific folder in Google Drive ("Looking for uploading file" node).
2. **Download File:** The "Download file" node downloads the uploaded audio file from Google Drive.
3. **Transcribe Audio:** The "Transcribe the file" node utilizes the OpenAI Whisper model to transcribe the audio file into text.
4. **Create Summary:** The "Create summary" node uses a GPT model to generate a concise summary of the transcribed text, also extracting action items. The prompt instructs the AI to focus on key discussion points and action items with assigned persons and deadlines.
5. **Get & Format Date:** The "Get date" node obtains the current date, and the "Format date" node formats it.
6. **Save to Google Sheets:** The "Save the summary" node appends the formatted date and the generated meeting summary to a specified Google Sheets document.

## Services:
- Google Drive
- OpenAI (Whisper, GPT)
- Google Sheets

## Hashtags:
#n8n #automation #workflow #meetingsummary #googlesheets
