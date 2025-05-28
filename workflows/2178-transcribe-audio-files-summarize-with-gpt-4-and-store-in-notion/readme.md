# Whisper Transkription copy

## Use cases:

- **Meeting Summarization:** Automatically transcribes and summarizes audio recordings of meetings stored in Google Drive, then saves the summary to a Notion page for easy access and review.
- **Lecture Note Creation:** Converts audio lectures saved in Google Drive into text and generates summaries in Notion. This can greatly reduce the time spent taking and organizing notes.
- **Podcast Transcription and Summarization:** Automatically transcribe podcast episodes from Google Drive, generate summaries, and store it in Notion.

## How it works:

1.  **Google Drive Trigger:** The workflow is initiated when a new audio file is added to a specific folder ("Recordings") in Google Drive.
2.  **Google Drive:** The workflow downloads the newly uploaded audio file.
3.  **OpenAI:** The audio file is sent to OpenAI for transcription.
4.  **OpenAI1:** The transcription is then sent to another OpenAI node (GPT-4-turbo-preview model) to generate a JSON summary, including title, summary, main points, action items, follow-ups, stories, references, arguments, related topics, and sentiment analysis.
5.  **Notion:** Finally, the title and summary are sent to Notion to create a new page with the audio summary.

## Services:

-   Google Drive
-   OpenAI
-   Notion

## Hashtags:

#n8n #automation #OpenAI #GoogleDrive #Notion #Transcription #Summarization
