# Series HD Olimpo & TorrentLand

## Use cases:

- Automatically notify a Telegram channel about new releases from HD-Olimpo and TorrentLand, keeping members informed about the latest available content.
- Create an archive of links of the lastest series for personal use.
- Filter the notifications based on recency to avoid spamming the channel with old content.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered automatically based on a schedule (every 8 hours).
2.  **RSS Olimpo & RSS Torrent:** The workflow fetches RSS feeds from HD-Olimpo and TorrentLand. The RSS feed URLs can be configured within the node parameters.
3.  **Edit Fields:** The title, link and published date are parsed from the original RSS feeds and stored in variables that will be used to generate the message in Telegram. Regular expressions are used to modify the titles and extract information such as file size.
4.  **Merged Rss:** The data from the two RSS feeds is merged into a single stream of items.
5.  **Filter:** Filters the merged data to include only items published within the last 2 days.
6.  **Sort:** Sorts the filtered items by publication date in descending order, so the newest items appear first.
7.  **Markdown list:** Formats the title and link of each item into a Markdown list, creating a message for Telegram. It also escapes special Markdown characters in the title to prevent formatting issues in Telegram.
8.  **Telegram:** Sends the formatted Markdown message to a specified Telegram channel. The Telegram API credentials and channel ID are configured in the node.

## Services:

-   HD-Olimpo (RSS feed)
-   TorrentLand (RSS feed)
-   Telegram

## Hashtags:

#n8n #automation #telegram #rss #torrent
