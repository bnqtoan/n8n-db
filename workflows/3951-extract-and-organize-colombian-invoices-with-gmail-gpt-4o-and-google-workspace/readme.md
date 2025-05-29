# Colombian Invoices Processing

## Use cases:

- **Automated Personal Invoice Management:** Automatically extracts data from Colombian electronic invoices received via Gmail, eliminating the need for manual data entry.
- **Digital Archiving and Organization:** Creates a structured digital archive of invoices in Google Drive and Google Sheets, making it easy to search, track, and manage financial records.
- **Simplified Tax Preparation:** Streamlines tax preparation by providing a consolidated and organized record of invoices, including key data points like totals, taxes, and issuer information.

## How it works:

This workflow automates the process of extracting and organizing data from Colombian electronic invoices received via Gmail.

1.  **Email Trigger:** The workflow starts by monitoring a specified Gmail inbox for new emails containing `.zip` attachments, which are assumed to be invoice packages.  It runs every 30 minutes.
2.  **ZIP File Handling:** The workflow extracts the contents of the ZIP file, which typically includes PDF and XML files representing the invoice.
3.  **File Type Filtering:** It filters the extracted files, separating PDF and XML documents for specific processing.
4.  **Data Extraction:**
    *   For **PDF** files, it extracts text content using the "Extract PDF Data" node.
    *   For **XML** files, it extracts the XML data and converts it to JSON format.
5.  **AI-Powered Data Processing:** A LangChain Agent, powered by the OpenAI GPT-4o-mini model, analyzes the extracted PDF and XML data to identify key invoice details such as invoice type, number, date, issuer/receiver NITs, company name, amounts (before tax, tax, total), CUFE, and a summary of the purchase.  A "Calculator" tool verifies that Total = Subtotal + IVA.
6.  **Data Validation:** Validates extracted data.
7.  **Data Storage:**
    *   The original PDF invoice is uploaded to a specified Google Drive folder and renamed to `YYYY-MM-DD-NUMERO_FACTURA.pdf`.
    *   The extracted invoice data is then added or updated in a Google Sheets spreadsheet. A unique key, generated from the issuer's NIT and invoice number, prevents duplicate entries.

## Services:

-   Gmail
-   Google Drive
-   Google Sheets
-   OpenAI (GPT-4o-mini)

## Hashtags:

#n8n #automation #invoiceprocessing #colombia #googlesheets
