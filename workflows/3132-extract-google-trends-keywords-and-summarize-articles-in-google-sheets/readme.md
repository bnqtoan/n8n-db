# My workflow 2

## Use cases:

- **Content Curation:** Automatically discover trending topics from Google Trends and save them to a Google Sheet, facilitating content planning and creation.
- **SEO Monitoring:** Track trending keywords related to a specific industry or topic to identify opportunities for search engine optimization.
- **Editorial Planning:** Build an editorial calendar by automatically populating a Google Sheet with trending keywords, summaries, and links to relevant articles.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or automatically every hour (at 11 minutes past the hour) using a schedule trigger.
2.  **Configuration:** The workflow retrieves configuration parameters like `min_traffic`, `max_results`, and `jina_key` from a "CONFIG" node.
3.  **Get saved keywords**: Retrieve saved keywords from Google sheet to avoid duplicates
4.  **Google Trends Data:** It fetches trending keywords from Google Trends Italy via an HTTP Request.
5.  **XML Conversion:** The XML response from Google Trends is converted into a JSON format for easier data manipulation.
6.  **Data Processing:** The workflow filters the trending keywords based on `min_traffic`, retrieves associated news articles, and flattens data for Google Sheets, rename columns in order to have a human readable structure.
7.  **Scraping:** The workflow scrapes the content of the top 3 news articles associated with each trending keyword using the Jina AI API.
8.  **Content Aggregation:** The scraped content from the three URLs is combined into a single "summary" field.
9. **Data validation**: If scraping fails, data are not saved
10. **Google Sheets Update:** Finally, the trending keyword and its summary are appended to a Google Sheet.

## Services:

-   Google Trends
-   Google Sheets
-   Jina AI

## Hashtags:

#n8n #automation #googleTrends #contentCuration #seo
