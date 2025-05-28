# Search Console Reports to Google Sheets

## Use Cases

- **Automated SEO Reporting:**  Generate daily, weekly, or monthly reports on website performance based on data from Google Search Console, automatically populating Google Sheets for easy analysis and sharing.
- **Keyword Performance Tracking:** Monitor the clicks, impressions, CTR, and average position of specific keywords over time to identify trends and optimize content strategy.
- **Page Performance Analysis:** Track the performance of specific landing pages, identifying those with the highest (or lowest) CTR and impressions to prioritize optimization efforts.

## How it Works

This workflow automates the process of fetching data from Google Search Console and updating it in Google Sheets. Here's a breakdown:

1.  **Schedule Trigger:** The workflow is initiated based on a defined schedule (e.g., daily, weekly).
2.  **Set your domain:** Sets the target domain and the number of days for the data retrieval.
3.  **Google Search Console Data Fetching:** Three "HTTP Request" nodes retrieve data from the Google Search Console API for different dimensions:
    *   **Get query Report:** Fetches data based on search queries (keywords).
    *   **Get Page Report:** Fetches data based on specific pages.
    *   **date:** Fetches data based on date.
    The API requests are configured with a start and end date.
4.  **Data Splitting:** The "Split Out" nodes separate the rows of the API response into individual data items for processing.
5.  **Data Transformation:** The "Edit Fields" nodes extract and map specific fields (`clicks`, `impressions`, `ctr`, `position`) from the API response. Each one also renames the dimension that is being split to its appropriate name (query, page, or date).
6.  **Google Sheets Update:** The "Google Sheets" nodes add or update data in the specified Google Sheets document. Each node targets a specific sheet within the document for query, page, and date data, respectively.

## Services

*   Google Search Console API
*   Google Sheets API

## Hashtags

#n8n #automation #googleSearchConsole #googleSheets #seo
