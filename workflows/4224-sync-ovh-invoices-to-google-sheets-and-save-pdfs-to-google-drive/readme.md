# Get OVH Invoices to Google Sheets

## Use Cases:

- **Automated Invoice Archiving:** Automatically fetch and store OVH invoices in a structured manner within Google Drive folders, organized by year, ensuring easy retrieval and compliance.
- **Centralized Financial Tracking:** Aggregate OVH invoice data into a Google Sheet, providing a single source of truth for financial reporting and analysis. This helps in tracking expenses, tax, and other relevant financial information related to OVH services.
- **Simplified Invoice Management:** Eliminate the manual process of downloading and organizing OVH invoices. This workflow automates the entire process from fetching invoices to saving them in the cloud and recording their details in a spreadsheet.

## How it Works:

1.  **Trigger:** The workflow is initiated manually by clicking 'Test workflow'.
2.  **Query OVH Invoices:** The workflow queries the OVH API to retrieve a list of recent invoices (last 3 months by default, but can be configured).
3.  **Convert to Array**: Transform the data into an array that can be processed by n8n.
4.  **Split Out Invoices:** Split the invoices into individual items for processing.
5.  **Loop Through Invoices:** Iterates over each invoice in the list.
6.  **Get Invoice Data:** For each invoice, the workflow calls the OVH API again to retrieve detailed information such as date, tax, URL, and PDF URL.
7.  **Record in OVH Sheet:** Appends or updates a Google Sheet with the extracted invoice data. The date format is localized to `dd.MM.yyyy`.
8.  **Check for FY Folder ID:** Checks if a folder exists for the invoice's fiscal year (FY) in a designated Google Drive folder.
9.  **Create Folder:** If the FY folder doesn't exist, it creates a new folder.
10. **Download PDF:** Downloads the PDF version of the invoice from the URL provided in the invoice data.
11. **Safe File:** Saves the downloaded PDF to the corresponding FY folder in Google Drive.
12. **Update Record Data with FileID:** Updates the Google Sheet record with the filename, and Google Drive file ID of the saved PDF.

## Services:

-   OVH API: Used to retrieve invoice lists and invoice details.
-   Google Sheets: Used to store and manage invoice data.
-   Google Drive: Used to store invoice PDFs in yearly folders.

## Hashtags:

#n8n #automation #OVH #GoogleSheets #GoogleDrive #InvoiceAutomation
