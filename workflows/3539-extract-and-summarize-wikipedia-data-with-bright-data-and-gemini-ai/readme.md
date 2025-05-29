# Extract & Summarize Wikipedia Data with Bright Data and Gemini AI

## Use cases:

*   **Content Summarization:** Automatically generate concise summaries of Wikipedia articles for quick information gathering.
*   **Data Extraction and Formatting:** Extract data from Wikipedia pages and present it in a human-readable format for reports or analysis.
*   **Real-time Information Delivery:** Get notified via webhook with a summary of a specific Wikipedia page whenever it's updated or on a scheduled basis.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Set Wikipedia URL with Bright Data Zone:** Sets the target Wikipedia URL and Bright Data Zone using the "Set Wikipedia URL with Bright Data Zone" node.  The example URL is set to `https://en.wikipedia.org/wiki/Cloud_computing?product=unlocker&method=api` and zone to `web_unlocker1`.
3.  **Wikipedia Web Request:** Retrieves the HTML content of the specified Wikipedia page using the "Wikipedia Web Request" node, utilizing the Bright Data proxy service.
4.  **LLM Data Extractor:** Extracts and formats the data from the HTML content into a human-readable format using the "LLM Data Extractor" node, powered by a Google Gemini Chat Model.
5.  **Concise Summary Generator:** Generates a concise summary of the extracted content using the "Concise Summary Generator" node, powered by another Google Gemini Chat Model.
6.  **Summary Webhook Notifier:** Sends the generated summary to a specified webhook URL using the "Summary Webhook Notifier" node. The webhook URL is set to `https://webhook.site/ce41e056-c097-48c8-a096-9b876d3abbf7`.

## Services:

*   **Bright Data:** A web scraping and proxy service used to retrieve Wikipedia content.
*   **Google Gemini API:** Used for both extracting readable text from the html and generating concise summaries of the extracted data.
*   **Webhook.site:** A service to create temporary webhook endpoints for receiving notifications.

## Hashtags:

#n8n #automation #wikipedia #llm #datascience
