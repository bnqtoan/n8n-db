# Youtube Meta Generator

## Use cases:

- **Automated YouTube SEO:** Automatically generate optimized titles, descriptions, tags, and hashtags for YouTube videos based on transcript and keywords, improving search rankings and visibility.
- **Content Repurposing:** Quickly update video metadata to reflect changes in content or target different audiences, ensuring content remains relevant and engaging.
- **Streamlined Video Publishing:** Simplify the video publishing process by automating the creation of essential metadata, saving time and effort for content creators.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form with the YouTube video link, video transcript, and focus keywords.
2.  **Extract Video ID:** Extracts the video ID from the provided YouTube link.
3.  **Syncbricks Information Retrieval:** Retrieves additional information from a Google Docs document (syncbricks information) like affiliate links, course links, and social media links.
4.  **AI-Powered Metadata Generation:** An AI agent (Youtube Meta Generator), powered by OpenAI, uses the video transcript, focus keywords, and syncbricks information to generate a structured JSON output containing:
    -   A compelling, SEO-friendly title
    -   A detailed, keyword-rich description (at least 150 words)
    -   A list of relevant keywords (at least 450 characters)
    -   Relevant hashtags (5-10)
    -   Contextually relevant affiliate links
    -   A persuasive Call To Action
    -   Additional promotional links
5.  **Output Parser:** Parses the AI-generated text into a structured JSON format.
6.  **Format Tags:** Formats the list of tags into a comma separated string.
7.  **YouTube Update:** Updates the YouTube video's metadata (title, description, and tags) using the YouTube API.
8.  **Completion Form:** Display a form with a completion message after the video is updated.

## Services:

-   YouTube API
-   OpenAI
-   Google Docs

## Hashtags:

#n8n #automation #youtubeSEO #contentcreation #ai
