# YouTube Channel Monitor & Telegram Notifier

## Use cases:

- **Automated YouTube Updates:** Get instant Telegram notifications whenever a specific YouTube channel uploads a new video.
- **Content Curation:** Track a competitor's YouTube channel and receive notifications for new content releases, allowing you to stay informed about their strategies.
- **Community Engagement:** Automatically share new videos from a specific channel with a Telegram community to keep them updated on the latest content.

## How it works:

1.  **CheckTime (Interval):** Every 30 minutes, the workflow is triggered.
2.  **GetVideosYT (YouTube):** The workflow fetches the latest 4 videos from the YouTube channel with the ID `UCTe5YtigJdZZ3i-za6IkbGQ`, ordering them by date.  It uses the YouTube API with the credentials set under `youTubeOAuth2Api` called `tubo`.
3.  **Set (Set):** Extracts the `id`, `url`, and `title` from each video. The `url` is dynamically created using the video ID.
4.  **Function (Function):** This node contains a JavaScript function that filters out videos that have already been processed. It maintains a list of processed video IDs in the workflow's static data. Only new videos are passed on.
5.  **SendVideo (Telegram):** Sends a formatted message to a Telegram chat with the ID `-1001178002763`. The message includes the video title and URL, formatted with HTML for bolding the title.  The Telegram API is used with the credentials set under `telegramApi` called `bot raspino`.

## Services:

-   YouTube API
-   Telegram API

## Hashtags:

#n8n #YouTube #Telegram #Automation #Notifications
