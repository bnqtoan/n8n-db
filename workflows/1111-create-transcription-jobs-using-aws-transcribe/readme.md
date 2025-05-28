# AWS S3 to AWS Transcribe Workflow

## Use cases:

*   **Automatic Transcription of Audio Files:** Automatically transcribes audio files uploaded to an AWS S3 bucket, converting speech to text.
*   **Content Accessibility:** Creates transcripts for audio content stored in S3, improving accessibility for users with hearing impairments.
*   **Audio Content Analysis:** Enables further analysis of transcribed audio data, such as sentiment analysis or keyword extraction.

## How it works:

1.  **Manual Trigger:** The workflow is initiated manually by clicking the "execute" button in n8n.
2.  **AWS S3 Retrieval:** The "AWS S3" node retrieves all objects (files) from a specified S3 bucket ("n8n-docs").  It's configured to return all files found in the bucket.
3.  **AWS Transcribe:** For each file retrieved from S3, the "AWS Transcribe" node creates a transcription job.
    *   It uses the S3 URI of the audio file (e.g., `s3://n8n-docs/audio.mp3`) as the input for transcription.
    *   It automatically detects the language of the audio.
    *   It dynamically generates a transcription job name based on the S3 key (filename), replacing spaces with hyphens to ensure a valid job name.

## Services:

*   AWS S3
*   AWS Transcribe

## Hashtags:

#n8n #AWS #S3 #Transcribe #Transcription #Automation #Workflow
