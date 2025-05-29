# Summarize Glassdoor Company Info with Google Gemini and Bright Data Web Scraper

## Use Cases:

- **Automated Company Research:**  HR professionals or job seekers can use this workflow to quickly get a summarized overview of a company's Glassdoor page, saving time on manual research.
- **Competitive Analysis:** Businesses can monitor and summarize Glassdoor reviews of their competitors to understand their strengths and weaknesses based on employee feedback.
- **Reputation Management:**  Companies can proactively monitor and summarize their Glassdoor reviews to identify potential issues and address employee concerns.

## How it works:

1. **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2. **Bright Data Web Scraper API Call:** An HTTP Request node ("HTTP Request to Glassdoor") triggers a Bright Data Web Scraper job to extract data from a specified Glassdoor company overview page (e.g., Apple).  The `dataset_id` parameter specifies the data extraction template.
3. **Snapshot ID Extraction:** The "Set Snapshot Id" node extracts the `snapshot_id` from the Bright Data API response. This ID is used to check the status and download the extracted data.
4. **Status Check Loop:** The workflow enters a loop to check the status of the Bright Data web scraping job:
    - The "Check Snapshot Status" node polls the Bright Data API using the `snapshot_id`.
    - The "If" node checks if the `status` is "ready".
    - If the status is not "ready", the "Wait for 30 seconds" node pauses the workflow for 30 seconds before re-checking the status.
5. **Download Snapshot:** Once the snapshot is ready, the "Download the Snapshot Response" node downloads the extracted data from Bright Data.
6. **Data Loading:** the extracted data is loaded by the "Default Data Loader" node for future processing
7. **Text Splitting:** "Recursive Character Text Splitter" splits the text into chunks.
8. **Summarization:**  The "Summarization of Glassdoor Response" node uses a summarization chain with the Google Gemini Flash Exp model to summarize the extracted Glassdoor content.  It is configured to use the document loader.
9. **Webhook Notification:** The "Configure Webhook Notification" node sends the summarized text to a specified webhook URL (in this case, a webhook.site URL) for notification or further processing.

## Services:

- **Bright Data:** Used for web scraping Glassdoor company information.
- **Google Gemini (PaLM) API:** Used for summarizing the scraped data.
- **Webhook.site:** Used as the destination for the summary notification (for testing purposes).

## Hashtags:

#n8n #automation #webscraping #googlegemini #datasummarization
