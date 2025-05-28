# YT AI News Playlist Creator/AI News Form Updater

## Use cases:

- **Automated Daily AI News Playlist:** Automatically creates a daily YouTube playlist featuring the latest AI news from specified channels.
- **Content Curation:** Streamlines the process of curating and sharing AI-related video content with an audience.
- **Channel Monitoring and Archiving:** Monitors specific YouTube channels for new content and archives it in a structured playlist format.

## How it works:

1.  **Trigger:** The workflow is triggered either by a schedule (at 7:15 AM) or manually.
2.  **Read Channel Names:** Retrieves a list of YouTube channel usernames and IDs from a Google Sheet.
3.  **Get Videos:** Uses the YouTube Data API to search for the latest videos (published in the last 24 hours) from each channel.
4.  **Split Out:** Splits the API response into individual video items.
5.  **Filter Out Upcoming:** Filters out videos that are marked as "upcoming" live broadcasts.
6.  **Create Playlist:** Creates a new YouTube playlist with a title formatted as "YYMMDD AI News."
7.  **Save Playlist ID:** Saves the newly created playlist ID to a Google Sheet for tracking and future use.
8.  **Add Videos to Playlist:** Adds each filtered video to the newly created playlist.
9. **Delete Old Playlist:** Reads "yesterday's playlist ID" from Google Sheet and deletes it from youtube to keep the latest content.
10. **Telegram Notification:** (Optional) Sends a Telegram message to notify the user that the AI News YouTube playlist has been updated.
11. **Get Channels and Update Google Sheet**: Used in a separate workflow to gather channel information, using the channel's "@" username, from YouTube's API and stores them in a Google Sheet.

## Services:

*   YouTube Data API: Used for searching videos, creating playlists, and adding videos to playlists.
*   Google Sheets: Used for storing channel information and playlist IDs.
*   Telegram API: (Optional) Used for sending notifications.

## Hashtags:

#n8n #automation #youtube #playlist #ai #news
