# 🎦💌Advanced YouTube RSS Feed Buddy for Your Favorite Channels

## Use cases:

- **Content Curation:** Automatically gather and share new videos from a list of favorite YouTube channels for personal or professional content curation.
- **Competitor Monitoring:** Track the latest uploads of competitors in your industry to stay informed about their content strategy.
- **Educational Resource Aggregation:** Compile a feed of new videos from educational channels to stay up-to-date on the latest topics and trends.

## How it works:

1.  **Trigger:** The workflow is triggered either by a form submission or a scheduled time (Every Day) to fetch new videos regularly.
2.  **YouTube Channel IDs:** Retrieves a list of YouTube channel IDs, either from a form submission or a default list.
3.  **Create RSS Feed URLs:** Generates RSS feed URLs for each YouTube channel ID using the standard YouTube RSS feed format.
4.  **RSS Feed Read:** Reads the RSS feed for each channel to get the latest videos.
5.  **Label New Videos:** Identifies and labels new videos based on their publication date (within the last 3 days by default).
6.  **Filter New Videos:** Filters the videos to only include the newly labeled videos.
7.  **Get YouTube Video Details**: Retrieves detailed video information using the YouTube Data API for each new video.
8.  **Telegram Notification (Optional):** Sends a Telegram message with the video thumbnail, title, and link for each new video.
9.  **Email Notifications:**
    *   **Multiple Emails:** Creates and sends individual HTML email cards for each new video using OpenAI to format the content.
    *   **Single Email:** Aggregates all new videos into a single HTML email card using OpenAI for formatting and sends one email with all the videos.
10. **Send Email:** Sends email via Gmail
## Services:

*   YouTube Data API
*   Telegram
*   Gmail
*   OpenAI

## Hashtags:

#n8n #automation #youtube #rss #telegram #gmail #openai
