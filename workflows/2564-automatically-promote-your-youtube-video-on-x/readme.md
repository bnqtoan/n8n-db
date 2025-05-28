# YouTube to X Post- AlexK1919

## Use cases:

-   **Automated Social Media Promotion:** Automatically create and post engaging content on X (Twitter) whenever a new video is uploaded to a YouTube channel. This ensures consistent promotion without manual effort.
-   **Content Repurposing:** Repurpose long-form YouTube content into shorter, attention-grabbing posts for X, maximizing reach and engagement across different platforms.
-   **Content Scheduling and Archiving:** Schedule social media promotion and automatically log all generated posts in a Google Sheet for tracking and analysis.

## How it works:

1.  **Fetch Latest Videos:** The workflow starts by fetching the latest videos from a specified YouTube channel using the YouTube node. It filters videos published within the last 2 hours.
2.  **Deduplication:** Removes duplicate video entries to avoid repetitive posts.
3.  **Generate X Post:** The OpenAI node generates a witty post for X (Twitter) based on the video title and description, ensuring it doesn't exceed 220 characters. If no description, AI will guess the context of the video to write content.
4.  **Verify character limit constraints:** Verify that the post does not exceed the character limit to properly post on X.
5.  **Rewrite X Post to 220 Characters:** If Verify character limit constraints fails to meet length constraints, Regenerate the tweet to be under 220 characters.
6.  **Add to Google Sheet:** The generated post, along with metadata like date, time, and status, is added to a Google Sheet for record-keeping.
7.  **Post to X:** The workflow posts the generated content to X (Twitter) via the Twitter node.
8.  **Update Google Sheet:** The Google sheet will be updated with the URL and the final status after posting.

## Services:

*   YouTube
*   X (Twitter)
*   Google Sheets
*   OpenAI
*   Discord (Optional)
*   Slack (Optional)
*   Gmail (Optional)

## Hashtags:

#n8n #automation #youtube #x #socialmedia #alexk1919
