# Invoice Automation with Gemini AI

## Use Cases:

- **Automated Invoice Processing:** Automatically extract data from supplier invoices received via email and store it in a structured format (e.g., Excel) for accounting and reconciliation.
- **Reduced Manual Data Entry:** Minimize the time and effort spent manually entering invoice details into accounting systems.
- **Improved Accuracy:** Leverage AI to reduce errors associated with manual data entry and interpretation of invoice documents.

## How it works:

1.  **Fetch Recent Emails:** The workflow starts with a scheduled trigger that retrieves recent emails from a specified Outlook mailbox (e.g., Accounts Receivable).
2.  **Classify Email:** The workflow checks if it contains an invoice from the supplier and classifies each message prior to downloading attachments, to reduce the consumption of ressources.
3.  **Download & Split Attachments:** Downloads attachments from the email. The workflow then splits it for individual processing.
4.  **Invoice Classification (AI-Powered):** It uses the Gemini AI model to determine if each attachment is an invoice. This is done by sending the file's content to Gemini and asking it to classify whether it is an invoice issued to the company.
5.  **Extract Invoice Details (AI-Powered):** For confirmed invoices, the workflow extracts invoice details such as invoice number, date, amount, supplier information using the Gemini AI, and extracts the required details from them.
6.  **Upload to Excel:** The extracted invoice data is then appended as a new row in a specified Microsoft Excel 365 workbook.

## Services:

-   Microsoft Outlook 365
-   Google Gemini AI
-   Microsoft Excel 365

## Hashtags:

#n8n #automation #invoiceprocessing #ai #gemini
