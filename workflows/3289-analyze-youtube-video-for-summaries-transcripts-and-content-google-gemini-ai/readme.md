# 🎥 Analyze YouTube Video for Summaries, Transcripts & Content + Google Gemini AI

## Use cases:

- **Content Repurposing:** Automatically generate summaries, transcripts, or scene descriptions from YouTube videos to repurpose content for blog posts, social media updates, or internal documentation.
- **Market Research:** Analyze YouTube videos to understand audience demographics, key topics, and engagement drivers for market research and competitive analysis.
- **Educational Material Creation:** Extract timestamped transcripts and summaries from educational videos to create study guides, lecture notes, or supplementary materials.

## How it works:

1.  **Trigger:** The workflow starts with a Form Trigger where the user provides a YouTube Video ID and selects a "Prompt Type" (e.g., default, transcribe, timestamps, summary, scene, clips).
2.  **Configuration:** The "Config" node sets up the workflow variables, including the Google API key and the YouTube video URL based on the provided video ID.
3.  **YouTube API URL Creation:** The "Create YouTube API URL" node constructs a YouTube Data API URL to fetch video details like snippet, content details, status, statistics, player, and topic details.
4.  **Get YouTube Video Details:** The "Get YouTube Video Details" node uses the constructed URL to retrieve video metadata from the YouTube API.
5.  **Define Audience Meta Prompt:** The "Define Audience Meta Prompt" node sets up a prompt for the Gemini AI model to analyze the YouTube video and extract key metadata about the video’s audience, content purpose, key topics, and engagement drivers.
6.  **Get Video Audience MetaData:** The "Get Video Audience MetaData" node sends a request to the Google Gemini API with the `meta_prompt` to analyze the YouTube video and return audience-specific metadata.
7.  **Extract MetaData Object:** The "Extract MetaData Object" node extracts and formats the JSON response from the Gemini API, capturing audience and video characteristic data.
8.  **Compose Prompts:** The "Compose Prompts" node contains a range of pre-defined prompts based on the selected prompt type, such as generating a summary, creating a transcript, or identifying shareable clips. These prompts are customized with audience metadata extracted earlier.
9. **Merge**: The "Merge" node combines the results from  "Get YouTube Video Details" and "Extract MetaData Object" nodes.
10. **Get Prompt by Prompt Type:** This node dynamically pulls the prompt and model name from the "Compose Prompts" node based on the "Prompt Type" selected in the initial form.
11. **Get YouTube Information by Prompt Type:** The "Get YouTube Information by Prompt Type" node sends a request to the Google Gemini API, using the appropriate prompt and model, to generate the requested output (e.g., summary, transcript).
12. **Convert Markdown to HTML:** The "Convert Markdown to HTML" node converts the markdown response from the Gemini API into HTML format for easier readability.
13. **Save to Google Drive as Text File:** The "Save to Google Drive as Text File" node saves the generated content and video details to a text file in Google Drive.
14. **Send to Gmail as HTML:** The "Send to Gmail as HTML" node emails the generated HTML content and video details to a specified email address.
15. **Provide YouTube Information to User as HTML:** The "Provide YouTube Information to User as HTML" node presents the generated HTML content and video details to the user in a completion form.

## Services:

-   **Google Gemini API:** Used for analyzing video content and generating summaries, transcripts, and other content.
-   **YouTube API:** Used to retrieve video metadata such as title, description, and thumbnails.
-   **Google Drive:** Used to save the generated content as a text file.
-   **Gmail:** Used to send the generated content and video details via email.

## Hashtags:

#n8n #automation #workflow #youtube #googleai #gemini #contentcreation #transcription #summarization
