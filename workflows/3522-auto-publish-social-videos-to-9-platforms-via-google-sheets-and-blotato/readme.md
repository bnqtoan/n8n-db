# 💥workflow n8n d'Auto-Post sur les réseaux sociaux - vide

## Use cases:

- **Automated Social Media Content Distribution:** Schedule and automatically post videos to multiple social media platforms, saving time and effort for social media managers.
- **Content Calendar Automation:** Connect a content calendar (Google Sheets) to automatically publish videos based on scheduled entries, ensuring consistent content delivery.
- **Cross-Platform Marketing Campaigns:** Launch marketing campaigns across various social platforms simultaneously, maximizing reach and engagement.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered at a specific time (e.g., 22:00) using the Schedule Trigger node.
2.  **Get my video:** Retrieves video details (URL, description, title, row number, etc.) from a Google Sheets document. The workflow needs the sheet ID and document ID.
3.  **Assign Social Media IDs:** Assigns platform-specific account IDs for Instagram, YouTube, TikTok, Facebook, Threads, Twitter, LinkedIn, Pinterest and Bluesky. These IDs are statically defined within the node.
4.  **Upload Video to Blotato:** Uploads the video to Blotato's API, using the URL retrieved from Google Sheets.
5.  **Social Media Posting:**
    *   For each social media platform (Instagram, YouTube, TikTok, Facebook, Threads, Twitter, LinkedIn, Bluesky, and Pinterest) an HTTP Request node is used to post the video.
    *   Each node constructs a JSON payload with account IDs (from "Assign Social Media IDs"), video URL (from Blotato), and description (from Google Sheets).
    *   The payload is sent to the Blotato API to create a post on the respective platform.
6.  **Update Google Sheets:** the workflow updates the STATUS and row_number column of the Google Sheet to DONE.

## Services:

-   Google Sheets
-   Blotato API (backend.blotato.com)
-   Instagram
-   YouTube
-   TikTok
-   Facebook
-   Threads
-   Twitter (X)
-   LinkedIn
-   Pinterest
-   Bluesky

## Hashtags:

#n8n #automation #socialmedia #autopost #workflow
