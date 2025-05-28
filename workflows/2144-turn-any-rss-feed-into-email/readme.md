# My Workflow

## Use cases

- **Stay updated on your favorite blogs:** Automatically receive email notifications whenever a new post is published on specific RSS feeds, ensuring you never miss out on important content.
- **Content curation:** Monitor multiple RSS feeds for relevant articles and receive a consolidated email digest of new posts within a defined timeframe (e.g., the last hour).
- **Competitor monitoring:** Track competitor blogs via RSS feeds and receive immediate alerts about their latest content, helping you stay informed about their strategies and announcements.

## How it works

1.  **Schedule Trigger:** The workflow starts every hour at the 30-minute mark.
2.  **List of RSS feeds:** A "Set" node defines an array of RSS feed URLs to monitor.
3.  **Split Out:** The array of RSS feed URLs is split into individual items.
4.  **Loop Over Items:** The workflow iterates over each RSS feed URL.
5.  **RSS Read:** For each URL, the "RSS Read" node fetches the latest posts from the feed.
6.  **If published in the last hour:** Filters the posts to only process entries published within the last hour, based on the `isoDate` property of the RSS feed item.
7.  **Send email with each post:** If a post was published within the last hour, an email is sent via Gmail containing the post's title, link, and content snippet. The email is sent to a specified recipient ("SET YOUR EMAIL HERE"), and it is personalized with the source blog's name.

## Services

-   Gmail
-   RSS Feeds

## Hashtags

#n8n #automation #RSS #email #contentcuration
