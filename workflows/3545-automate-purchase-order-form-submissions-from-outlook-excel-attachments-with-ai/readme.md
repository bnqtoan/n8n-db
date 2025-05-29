# My Workflow

## Use cases:

- **Automated Purchase Order Processing:** Automatically extracts data from purchase orders submitted as XLSX files via email, reducing manual data entry.
- **Invoice Data Extraction:** Adapts to process invoices or other forms in XLSX format, capturing relevant data fields.
- **Validation and Error Notification:** Validates extracted data for common errors and automatically notifies submitters of any issues.

## How it works:

1.  **Outlook Trigger:** Monitors a designated Outlook inbox for new emails containing attachments.
2.  **Is Submitting a Purchase Order?:** Use the Text Classifier node to validate intent
3.  **Is Excel Document?:** Checks if the attached file is an Excel spreadsheet (XLSX format).
    *   If yes, proceeds to extract the data.
    *   If not, sends a reply to the sender indicating an invalid file format.
4.  **Extract from File:** Extracts data from the XLSX file.
5.  **XLSX to Markdown Table:** Converts the extracted XLSX data into a Markdown table format, which can be processed by the LLM.
6.  **Extract Purchase Order Details:** Uses the information extractor node with the gpt-4o-mini model to extract details such as PO number, date, total, vendor information, delivery details, and line items from the Markdown table.
7.  **Fix Excel Dates:** Reformats the purchase order date to a standard date format.
8.  **Run Checks:** Performs data validation checks to ensure that the purchase order number is present, the date is valid, there are line items present, and the line items match the total.
9.  **Is Valid Purchase Order?:** Checks the results of the data validation to determine if it is a valid purchase order.
    *   If yes, sends a confirmation reply to the sender.
    *   If not, sends a rejection reply to the sender indicating the errors detected.

## Services:

*   Microsoft Outlook
*   OpenAI

## Hashtags:

#n8n #automation #purchaseorder #dataintegration #AI
