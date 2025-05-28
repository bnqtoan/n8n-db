# My Workflow

## Use cases:

- **Tracking Payment Events:** This workflow can be used to track various payment events (e.g., purchase protests, subscription cancellations, refunds, and successful purchases) received via webhook and log them in a Google Sheet for analysis and reporting.
- **Real-time Data Logging:** The workflow enables real-time logging of payment-related data into a Google Sheet, providing an up-to-date record of all transactions and their statuses. This is helpful for monitoring sales performance and identifying potential issues with payments.
- **Guarantee Period Monitoring:**  Monitor the guarantee period of sales, identifying when the guarantee period ends and money belongs to the seller.

## How it works:

1.  **Webhook:** The workflow starts with a Webhook node that listens for incoming HTTP requests containing data about payment events.
2.  **Switch:** A Switch node then routes the data based on the type of event received (e.g., `PURCHASE_PROTEST`, `SUBSCRIPTION_CANCELLATION`, `PURCHASE_REFUNDED`, `PURCHASE_COMPLETE`).
3.  **Save execution data:** This node saves the data, maybe for debug pourposes
4.  **Convert timestamp:** Converts date/time values to specific format.
5.  **Set some data:** A "Set" node prepares the data to be sent to google sheets.
6.  **Google Sheets:** The workflow ends by appending the processed data to a specified Google Sheets spreadsheet, logging the event details for future reference.

## Services:

-   Google Sheets

## Hashtags:

#n8n #automation #googleSheets #webhook #paymentTracking
