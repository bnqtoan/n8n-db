# [n8n] YouTube Channel Advanced RSS Feeds Generator

## Use cases:

- **Content Aggregation:** Automatically generate RSS feeds for specific YouTube channels to monitor new video uploads and community posts in a preferred RSS reader or aggregator.
- **Social Media Management:** Integrate the generated RSS feeds into social media management tools to automatically share new content from target YouTube channels on other platforms.
- **Personalized Notifications:** Set up custom notifications based on new content published on specific YouTube channels, ensuring timely awareness of updates.

## How it works:

1.  The workflow starts with an n8n Form Trigger, which accepts a YouTube channel username, channel ID, or video ID.
2.  A Code node validates the input and determines the type of identifier provided (username, channel ID, or video ID).
3.  Depending on the input type, a Switch node routes the data to the appropriate branch.
    *   **Channel Username/ID:** The workflow retrieves a temporary token from `commentpicker.com` and uses it to get the channel ID from the YouTube API via the `commentpicker.com` API.
    *   **Video ID:**  The workflow retrieves a temporary token from `commentpicker.com` and uses it to get the channel ID from the YouTube API via the `commentpicker.com` API.
4.  The workflow generates the base XML feed URL using the obtained channel ID.
5.  The Aggregate node combines the generated URLs.
6.  Then uses RSS Bridge to generate multiple RSS feeds for the channel's videos and community posts in different formats: HTML, ATOM, JSON, MRSS, TEXT, and SFEED.
7.  The data from Youtube Videos RSS Formats and Youtube Channel Community RSS Formats is merged using the Merge node.
8.  A Code node formats the final results as an HTML table.
9.  Finally, the Respond to Webhook node returns the HTML table containing the RSS feed URLs.

## Services:

*   **Comment Picker API:** Used to retrieve channel IDs and temporary tokens.
*   **RSS Bridge:** Used to generate RSS feeds in various formats.

## Hashtags:

#n8n #automation #youtube #rss #workflow
