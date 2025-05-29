# Publish Videos & Images - Blotato

## Use cases:

- **Automated Social Media Posting:** Automatically publish videos and images to multiple social media platforms (Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Twitter, Bluesky, and Pinterest) from a centralized Airtable database.
- **Content Scheduling:** Schedule and manage social media content publishing by utilizing data from Airtable records, ensuring a consistent and timely presence on different platforms.
- **Cross-Platform Content Adaptation:** Tailor content for different platforms by using platform-specific text variations (e.g., short text for Twitter, long text for Facebook) defined in Airtable, optimizing engagement across channels.

## How it works:

1.  **Trigger:** The workflow is triggered manually.
2.  **Fetch Airtable Record ID**: A mock record id is set manually.
3.  **Fetch Data from Airtable:** The workflow retrieves a specific record from an Airtable base and table, containing information like media titles, scripts, video/image URLs, and social media account IDs.
4.  **Optimize YouTube Title (Optional):** The workflow optimizes the YouTube title.
5.  **Upload Media to Blotato:** Uploads either an image or video to Blotato from the respective URL in Airtable.
6.  **Prepare for Publishing:** The workflow uses the data it got from Airtable and sets destination account ID's as well as the type of text to use (either the long text or the short text).
7.  **Publish to Social Media Platforms:** Based on the trigger event, the workflow posts the video or image with associated text to the desired social media platforms. It uses the Blotato API to handle publishing to each platform (Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Twitter, Bluesky, and Pinterest). Each platform has its own 'Publish via Blotato' node.
8.  **Update Airtable Records:** After attempting to publish to Instagram, the workflow updates the Airtable record.

## Services:

-   Airtable
-   Blotato (Social Media Management Platform)
-   OpenAI (for validating Youtube titles)

## Hashtags:

#n8n #automation #socialmedia #contentmarketing #blotato
