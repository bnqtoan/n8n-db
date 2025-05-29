# YouTube SEO Generator Workflow

## Use cases:

- **Automated SEO Optimization:** Automatically generate and update video tags on YouTube to improve search visibility.
- **Content Creator Assistance:** Help content creators quickly optimize their video metadata for better discoverability.
- **Batch Video Optimization:** Efficiently update tags for multiple videos based on AI-generated suggestions.

## How it works:

1.  **Form: Input Video URL:** The workflow starts with a form where the user inputs a YouTube video URL.
2.  **Code - Get Video ID:** Extracts the video ID from the provided URL using a code node.
3.  **YouTube: Get Video Metadata:** Retrieves metadata of the video from YouTube, such as title, description, and existing tags.
4.  **AI Agent - Youtube SEO Generator:** Uses an AI Agent (Langchain) to analyze the video metadata and suggest optimized tags. This agent is configured with:
    *   A DeepSeek Chat Model for generating the SEO suggestions.
    *   A structured output parser to format the output into a usable structure.
    *   A memory component to help the AI remember previous questions.
5.  **Form: Confirmation Page:** Presents the AI-generated tags to the user for confirmation.
6.  **If: Check confirmation:** Checks if the user has confirmed the changes.
7.  **YouTube: Update Video Tags:** Updates the video tags on YouTube with the AI-suggested tags if confirmed.
8.  **Form: Completion Page:** Displays a completion message to the user.

## Services:

*   YouTube API
*   DeepSeek Chat Model (Langchain)

## Hashtags:

#n8n #automation #youtube #seo #langchain
