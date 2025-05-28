# n8n Workflow: Webhook to Google Sheets

## Use cases:

*   **Simple Data Collection:** Use this workflow to create a basic form submission endpoint. Whenever someone submits data to the webhook, it automatically gets added as a new row in your Google Sheet.
*   **Event Logging:** Log events from external applications or services into a Google Sheet for tracking, analysis, or auditing purposes. This is useful for debugging or monitoring.
*   **Basic Lead Generation:** Capture leads from a website form (configured to send data to the webhook) and store them in a Google Sheet for later follow-up.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a "Webhook" node. This node listens for incoming HTTP POST requests at the specified path ("/webhook").
2.  **Data Submission:** When a POST request is received, the data is extracted from the request body.
3.  **Google Sheets Integration:** The extracted data is then passed to the "Google Sheets" node. This node appends a new row to the specified Google Sheet ("Problems!A:D" in sheet ID "17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU") with the data received from the webhook.
4.  **Response:**  The webhook responds with the data that was sent to Google Sheets.

## Services:

*   Google Sheets

## Hashtags:

#n8n #automation #webhook #googlesheets #dataentry
