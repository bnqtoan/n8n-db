# YouTube

## Use cases

*   **Automated TikTok to YouTube Reposting:** Automatically fetches new TikTok videos, downloads them, and uploads them to a YouTube channel. This can be used by content creators looking to expand their reach across multiple platforms without manual effort.
*   **Content Curation and Archiving:**  Curate a collection of TikTok videos based on certain criteria and automatically save them to a YouTube channel for archiving or later use in compilations.
*   **Real-time Content Sharing via Telegram Bot:** Trigger the workflow through a Telegram bot command to fetch and upload TikTok videos on demand, allowing for immediate sharing of trending content.

## How it works

1.  **Trigger:** The workflow starts either manually, on a schedule, or via a Telegram trigger.
    *   `Manual Trigger`: Initiates the workflow manually.
    *   `Schedule Trigger`: Starts the workflow on a predefined schedule.
    *   `Telegram Trigger`: Executes the workflow when a specific command is received via a Telegram bot.
2.  **Fetch TikTok Videos:** An HTTP Request node fetches TikTok videos from a specified source. There are two entry points for this node, either from the `Manual Trigger` or `Schedule Trigger`, or via the `Telegram Trigger`.
    *   `Edit Fields`: Sets or modifies data before fetching TikTok videos when triggered manually or by schedule.
    *   `Code`: Handles data processing from Telegram input.
    *   `Fetch TikTok Videos via TG trigger`: Fetches TikTok videos upon receiving a Telegram trigger.
3.  **Filter New Videos:** A Function node filters out videos that have already been processed, ensuring only new content is handled.
4.  **Process and Upload:** The workflow then proceeds to upload the new videos to YouTube.
    *   `Append to Google Sheets`: Appends information about the uploaded video to a Google Sheet for tracking.
    *   `Video Information`: Sets up metadata for the YouTube upload.
    *   `YouTube Upload Snippet`: Creates a snippet (metadata) for the YouTube upload.
    *   `Download Video`: Downloads the TikTok video.
    *   `YouTube Upload Video`: Uploads the downloaded video to YouTube.
5.  **Notification (Optional):** After a video is successfully uploaded, a Telegram node sends a notification via Telegram.
    *   `Telegram`: Sends a notification to a Telegram channel or user upon successful video upload.

## Services

*   YouTube API
*   Google Sheets API
*   Telegram API

## Hashtags

#n8n #automation #youtube #tiktok #contentcreation
