# Heygen and Blotato

## Use cases:

- **Automated Social Media Content Creation:** Automatically generate and publish videos with captions to various social media platforms (Instagram, TikTok, Twitter, YouTube, etc.) using AI-generated scripts and Heygen avatars.
- **Content Repurposing:** Repurpose content from sources like Hacker News into engaging short videos for social media, saving time and effort in manual content creation.
- **Scheduled Content Posting:** Schedule regular video content creation and posting based on a defined schedule, ensuring a consistent social media presence.

## How it works:

1.  **Trigger:** The workflow starts with a "Schedule Trigger" that initiates the process at a specified interval.
2.  **AI Agent & Content Sourcing:** An "AI Agent" is used to generate content. It can use tools to fetch articles from Hacker News ("Fetch HN Article" and "Fetch HN Front Page") or rely on the LLM for fresh ideas. The "Write Script" node is used for generating video script.
3.  **Caption Generation:** The workflow uses "Write Long Caption" and "Write Short Caption" nodes to generate appropriate captions for different social media platforms.
4.  **Heygen Avatar Video Creation:** The generated script is passed to the "Setup Heygen" node, preparing the data for Heygen. The "Create Avatar Video" node then uses the Heygen API to create a video featuring an avatar reading the script.
5.  **Delay and Retrieval:** A "Wait" node introduces a delay, presumably to allow Heygen to process the video. After the delay, "Get Avatar Video" retrieves the created video from Heygen.
6.  **Blotato Integration:** The "Prepare for Publish" node formats the video and captions for Blotato. "Upload to Blotato" uploads the video. Finally, several "[Platform] Publish via Blotato" nodes (e.g., "[Instagram] Publish via Blotato," "[Tiktok] Publish via Blotato") use the Blotato API to publish the video and captions to the specified social media platforms.

## Services:

*   **Heygen:** AI video creation platform.
*   **Blotato:** Social media management platform.
*   **OpenAI:** AI model for caption and content generation.
*   **Hacker News API:** Source of content for video creation.

## Hashtags:

#n8n #automation #socialmedia #contentcreation #heygen
