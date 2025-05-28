# RSS Feed to Telegram Bot with Filtering

## Use cases:

*   **Monitoring specific topics from multiple RSS feeds:** This workflow allows you to aggregate news or updates from various RSS feeds and filter them based on keywords before sending them to different Telegram channels.
*   **Delivering security-related articles to a dedicated Telegram channel:** Security professionals can use this workflow to receive real-time alerts on vulnerabilities, exploits, and security news from different sources.
*   **Curated content sharing:** You can automatically share articles related to specific technologies or interests with different Telegram groups.

## How it works:

1.  **Cron Trigger:** The workflow starts with a Cron node that triggers the workflow every 10 minutes.
2.  **RSS Source:** A Function node defines an array of RSS feed URLs to be processed.
3.  **Split Into Batches:** The URLs are then split into individual items for processing.
4.  **RSS Feed Read:** For each URL, the RSS Feed Read node fetches the latest articles from the specified feed.
5.  **Only get new RSS:** A Function node filters for new items based on the publication date, storing the previously seen dates in the workflow's static data to avoid duplicates.
6.  **IF-1:** An IF node checks if the RSS item's link contains `techcommunity.microsoft.com`. If so, it sends it to the Telegram_M365 node.
7.  **IF-2:** An IF node checks if the RSS item's title contains security-related keywords using a regular expression. If matched, sends it to the Telegram_Security node.  If not matched, sends it to the Telegram_IT node.
8.  **Telegram Nodes:** Depending on the applied filters, the article title and link are sent to different Telegram channels (Telegram_M365, Telegram_Security, Telegram_IT).  Each Telegram node posts a message to a specified Telegram channel using the configured credentials.

## Services:

*   Telegram API
*   RSS Feeds

## Hashtags:

#n8n #RSS #Telegram #Automation #ContentCurator
