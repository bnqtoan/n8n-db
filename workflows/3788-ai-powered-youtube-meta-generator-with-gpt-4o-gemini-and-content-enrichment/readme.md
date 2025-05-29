# YouTube Meta Data Automation

## Use Cases

- **Content Repurposing**: Automatically generate optimized metadata (titles, descriptions, tags) for YouTube videos to improve search visibility and engagement.
- **SEO Enhancement**: Enhance existing YouTube videos by updating their metadata with AI-driven suggestions based on the latest SEO trends.
- **Content Curation**: Identify and recommend related blog posts and videos to increase viewer retention and platform engagement.

## How it works

1.  **Trigger:** The workflow starts with "On form submission" when a user submits a YouTube video link and focus keywords (optional).
2.  **Extract Video ID:** The "EGet Video ID" node extracts the video ID from the provided YouTube link.
3.  **Get YouTube Details:** The "Get Details of Video from YouTube" node fetches video details using the extracted ID.
4.  **YouTube Transcript:** The "Get Youtube Transcript" node gets the transcript for AI.
5.  **AI-Powered Metadata Generation:** The "Generate Title Description Tags and Hashtags" node uses OpenAI to create a title, description, tags, and hashtags.
6.  **Extract Relevant Data:** The "Extract Relevant Data" node extracts information and prepares it for further processing.
7.  **Related Blog and Videos:**The "Get all Posts for AI"  and "Get Videos" node call OpenAI to gets relavent blog posts from sitemap and related youtube videos.
8.  **Format output:** Several "Code" nodes ("Formatted Tags", "Formatted Hashtags", "Formatted Blog Links", "Video Links") transform the AI-generated suggestions into appropriate formats for use with other platforms.
9.  **Update Metadata:** The "Update Youtube Meta Data" node then updates the YouTube video's metadata using the information generated to optimize it and create a more optimized video.
10. **Form:** Finally the "Form" node gives a signal to close the workflow.

## Services

-   YouTube API
-   OpenAI API
-   Airtable
-   Web Scraping

## Hashtags

#n8n #automation #youtube #metadata #seo #openai #blog #videos #ai
