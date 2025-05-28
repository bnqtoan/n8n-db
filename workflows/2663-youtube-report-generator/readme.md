# YouTube Subtitles Report Generator

## Use cases:

-   **Content Analysis:** Automatically generate thematic reports from YouTube videos to understand the main topics discussed.
-   **Market Research:** Analyze videos related to specific products or services to identify consumer trends and sentiments.
-   **Educational Tool:** Provide students with summaries of educational content, allowing them to quickly grasp the core themes of a video.

## How it works:

1.  The workflow is triggered by a **Webhook**, which receives a YouTube video ID as a query parameter.
2.  The **Fetch Video HTML** node retrieves the HTML content of the YouTube video page using the provided ID.
3.  The **Extract Subtitles URLs** node parses the HTML to extract the base URLs of the video's subtitles.
4.  The **Fetch Subtitles Content** node fetches the content of the subtitles in XML format from the extracted URLs.
5.  The **Generate Analytical Report** node uses an LLM chain to generate an analytical report focusing on the main theme of the subtitles content. The prompt instructs the AI to extract the textual content, identify key concepts, and write a concise report with a title and a maximum of 3 paragraphs.
6.  The **AI Model Configuration** defines the Google Gemini model with specific temperature settings.
7.  The **Return Analytical Report** node sends the generated report back as the response to the initial webhook request.

## Services:

-   YouTube (via direct HTML scraping)
-   Google Gemini (via n8n's Langchain integration)

## Hashtags:

#n8n #automation #youtube #contentanalysis #ai
