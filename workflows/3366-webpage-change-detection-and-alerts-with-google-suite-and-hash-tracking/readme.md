# Webpage Change Monitor

## Use cases:

*   **Monitor Terms of Service Changes:** Automatically track changes to a company's Terms of Service page and receive notifications when updates occur.
*   **Track Competitor Website Updates:** Keep an eye on competitor's website content, such as product descriptions or pricing, to stay informed about their offerings.
*   **Monitor Government Policy Updates:** Track changes to publicly available government policies or regulations to stay compliant.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a predefined schedule (e.g., daily).
2.  **Variables:** Stores the URL of the webpage to be monitored.
3.  **Fetch Webpage:** Retrieves the content of the specified webpage using an HTTP Request node.
4.  **Extract Contents:** Extracts the specific content from the webpage.
5.  **Markdown:** Convert HTML to Markdown.
6.  **Get Hash of Contents:** Generates a unique hash of the extracted content to detect changes.
7.  **Only New Hashes:** Checks if the generated hash exists from the previous executions. If the hash is new, it proceeds; otherwise, the workflow stops.
8.  **Take a Snapshot:** Saves a snapshot of the webpage content to a Google Drive file.
9.  **Log Record:** Creates a log entry in a Google Sheet with the URL, the hash, the data and a link to the Google Drive file.
10. **Notify of Change:** Sends an email notification with details of the change.

## Services:

*   **Google Sheets:** Used for logging changes and storing historical data.
*   **Google Drive:** Used for saving snapshots of the webpage content.
*   **Gmail:** Used for sending email notifications when changes are detected.

## Hashtags:

#n8n #automation #webscraping #changemonitor #websitemonitoring
