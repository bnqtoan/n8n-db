# Invoice Data Extraction and Reconciliation Workflow

## Use Cases:

- **Automated Invoice Processing:** Automatically extract data from invoices received via email and populate a reconciliation spreadsheet, eliminating manual data entry.
- **Vendor Payment Tracking:** Streamline the process of tracking invoices from different suppliers, ensuring accurate and timely payments.
- **Expense Report Generation:** Quickly gather and organize invoice data for generating expense reports.

## How it works:

1.  **Receiving Invoices (Gmail Trigger):** The workflow starts by monitoring a specified Gmail inbox for new emails containing attachments, specifically PDF invoices, from a particular sender (e.g., invoices@paypal.com).  It also checks to ensure the email does not already have a label "invoice synced" to avoid duplicate processing.
2.  **Label Extraction:** The workflow extracts the label of the email.
3.  **Should Process Email? (IF):** Checks if attachment is a PDF and does not have the label "invoice synced".
4.  **Upload to LlamaParse (HTTP Request):** The attached PDF invoice is then uploaded to LlamaParse, a service that converts complex PDFs into markdown.
5.  **Get Processing Status (HTTP Request):** The workflow retrieves the status of the parsing job from LlamaParse.
6.  **Is Job Ready? (Switch):** The workflow checks if the parsing job is ready (status is "SUCCESS"). If not, it waits and checks again.
7.  **Get Parsed Invoice Data (HTTP Request):** Once the parsing job is complete, the extracted data in Markdown format is retrieved from LlamaParse.
8.  **Apply Data Extraction Rules (ChainLLM):** The Markdown content of the invoice is passed to an OpenAI language model (LLM).  The LLM is instructed to extract key information like invoice date, invoice number, supplier details, customer details, line items, and total price.
9.  **Structured Output Parser:** The output from the LLM is structured into a predefined JSON format based on a provided schema, ensuring consistency and compatibility with the Google Sheets node.
10. **Map Output:** The output is mapped to a JSON format
11. **Append to Reconciliation Sheet (Google Sheets):** The extracted and structured invoice data is appended as a new row to a specified Google Sheet, creating a reconciliation record.
12. **Add "invoice synced" Label (Gmail):** Finally, a label "invoice synced" is added to the processed email in Gmail to mark it as processed and prevent duplicate extraction in future runs.

## Services:

-   **Gmail:** Used for receiving and labeling invoice emails.
-   **LlamaParse:** Used for parsing PDF invoices into a structured format.
-   **OpenAI:** Used for extracting invoice data from the parsed content.
-   **Google Sheets:** Used for storing the extracted invoice data in a spreadsheet.

## Hashtags:

#n8n #automation #invoiceprocessing #llm #googlesheets
