# Search & Summarize Web Data with Perplexity, Gemini AI & Bright Data to Webhooks

## Use cases:

- **Market Research Automation:** Automatically gather and summarize information about competitors or industry trends from web searches, delivered directly to a webhook for further processing or analysis.
- **Brand Monitoring:** Monitor online mentions of a brand or product using Perplexity search, then summarize the sentiment and key topics discussed, sending alerts to a communication channel.
- **Automated Report Generation:** Generate concise summaries of web-based research on specific topics, ideal for creating automated reports or briefing documents.

## How it works:

This workflow automates the process of searching the web using Perplexity via Bright Data's web scraper, extracting relevant information, summarizing it using Google Gemini AI, and sending the summary to a specified webhook.

1.  **Trigger:** The workflow is initiated manually by clicking "Test workflow."
2.  **Perplexity Search Request:** Sends a search query ("tell me about BrightData") to Perplexity through the Bright Data Datasets API. The search is configured to target the US and includes error reporting.
3.  **Set Snapshot ID:** Extracts the snapshot ID from the Bright Data API response and stores it in a variable.
4.  **Check Snapshot Status:** Periodically checks the status of the Bright Data snapshot using the snapshot ID.
5.  **Conditional Branching:** If the snapshot is "ready", the workflow proceeds to download the data. Otherwise, it waits for 30 seconds and checks the status again. An additional `If` node checks for errors.
6.  **Download Snapshot:** Downloads the snapshot data in JSON format from the Bright Data API.
7.  **Readable Data Extractor:** Extracts readable content from the downloaded HTML data using the Gemini AI to format HTML to text..
8.  **Summarization of Search Result:** Summarizes the extracted content using a summarization chain with Gemini AI. A text splitter and default data loader are used to manage the data before it is sent to the summarization chain.
9.  **Webhook Notifier:** Sends the final summarized content to a specified webhook URL.

## Services:

*   **Perplexity:** Used as the search engine (via Bright Data).
*   **Bright Data Datasets API:** Used to trigger the web scraping and retrieve the search results.
*   **Google Gemini AI:** Used for information extraction and summarization.
*   **Webhook.site (example):**  A service where the final summary is sent.  (Note: The example webhook URL should be replaced with a real webhook endpoint.)

## Hashtags:

#n8n #automation #webscraping #AI #summarization
