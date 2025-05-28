# Google Drive Audio to Google Sheets via AWS Transcribe

## Use Cases

- **Automatic Transcription and Logging:** Automatically transcribe audio files uploaded to a specific Google Drive folder and log the transcription, recording name, recording link, and transcription date to a Google Sheet.
- **Meeting Minutes Automation:** Store recordings of meetings in Google Drive, automatically transcribe them, and save the minutes (transcription) along with relevant metadata in a Google Sheet for easy access and review.
- **Podcast Content Management:** For podcasters, automatically transcribe new podcast episodes uploaded to Google Drive and store the transcription alongside the episode title and link in a Google Sheet for SEO purposes or to generate show notes.

## How it Works

1.  **Google Drive Trigger:** The workflow starts when a new file is created in a specific Google Drive folder.
2.  **AWS S3 Upload:** The file is then uploaded to an AWS S3 bucket.
3.  **AWS S3 Get All:** Gets all files from bucket S3.
4.  **AWS Transcribe (Initiate):** It starts an AWS Transcribe job to convert the audio file to text. The job name is set based on the file name.
5.  **Wait:** A wait node that waits until the transcription is complete.
6.  **AWS Transcribe (Get):** Once transcription is complete, fetches the transcription result from AWS Transcribe.
7.  **Set:** Creates fields with data from AWS, the original recording, and adds the transcription.
8.  **Google Sheets Append:** Finally, the workflow appends the transcription, recording name, recording link, and transcription date to a specified Google Sheet.

## Services

-   Google Drive
-   AWS S3
-   AWS Transcribe
-   Google Sheets

## Hashtags

#n8n #automation #transcription #googleDrive #aws
