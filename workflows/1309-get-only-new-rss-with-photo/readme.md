# Get only new RSS with Photo

## Use cases:

-   **News Aggregation with Image Extraction:** Automatically collect the latest articles from a specific news source (e.g., The Verge) and extract the main image for each new article. This can be used to create visually appealing summaries or feeds.
-   **Content Monitoring and Archiving:** Monitor a specific RSS feed for new content and archive the article's title, author, URL, publication date, and the featured image for future reference or analysis.
-   **Personalized Newsletter Creation:** Gather content from a favorite blog or news source, extract the images, and compile the information into a personalized newsletter format for distribution.

## How it works:

1.  **Cron:** The workflow starts with a "Cron" node, which acts as a trigger, running the workflow every 5 minutes.
2.  **RSS Feed Read:** The "RSS Feed Read" node fetches data from the specified RSS feed URL (`http://www.theverge.com/rss/full.xml`).
3.  **Filter RSS Data:** The "Set" node ("Filter RSS Data") extracts and sets specific data points from the RSS feed, including the Title, Subtitle, Author, URL, Date and content.
4.  **Only get new RSS1:** The "Function" node ("Only get new RSS1") filters the RSS feed items to only pass on new items. This achieved by saving the Date and compare to the current fetched Date and only return the new entries
5.  **Extract Image1:** The "HTML Extract" node extracts the `src` attribute of the `img` tag within the content of each RSS item, effectively extracting the image URL.

## Services:

*   The Verge RSS Feed (`http://www.theverge.com/rss/full.xml`)

## Hashtags:

#n8n #automation #RSS #imageextraction #contentaggregation
