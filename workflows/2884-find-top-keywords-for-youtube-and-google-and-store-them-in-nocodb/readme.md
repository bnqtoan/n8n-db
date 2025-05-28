# Find Top Keywords

## Use Cases:

- **Keyword Research for SEO:** Identify high-potential keywords for search engine optimization by automating the process of gathering and analyzing search volume, CPC, and competition data.
- **Content Strategy Development:** Generate keyword ideas for blog posts, articles, and videos based on trending searches and user intent, ensuring content relevance and visibility.
- **Market Trend Analysis:** Monitor keyword trends over time to understand shifts in consumer interest and adapt marketing strategies accordingly.

## How it works:

1.  **Trigger:** The workflow starts either manually or on a scheduled interval (every 4 hours).
2.  **Generate Time:** Creates a formatted date for yesterday, used for querying news articles within a specific range.
3.  **NocoDB (Base Keywords):** Retrieves a list of base keywords from a NocoDB database.
4.  **Google & YouTube Autocomplete Keywords:** Uses the base keywords to generate second-order keywords using a local Social Flood Docker instance. These nodes hit the `/google-search/autocomplete-keywords` endpoint to expand the keyword list.
5.  **Combine Keywords and Filter:** Combines all found keywords for google and youtube, and filters the list. After the keywords are filteded, the result is provided in batches of 1000.
6.  **Google & YouTube Search Volume:** Queries the Data for SEO API to fetch search volume, CPC, and competition data for each keyword (Google and YouTube separately).
7.  **Split Out Search Results:** Splits the `tasks[0].result` array into individual items for further processing.
8.  **Filter:** Filters the search volume data to only include keywords that contain both monthly search volume and CPC data.
9. **Check for Existing Keywords:** Check if the keywords is already available in the NocoDB tables.
10. **If Keyword Available:** If the Keyword is already available in the NocoDB tables, update the keyword with the new data. If the keyword is unavailable, create a new keyword item in the NocoDB table.
11. **Format Data:** Formats the extracted search volume data and combines it with second-tier keyword data.
12. **Bulk Import:** Bulk imports the formatted data into NocoDB tables for Google and YouTube keywords, respectively.

## Services:

-   **NocoDB:** A no-code platform used as a database to store base keywords, second-tier keywords, and search volume data.
-   **Data for SEO API:** Provides search volume, CPC, and competition data for Google and YouTube keywords.
-   **Social Flood Docker Instance:** Utilized to get second order keywords based on primary keywords from NocoDB.

## Hashtags:

#n8n #automation #keywordresearch #seo #contentstrategy
