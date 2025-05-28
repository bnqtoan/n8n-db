# n8n Workflow: RSS to Telegram

## Use cases:

- Automatically post updates from specific Weibo and Instagram accounts to different Telegram channels.
- Filter duplicate posts from RSS feeds to avoid spamming Telegram channels.
- Send image posts with captions or text-only posts to Telegram.

## How it works:

1.  **Trigger:** The workflow starts either manually or via a cron job that runs every minute.
2.  **RSS Feed Retrieval:** It fetches RSS feeds from two sources: a Weibo user and an Instagram user, using the "RSS Feed Read" nodes.
3.  **Batch Processing:** The RSS feed items are split into individual items using the "SplitInBatches" nodes.
4.  **Duplicate Check:**  For each feed (Weibo and Instagram), a "Function" node checks if the link has already been posted to Telegram. This is achieved by storing the latest link in the workflow's static data. An "IF" node then compares the current link with the stored link.
5.  **Image Extraction:** If the post is new (not a duplicate), a "Function" node extracts image URLs from the content of the RSS entry using regular expressions. It also counts the number of images.
6.  **Conditional Telegram Posting:** An "IF" node checks the number of images extracted.
    *   **One Image:** If there's exactly one image, the workflow sends the image to a specific Telegram channel using the "Telegram" node's "sendPhoto" operation. The "contentSnippet" is used as the image caption.
    *   **No Images:** If there are no images, the workflow sends the "contentSnippet" and link to a Telegram channel as text.
    *   **Other Scenarios**: Sends the image and its caption and link to a telegram channel.
7.  **Telegram Channels**: This workflow sends messages to two different Telegram Channels.

## Services:

-   Telegram (via Telegram Bot API)
-   RSSHub (for accessing Weibo and Instagram RSS feeds)

## Hashtags:

#n8n #automation #RSS #Telegram #SocialMedia
