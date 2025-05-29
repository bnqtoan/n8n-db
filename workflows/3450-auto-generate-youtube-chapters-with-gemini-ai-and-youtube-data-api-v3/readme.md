# YouTube Chapter Generator

## Use cases:

*   **Automatically generate video chapters:** Save time by automatically creating YouTube video chapters from captions, improving viewer experience and engagement.
*   **Improve video SEO:** Enhance video discoverability by adding structured chapters to the video description, making it easier for viewers to find relevant content.
*   **Repurpose content:** Generate chapter outlines from existing video content to create blog posts, social media updates, or other derivative materials.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Set Video ID:** A "Set" node assigns a specific video ID.
3.  **Get Video Meta Data:**  The "Get Video Meta Data" node retrieves metadata for the specified YouTube video using the YouTube API (Title, category, etc..).
4.  **Get Caption ID:** The "Get Caption ID" node retrieves caption ID using the YouTube API.
5.  **Get Captions:** The "Get Captions" node retrieves the video's captions in SRT format from YouTube.
6.  **Extract Captions:** The "Extract Captions" node extracts the text from the SRT file.
7.  **Tag Chapters in Description:** This node uses a Large Language Model (LLM) chain with Google Gemini to analyze the captions and generate chapter markers with timestamps.
8.  **Update Chapters:** The "Update Chapters" node uses the YouTube API to update the video's description with the newly generated chapters. It adds chapters to the description with the output from the Gemini node.

## Services:

*   YouTube API
*   Google Gemini API (via n8n's Langchain integration)

## Hashtags:

#n8n #youtube #automation #chapters #llm
