# Hermas Inbound Order Automation

## Use cases:

- **Automated Order Data Extraction:** Automatically extracts order details (PO number, delivery date, SKUs, quantities) from inbound order emails, eliminating manual data entry.
- **Streamlined Inventory Management:** Populates a Google Sheet with parsed order data, enabling real-time inventory tracking and efficient stock management.
- **Improved Order Processing Efficiency:** Reduces the time and effort required to process inbound orders by automating data extraction and storage.

## How it works:

1.  **Email Trigger:** The workflow is triggered when a new email arrives in a specified Gmail inbox.
2.  **Subject Filter:**  The workflow checks if the email subject contains "Inbound Order." Only emails matching this criterion are processed further.
3.  **AI-Powered Data Extraction:** The email subject and body are sent to an AI Agent (powered by OpenAI). The AI Agent extracts key information like the purchase order number, expected delivery date, and order lines (SKU and quantity).  The AI Agent is configured with a specific system message that helps to extract the correct information and format it as JSON.
4.  **Data Formatting:** The "Format Purchase Order Lines" node restructures the extracted data to match the Google Sheet's column structure.  Each order line is converted into a separate item with the purchase order number, expected delivery date, SKU, and quantity.
5.  **Google Sheets Integration:**  The formatted data is appended to a designated Google Sheet.  Each order line is added as a new row, populating the PO number, expected delivery date, SKU, and quantity columns.

## Services:

-   Gmail
-   OpenAI
-   Google Sheets

## Hashtags:

#n8n #automation #AI #orderprocessing #googlesheets
