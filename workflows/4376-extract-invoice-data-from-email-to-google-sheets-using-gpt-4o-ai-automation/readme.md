# AI Invoice Processor Agent: Email to Structured Data

## Use cases:

- **Automated Invoice Processing for Accounting:** Automatically extract invoice data from Gmail attachments and populate a Google Sheet, saving accountants and bookkeepers from manual data entry.
- **Invoice Data Extraction for Small Businesses:** Streamline invoice processing and tracking by automatically capturing key information from invoices received via email and organizing it in a structured format.
- **Accounts Payable Automation:** Automate the capture of invoice data for invoice received by mail, enabling the trigger of other automated task like invoice payment using due dates.

## How it works:

This workflow automates invoice data extraction and organization from Gmail attachments into Google Sheets.

1.  **Gmail Trigger:** Monitors a specific Gmail label (e.g., "Invoice Processing") for new emails every minute.
2.  **Attachment Verification:** Filters emails to ensure they contain PDF attachments.
3.  **Extract Invoice data:** Extracts text from the PDF attachment.
4.  **Invoice AI Agent:** Uses an AI agent with the OpenAI Chat Model to analyze the extracted text and identify key invoice elements like company details, invoice number, dates, line items, and amounts, returning the data in a JSON format.
5.  **Create blank spreadsheet:** Creates a new Google Sheet to store the extracted invoice data and creates a sheet called invoice\_details
6.  **Move spreadsheet in invoice folder:** Moves the newly created spreadsheet to a specific "invoices" folder in Google Drive
7.  **Preparing Final data:** transform the json to simple json to allow data to be appended in google sheet
8.  **Final Spreadsheet with Invoice data:** Appends the extracted invoice data to the created Google Sheet.

## Services:

-   Gmail API
-   Google Sheets API
-   Google Drive API
-   OpenAI API

## Hashtags:

#n8n #automation #invoiceprocessing #googlesheets #openai
