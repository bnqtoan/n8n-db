# YouTube Video Analyzer with AI

## Use cases:

- **Content Summarization:** Quickly generate summaries of YouTube videos for research, saving time and effort.
- **Market Research:** Analyze competitor videos to understand their content strategy, key topics, and audience engagement.
- **Educational Purposes:** Extract and summarize educational video content for study guides or reference materials.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it by clicking "Test workflow".
2.  **Set YouTube URL:** Manually set the Youtube video URL.
3.  **YouTube Video ID:** Extracts the video ID from the provided YouTube URL using a JavaScript code node.
4.  **Generate transcript:** Uses the extracted video ID to fetch the video transcript from the `youtube-transcript.io` API.
5.  **Get transcript:** Retrieves the video transcript and language from the API response.
6.  **Exist?:** Checks if the transcript exists (some videos might not have transcripts).
7.  **Get Fulltext:** Combines all individual text segments from the transcript into a single, full-text string using a JavaScript code node.
8.  **Analyze LLM Chain:** Sends the full text to the DeepSeek AI model via the Langchain LLM Chain node to generate a structured summary, following specified guidelines for formatting and content organization.
9.  **Send Email:** Sends the generated summary, including the title, via email using the SMTP service.

## Services:

-   **YouTube Transcript API:** Fetches transcripts from YouTube videos.
-   **DeepSeek API:** Utilized through the Langchain integration to analyze the text and generate a structured summary.
-   **SMTP:** Sends the generated summary via email.

## Hashtags:

#n8n #automation #workflow #YouTube #AI #ContentAnalysis
