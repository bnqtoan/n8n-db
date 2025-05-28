# Google Sheets Integration via Webhook

## Use cases:

*   **Data Collection from Web Forms:**  Capture data submitted through a web form (e.g., a contact form or a survey) and automatically append it to a Google Sheet for centralized record-keeping.
*   **Real-time Data Logging:**  Log events or data points from various sources (e.g., IoT devices, application logs) in real-time to a Google Sheet for monitoring and analysis.
*   **Simple API Endpoint for Data Storage:**  Create a basic API endpoint that accepts data via a webhook and stores it directly into a Google Sheet, simplifying data ingestion for small applications or prototypes.

## How it works:

This workflow listens for incoming HTTP requests via a Webhook node. When a request is received, the data from the request is then passed to a Google Sheets node, which appends the received data as a new row in the specified Google Sheet.

1.  **Webhook:**  The workflow starts with a Webhook node configured to listen for HTTP requests at the `/webhook` endpoint.  The `responseData` parameter is set to `allEntries` to return the full dataset to the requester, and the `responseMode` is set to `lastNode` to return the result of the Google Sheets node..
2.  **Google Sheets:**  The Google Sheets node is configured to append data to the `Problems!A:D` range in the Google Sheet with the ID `17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU`. The credentials for accessing the Google Sheets API are handled through the `googleApi` credential.

## Services:

*   Google Sheets

## Hashtags:

#n8n #GoogleSheets #Webhook #DataCollection #Automation
