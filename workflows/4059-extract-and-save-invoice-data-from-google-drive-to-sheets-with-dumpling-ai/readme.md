# Extract and Save Invoice Data from Google Drive to Sheets with Dumpling AI

## Use cases

- **Automated Invoice Processing:** Automatically extract data from invoices uploaded to a specific Google Drive folder and save it to a Google Sheet for accounting and bookkeeping purposes.
- **Inventory Management:** Extract item details from invoices, such as model, quantity, and price, to automatically update inventory records in a Google Sheet.
- **Sales Data Analysis:** Aggregate invoice data, including order number, document date, and total amount, to track sales performance and identify trends.

## How it works

This workflow automates the process of extracting invoice data from Google Drive and saving it into a Google Sheet using Dumpling AI for data extraction.

1.  **Google Drive Trigger:** Monitors a designated Google Drive folder for new files (invoices). When a new file is detected, it triggers the workflow.
2.  **Download Invoice File:** Downloads the newly uploaded invoice file from Google Drive.
3.  **Convert invoice File to Base64:** Converts the invoice file to a Base64 encoded string, which is suitable for sending to the Dumpling AI API.
4.  **Send file to Dumpling AI for Data Extraction:** Sends the Base64 encoded invoice file to the Dumpling AI API, along with a prompt specifying the data to extract (e.g., order number, document date, item details, total amount).
5.  **Parse Dumpling AI JSON Response:** Parses the JSON response from Dumpling AI to extract the structured invoice data.
6.  **Split line Items from Invoice:** Splits the "items" array from the parsed JSON data into individual items, creating a separate data entry for each item.
7.  **Save Data to Google Sheet:** Appends the extracted data for each item to a specified Google Sheet, including fields like order number, document date, PO number, sold-to/ship-to information, model, quantity, unit price, and total price.

## Services

-   **Google Drive:** Used for monitoring and downloading invoice files.
-   **Dumpling AI:** Used for extracting structured data from invoices.
-   **Google Sheets:** Used for storing and organizing the extracted invoice data.

## Hashtags

#n8n #automation #invoiceprocessing #googledrive #googlesheets #dumplingai
