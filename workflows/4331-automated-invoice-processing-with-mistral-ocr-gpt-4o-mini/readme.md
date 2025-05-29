# Invoice Data Extraction and Structuring Workflow

## Use cases:

-   **Automated Invoice Processing:** Automatically extract data from new invoices uploaded to Google Drive, eliminating manual data entry for accounting or bookkeeping tasks.
-   **Expense Tracking:** Integrate invoice data into an expense tracking system to monitor spending and generate reports.
-   **Data Archiving:** Create structured records of invoices for easy searching and retrieval, ensuring compliance and efficient auditing.

## How it works:

1.  **Google Drive Trigger: New Invoice Detection:** The workflow starts when a new invoice is detected in a specified Google Drive folder.
2.  **Google Drive: Download Invoice:** The workflow downloads the detected invoice file.
3.  **Convert invoice File to Base64:** Converts the invoice file to a Base64 string.
4.  **Mistral OCR API: Extract Text:** The workflow sends the invoice to the Mistral OCR API, which extracts the text content from the invoice image.
5.  **Data Splitter: OCR Pages:** Splits the OCR output into individual pages for processing.
6.  **Field Extractor: Page Markdown:** Transforms each page's data into markdown format.
7.  **Data Aggregator: Combine Pages:** Combines the markdown content of all pages into a single text.
8.  **AI Agent: Structure Invoice Data:** Passes the combined text data to an AI agent. This agent uses the GPT-4o-mini model.
9.  **AI Engine: GPT-4o-mini:** Processes the extracted text to identify key invoice fields (e.g., invoice number, date, amount, vendor) and structures the data accordingly.
10. **JSON Parser: Invoice Structure:** Parses the AI-structured data into a JSON format, making it easy to use in other applications or workflows.
11. **Output:** Outputs the structured invoice data.

## Services:

-   Google Drive
-   Mistral OCR API
-   GPT-4o-mini AI Model (via Langchain)

## Hashtags:

#n8n #automation #invoiceprocessing #OCR #AI
