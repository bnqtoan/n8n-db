# Google Search Engine Results Page Extraction with Bright Data

## Use cases:

- **Brand Monitoring:** Automatically extract and summarize Google search results for a specific brand or company to monitor online reputation and identify potential issues.
- **Competitive Analysis:** Gather and analyze search results for keywords related to competitors to understand their online presence, marketing strategies, and product positioning.
- **Market Research:** Automate the collection and summarization of search results related to a specific market or industry to identify trends, emerging technologies, and customer needs.

## How it works:

This workflow automates the extraction, summarization, and analysis of Google Search Engine Results Pages (SERPs) using Bright Data's Web Scraper API and n8n's AI capabilities. Here's a breakdown:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Set Search Query:** The "Set Google Search Query" node defines the search query and Bright Data zone. (e.g. search\_query = "Bright Data", zone = "serp\_api1").
3.  **Perform Google Search Request:** The "Perform Google Search Request" node sends a request to Bright Data's Web Scraper API to retrieve Google search results for the specified query and zone.
4.  **Google Search Data Extractor:** The "Google Search Data Extractor" node extracts textual data from the HTML response received from Bright Data. It uses an LLM to clean the data from html, css and script.
5.  **Summarization Chain:** The "Summarization Chain" node summarizes the extracted text using a Langchain summarization chain and the Google Gemini Chat Model For Summarization.
6.  **Google Search Expert AI Agent:** The "Google Search Expert AI Agent" node formats the search result and prepares it for sending to a webhook.
7.  **Webhook HTTP Request:** The "Webhook HTTP Request" node sends the formatted search result to a specified webhook URL (e.g., `https://webhook.site/ce41e056-c097-48c8-a096-9b876d3abbf7`) using a POST request.

## Services:

-   **Bright Data:** Web Scraper API for extracting Google Search results.
-   **Google Gemini API:** Used for data extraction and search result summarization.
-   **Webhook.site (or any webhook endpoint):**  For receiving the final formatted search results.

## Hashtags:

#n8n #automation #webscraping #googlesearch #brightdata #langchain #gemini
