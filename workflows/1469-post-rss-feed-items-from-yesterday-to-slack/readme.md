# Post RSS feed items from yesterday to Slack

## Use cases:

*   **Daily News Aggregation:** Automatically post a summary of new blog posts or news articles from a specific RSS feed to a Slack channel every morning.
*   **Content Monitoring:** Track updates from competitor blogs or industry news sources and receive notifications in Slack for immediate awareness.
*   **Internal Updates:** Keep a team informed about relevant content from a company blog or internal news feed without manual effort.

## How it works:

1.  **Every Morning:** The workflow starts with a Cron node that triggers the workflow every day at 8:00 AM.
2.  **Get Yesterdays Date:** It calculates yesterday's date using the Date Time node.
3.  **Get the RSS Feed:** It retrieves the RSS feed from the specified URL (https://n8n.io/blog/rss) using the RSS Feed Read node.
4.  **If it was published after yesterday:** Filters the items from the RSS Feed to get only those published after yesterday's date.
5.  **Build our message:** A Function node formats the RSS feed items into a Slack message, including the title and content snippet of each post.
6.  **Post to Slack:** Finally, the formatted message is sent to a specified Slack channel (#news) using the Slack node.

## Services:

*   Slack
*   RSS Feed

## Hashtags:

#n8n #automation #RSS #Slack #notifications
