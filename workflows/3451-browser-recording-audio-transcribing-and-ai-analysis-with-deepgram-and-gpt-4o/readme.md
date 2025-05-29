# Transcript Evalu8r V2

## Use cases:

- **Automated Transcript Analysis:** Automatically process audio files uploaded to Google Drive, transcribe them, and analyze the content using AI to extract key information.
- **Content Summarization and Reporting:** Generate summaries and structured reports from audio transcripts, which can be useful for meetings, interviews, or lectures.
- **Multi-Speaker Identification:** Identify and extract each speaker from the audio and provide speaker differentiated content.

## How it works:

1.  **Google Drive Trigger:** The workflow starts when a new file is added to a specific Google Drive folder.
2.  **Download Audio:** The audio file is downloaded from Google Drive.
3.  **DeepGram Transcription:** The audio file is sent to DeepGram for transcription.
4.  **AI-Powered Analysis:** The transcript is processed by an AI Agent (using OpenAI's chat model) to extract structured information.
5.  **Generate Google Doc:** The analyzed data is used to generate a Google Docs document.
6.  **Email Notification:** The generated Google Doc is sent to the configured email address.
7. **Webhooks:** Multiple webhooks manage requests from outside n8n

## Services:

-   Google Drive
-   DeepGram
-   OpenAI
-   Gmail

## Hashtags:

#n8n #automation #transcriptanalysis #ai #googledrive
