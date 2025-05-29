# 📢 Multi-Platform Video Publisher – YouTube, Instagram & TikTok

## Use cases:

- **Automated Content Distribution:** Automatically publish videos to multiple platforms like YouTube, Instagram, and TikTok, saving time and effort.
- **Scheduled Video Posting:** Schedule the publication of videos across different platforms, ensuring consistent content delivery.
- **Cross-Platform Marketing Campaigns:** Streamline video marketing campaigns by managing uploads and publications from a single workflow.

## How it works:

1.  **Trigger:** The workflow starts manually when the "Clicking ‘Test workflow’" node is executed.
2.  **Credentials:** The workflow uses credentials set in the "Credentials" node to authenticate with the different platforms.
3.  **Data Retrieval:** "Search Data Tiktok" and "Download Vídeo" nodes fetch data and download the video, respectively. The "Download Vídeo" node downloads the video, then sends it to the "YouTube" node for possible processing.
4.  **Container Creation:** The "Create Container" node prepares a container for the video.
5.  **ID Mapping:** The "ID Mapping" node is used to map IDs that are used for checking the video status.
6.  **Status Check:** The "Check Video ready" node checks if the video is ready for publishing. Based on the status, the "Current Status" node either proceeds to publish the container ("Publish Container" node) or waits for 30 seconds ("Please wait 30 sec." node) before checking the status again in a loop.
7.  **Video Publication:** The "Publish Video" node publishes the video to the desired platform. The "Publish Container" publishes the container created before.

## Services:

-   YouTube
-   TikTok
-   Instagram (Although not explicitly named, the workflow title suggests its usage, and the general steps would apply)

## Hashtags:

#n8n #automation #videoposting #contentmarketing #crossplatform
