# Read RSS feed from two different sources

## Use cases

- **Content Aggregation:** Automatically collect and consolidate articles from multiple RSS feeds (e.g., industry news, blog posts) into a single stream for easy consumption.
- **Monitoring:** Track updates from specific websites or blogs by monitoring their RSS feeds and triggering actions based on new content.
- **Content Distribution:** Automatically share new content from RSS feeds to other platforms (e.g., social media, email newsletters).

## How it works

This workflow reads RSS feeds from two different sources and processes the data. Here's a breakdown:

1.  **Manual Trigger:** The workflow starts when you manually click "Execute Workflow".
2.  **Code:** A "Code" node defines an array of two RSS feed URLs (n8n Medium blog and n8n Dev.to blog). Each URL is wrapped in a JSON object with a `url` property.
3.  **Loop Over Items:** The "Loop Over Items" node iterates through the array of URLs created in the previous step, processing each URL individually.
4.  **RSS Feed Read:** For each URL, the "RSS Feed Read" node fetches the corresponding RSS feed data. The URL for the RSS Feed is dynamically set by the `={{ $json.url }}` expression which reads the url property set in the Code node.

## Services

-   Medium RSS Feed
-   Dev.to RSS Feed

## Hashtags

#n8n #RSS #Automation #ContentAggregation #Feeds
