# Extract & Summarize Bing Copilot Search Results with Gemini AI and Bright Data

## Use cases:

1.  **Market Research:** Automatically extract and summarize search results from Bing Copilot to identify key trends, competitor analysis, or customer sentiment regarding specific products or services.
2.  **Travel Planning:** Scrape and summarize hotel information from Bing Copilot searches to provide users with a concise overview of available options in a particular city, including addresses, descriptions, and website links.
3.  **Content Creation:** Generate summaries of Bing Copilot search results to quickly gather information and create blog posts, articles, or reports on trending topics.

## How it works:

1.  The workflow is initiated manually using the "When clicking ‘Test workflow’" trigger node.
2.  A "Perform a Bing Copilot Request" node sends a search query to the Bright Data Web Scraper API (Bing Copilot) using the provided URL and prompt ("Top hotels in New York").
3.  The Bright Data API returns a `snapshot_id`. The "Set Snapshot Id" node extracts this ID.
4.  The "Check Snapshot Status" node uses the `snapshot_id` to poll the Bright Data API, verifying if the snapshot is ready.
5.  An "If" node checks the status. If the status is not "ready", the workflow waits for 30 seconds ("Wait for 30 seconds" node) and then checks the status again.
6.  Once the snapshot is ready, the "Download Snapshot" node retrieves the search results from Bright Data.
7.  A "Structured Data Extractor" node uses a Google Gemini model to extract structured JSON data (e.g., city, hotels, name, address, description, website) from the downloaded snapshot.
8.  A "Concise Summary Creator" node uses another Google Gemini Model to creates a concise summary of the content from the downloaded snapshot.
9.  Finally, the extracted structured data and summary are sent to a webhook URL using "Structured Data Webhook Notifier" and "Summary Webhook Notifier" nodes, respectively.

## Services:

*   **Bright Data Web Scraper API:** Used to perform the Bing Copilot search and retrieve the results.
*   **Google Gemini AI:** Used for structured data extraction and content summarization.
*   **Webhook.site:** Used to send the extracted structured data and the summary to a specified URL.

## Hashtags:

#n8n #automation #webscraping #bingcopilot #geminiai
