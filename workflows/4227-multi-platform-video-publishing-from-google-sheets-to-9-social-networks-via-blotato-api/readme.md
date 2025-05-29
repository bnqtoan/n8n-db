# Automated Social Media Video Publishing: Youtube, Instagram, TikTok, 4+Platforms

## Use cases:

- **Content creators:** Automate the process of publishing videos across multiple social media platforms (YouTube, Instagram, TikTok, Facebook, LinkedIn, Twitter, Pinterest, Threads, Bluesky), saving time and effort.
- **Social media managers:** Schedule and distribute content to various platforms in a streamlined manner, ensuring consistent posting and brand presence.
- **Businesses:** Automate the distribution of marketing videos or announcements across all relevant social media channels to maximize reach and engagement.

## How it works:

The workflow automates the process of publishing videos to multiple social media platforms. Here's a breakdown:

1.  **Schedule Trigger:** Initiates the workflow based on a defined schedule.
2.  **Google Sheets:** Reads data (likely video details, descriptions, etc.) from a specified Google Sheet.
3.  **Get Google Drive ID:** Extracts the Google Drive ID, presumably where the video is stored.
4.  **Setup Social Accounts:** Configures or stores credentials/settings for different social media accounts.
5.  **Upload to Blotato:** Uploads the video to Blotato, a service that seems to handle distribution to various social media platforms.
6.  **OpenAI:** Generates Image description from the Video, that will be shared to other platforms
7.  **Upload to Blotato - Image:** Upload generated Image to Blotato, for Pinterest distribution.
8.  **Publish via Blotato (Various Platforms):** Uses the Blotato service to publish the video to YouTube, Instagram, TikTok, Facebook, LinkedIn, Twitter, Pinterest, Threads, and Bluesky.
It uses Blotato as a central service to distribute video content, which is a key feature of this workflow.

## Services:

-   Google Sheets
-   Google Drive
-   Blotato (A social media distribution service)
-   OpenAI

## Hashtags:

#n8n #automation #socialmedia #videomarketing #contentmarketing
