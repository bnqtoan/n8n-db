# RSS to Telegram

## Use cases:

- **Currency Exchange Rate Notifications:** Automatically post updates on Japanese Yen (JPY) exchange rates to a Telegram channel.
- **News Monitoring:** Track updates from specific news sources via RSS and receive instant Telegram notifications for new articles.
- **Blog Post Updates:** Get notified in Telegram whenever a new post is published on a specific blog.

## How it works:

1.  **Cron Trigger:** The workflow starts with a Cron node, configured to run every 1 minute.
2.  **RSS Feed Read:** The RSS Feed Read node fetches the content from a specified RSS feed URL.
3.  **Latest Read:** The Latest Read node retrieves the last read date from the global workflow static data. It adds this information to each item fetched from the RSS feed.
4.  **IF Condition:** The IF node checks if the `isoDate` (publication date) of the current RSS feed item is newer than the `latestRead` date stored in the static data. It also checks if the "title" contains a specific string, though the example has an empty string.
5.  **Write Latest Read (True Branch):** If the item is newer (or the title contains the specified string), the Write Latest Read node updates the `latestRead` value in the global workflow static data to the `isoDate` of the current item.
6.  **Telegram Notification (True Branch):** The Telegram node sends a message to a specified Telegram chat. The message includes the title and link of the new RSS feed item, formatted as a currency exchange rate notification.
7.  **NoOp (False Branch):** If the item is not newer, the workflow does nothing and proceeds to the NoOp node.

## Services:

-   Telegram API
-   RSS Feed

## Hashtags:

#n8n #RSS #Telegram #Automation #Notifications
