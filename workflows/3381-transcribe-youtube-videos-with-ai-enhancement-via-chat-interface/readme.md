# YouTube Video Transcriber

## Use cases:

*   **Quick Content Summarization:** Get a text transcription of a YouTube video to quickly understand its content without watching the entire video.
*   **Study Aid:** Efficiently transcribe video lectures or tutorials for quicker review and note-taking.
*   **Content Accessibility:** Convert video content into text for users who prefer reading or require text-based access.

## How it works:

1.  **Chat Trigger:** The workflow starts when a user sends a YouTube video URL via a chat interface.
2.  **URL Validation:** The `Code` node validates the provided URL to ensure it is a valid YouTube link. A Python script using regular expressions checks the URL format.
3.  **Conditional Branching:** The `If` node checks if the URL is valid. If valid, the workflow proceeds to fetch the transcription; otherwise, it sends an error message back to the user.
4.  **Supadata API Request:** The `HTTP Request` node calls the Supadata API to retrieve the video transcription. It uses the provided YouTube URL and an API key to fetch the transcription.
5.  **OpenAI for Text Structuring:** The `OpenAI` node takes the transcription from Supadata and uses a GPT model to correct grammar, add punctuation, and structure the text using markdown (titles, subtitles, lists). The prompt is configured for Portuguese language.
6.  **Respond to User:** Finally, the structured transcription or an error message is sent back to the user via the chat interface.

## Services:

*   **YouTube:** Video hosting platform from which the URLs are taken.
*   **Supadata API:** Service used to extract transcriptions from YouTube videos.
*   **OpenAI API:** Used for text structuring and grammar correction.

## Hashtags:

#n8n #automation #workflow #youtube #transcription
