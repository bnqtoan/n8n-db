# Scrape website with Scrappey

## Use cases

*   **Scheduled Website Monitoring:** Automatically scrape a website at regular intervals (e.g., hourly, daily) to monitor for changes in content, pricing, or other relevant information.
*   **Data Extraction for Analysis:** Extract specific data points (e.g., product names, descriptions, prices) from a website and use the scraped data for market research, competitor analysis, or lead generation.
*   **Content Archiving:** Create a historical archive of website content by scraping it periodically and storing the data in a database or file.

## How it works

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which activates the workflow based on a defined schedule (e.g., every day at 9:00 AM).
2.  **Test Data:** The `Test Data` node sets up example data, including a website URL (`https://n8n.io/`) for testing purposes. This node could be replaced with a database query or other data source in a real-world scenario.
3.  **Scrape website with Scrappey:** The `HTTP Request` node sends a POST request to the Scrappey API to scrape the website defined in the `Test Data` node. It uses the `request.get` command and passes the target URL. It also includes an API key for authentication.

## Services

*   **Scrappey:** A web scraping API that bypasses anti-bot measures.

## Hashtags

#n8n #automation #webscraping #scrappey #scheduledtask
