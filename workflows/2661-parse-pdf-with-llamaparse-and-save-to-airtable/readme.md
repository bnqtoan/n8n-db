# Invoice Parser with LlamaParse and Airtable

## Use cases

*   **Automated Invoice Processing:** Automatically extract data from invoices stored in Google Drive and save it to Airtable, eliminating manual data entry.
*   **Expense Tracking:** Simplify expense tracking by automatically extracting invoice details (line items, amounts, quantities) and storing them in a structured format for analysis.
*   **Vendor Payment Automation:** Streamline vendor payment processes by automatically populating payment systems with invoice data extracted from Google Drive.

## How it works

1.  **Google Drive Monitoring:** The workflow starts with a Google Drive Trigger that monitors a specific folder for new files (invoices).
2.  **File Download:** When a new file is detected, the Google Drive node downloads the invoice file.
3.  **Upload to LlamaParse:** The downloaded file is then sent to the LlamaParse API for parsing using an HTTP Request node. The request includes:
    *   The file itself.
    *   A webhook URL where LlamaParse will send the parsed data.
    *   Headers for authentication (API Key).
    *   Instructions for parsing the data, specifically to extract invoice line items.
4.  **Webhook Processing:** The LlamaParse API sends the parsed data to the n8n webhook.
5.  **AI-Powered Data Extraction:**
    *  Set up a prompt and schema for line item extraction with OpenAI
    *  Extract structured line item data from the parsed invoice data using an OpenAI.
6.  **Record Creation in Airtable:**
    *   The invoice data and extracted line items are used to create a record in the "Invoices" table in Airtable.
    *   The line items are further processed.
    *   Each line item is then used to create a record in the "Line Items" table in Airtable, linking it back to the main Invoice record.

## Services

*   Google Drive
*   LlamaParse API ([https://api.cloud.llamaindex.ai/](https://api.cloud.llamaindex.ai/))
*   OpenAI API
*   Airtable

## Hashtags

#n8n #automation #invoiceprocessing #llamaparse #airtable
