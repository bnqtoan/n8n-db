# Summarize YouTube Videos & Chat About Content with GPT-4o-mini via Telegram

## Use cases:

- **Quick Video Summarization:** Automatically generate summaries of YouTube videos for users who want a brief overview before watching the full content.
- **Educational Tool:** Students or researchers can use the workflow to quickly grasp the key concepts of educational videos and ask specific questions about the content.
- **Content Curation:** Content creators or social media managers can use the workflow to generate summaries for sharing videos on different platforms or for internal documentation.

## How it works:

1.  **Receives YouTube URL:** The workflow is initiated either by a Telegram message containing a YouTube URL or a webhook call with the URL.
2.  **Extracts Video ID:** Extracts the video ID from the provided URL.
3.  **Fetches Transcript:** Uses the YouTube Transcript node to retrieve the transcript of the video.
4.  **Splits and Concatenates Transcript:** Splits the transcript into segments, then concatenates these segments to form a complete text.
5.  **Generates Summary:** Employs the `gpt-4o-mini` model via the "Generate Summary with GPT-4o-mini" node to create a structured summary of the video transcript, including a general summary, key moments, and instructions if available.
6.  **Sends Summary via Telegram:** The generated summary is then sent back to the user via a Telegram message.
7.  **Optional Google Docs Integration:** the workflow upload the transcript to google docs to keep a memory and then lets you ask question via telegram using the AI.
8.  **Ask questions via AI:** You can ask question about the video content and will be responded in Telegram.

## Services:

-   YouTube
-   Telegram
-   Google Docs
-   OpenAI (GPT-4o-mini)

## Hashtags:

#n8n #automation #youtube #summarization #telegram #GPT4o
