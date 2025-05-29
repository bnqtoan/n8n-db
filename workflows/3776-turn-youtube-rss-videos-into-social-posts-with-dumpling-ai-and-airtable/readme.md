# Repurpose YouTube videos to social media posts with RSS, Dumpling AI, Airtable

## Use cases:

- Automatically create social media content (Instagram, Facebook, LinkedIn) from new YouTube videos to increase brand awareness and engagement.
- Streamline content repurposing for social media managers, saving time and effort in crafting posts and generating relevant images.
- Generate a backlog of social media posts from existing YouTube content, ensuring a consistent social media presence.

## How it works:

1.  **RSS Trigger (Get YouTube Uploads):** The workflow is triggered when a new video is uploaded to a specified YouTube channel's RSS feed.
2.  **Get YouTube Transcript:** Extracts the transcript from the YouTube video using the Dumpling AI API.
3.  **Generate Social Posts + Image Prompts:** Uses OpenAI to generate social media posts and image prompts tailored for Instagram, Facebook, and LinkedIn, based on the video transcript.
4.  **Structure Posts & Prompts by Platform:** Organizes the generated content and prompts into separate fields for each platform (Instagram, Facebook, LinkedIn).
5.  **Image Generation (Dumpling AI):** For each platform, uses the Dumpling AI API to generate an image based on the platform-specific image prompt.
6.  **Save Content to Airtable:** Saves the generated posts and platform labels to an Airtable base.
7.  **Upload Image to Airtable (Attachment):** Uploads the generated images to Airtable and attaches them to their corresponding records.

## Services:

-   YouTube (via RSS feed)
-   Dumpling AI
-   OpenAI
-   Airtable

## Hashtags:

#n8n #automation #socialmedia #contentrepurposing #Airtable
