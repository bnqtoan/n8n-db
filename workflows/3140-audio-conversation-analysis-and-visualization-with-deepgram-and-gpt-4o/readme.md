# Transcript Evalu8r

## Use cases:

- **Automated Call Analysis:** Automatically process call recordings stored in Google Drive to generate transcripts, analyze the content, and extract key insights for quality control or training purposes.
- **Meeting Summarization and Action Item Extraction:** Transcribe meeting recordings, summarize the discussion, and identify action items for attendees, improving productivity and follow-up.
- **Customer Service Improvement:** Analyze customer service call transcripts to identify areas for improvement in agent performance, customer satisfaction, and overall service quality.

## How it works:

This workflow automates the process of transcribing audio files, analyzing the transcript using AI, and generating a report. Here's a breakdown:

1.  **Trigger:** The workflow is initiated by one of four webhooks, or a Google Drive trigger. This may depend on how the audio file is uploaded, whether via manual upload, or through an api call.
2.  **Download Audio:** The workflow downloads the audio file from Google Drive.
3.  **Transcription:** The audio is transcribed using DeepGram's API.
4.  **Process JSON:** The transcribed text is extracted and prepared for AI analysis.
5.  **AI Analysis:** An AI Agent powered by a Large Language Model (LLM) analyzes the transcript based on a prompt/instructions to perform action-item extraction.
6.  **Structured Output:** The AI Agent's raw output is parsed into structured, easily-accessible data.
7.  **Document Generation:** The AI-processed transcript is compiled, and a Google Docs document is generated with the analysis results.
8.  **File Management:** The original audio, transcript, and analysis are organized and moved within Google Drive.
9.  **Email Notification:** A summary of the analysis is sent via Gmail.

## Services:

-   **Google Drive:** Used for audio file storage and retrieval, as well as storing the generated transcript and analysis.
-   **DeepGram:** A speech-to-text API used to transcribe the audio recordings.
-   **OpenAI:** Powers the AI Agent for transcript analysis and summarization.
-   **Google Docs:** Used to create a formatted document containing the transcript and AI analysis results.
-   **Gmail:** Used to send email notifications with the analysis summary.

## Hashtags:

#n8n #automation #transcriptanalysis #AI #workflow #googledrive #deepgram #openai #googledocs #gmail
