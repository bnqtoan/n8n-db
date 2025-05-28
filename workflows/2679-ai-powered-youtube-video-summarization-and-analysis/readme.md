# YouTube Transcript Summarizer and Notifier

## Use cases:

- **Automatic Summarization of YouTube Tutorials:** Get a concise, structured summary of YouTube tutorials to quickly understand the key concepts and implementation details without watching the entire video.
- **Content Curation for Educational Platforms:** Automatically generate summaries of relevant YouTube videos and send the summary with the video link to a Telegram channel, helping users save time when studying.
- **Quick Information Retrieval:** Quickly grasp the main points of YouTube videos, helping users to efficiently research a subject or stay informed about topics of interest.

## How it works:

1.  **Webhook**: Listens for a POST request containing a YouTube URL at the `/ytube` path.
2.  **Get YouTube URL**: Extracts the YouTube video URL from the webhook's body.
3.  **YouTube Video ID**: Extracts the video ID from the URL using a code node that applies a regular expression.
4.  **Get YouTube Video**: Retrieves video metadata (title, description, ID) from YouTube using the extracted video ID.
5.  **YouTube Transcript**: Fetches the transcript of the YouTube video, if available.
6.  **Split Out**: Splits the transcript into individual chunks for easier processing.
7.  **Concatenate**: Concatenates the transcript chunks into a single, long text string.
8.  **Summarize & Analyze Transcript**: Uses an LLM (gpt-4o-mini) to analyze the concatenated transcript and generate a structured summary. The prompt instructs the model to break down the content into main topics with Level 2 headers, extract the most essential concepts, and highlight key terms.
9.  **Response Object**: Creates a JSON object containing the summary, video title, description, ID, and the original YouTube URL.
10. **Respond to Webhook**: Responds to the initial webhook request with the generated summary.
11. **Telegram**: Sends a message to a Telegram channel/bot with the video title and the original YouTube URL.

## Services:

-   YouTube API
-   Telegram API
-   LangChain (LLM - gpt-4o-mini)

## Hashtags:

#n8n #youtube #automation #summarization #telegram
