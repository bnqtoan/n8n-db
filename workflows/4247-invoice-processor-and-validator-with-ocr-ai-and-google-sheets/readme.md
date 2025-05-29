# Invoice Data Extraction and Validation Workflow

## Use Cases:

- **Automated Invoice Processing:** Automatically extract data from invoice PDFs received from vendors, eliminating manual data entry.
- **Data Validation:** Validate extracted invoice data against a master data sheet to identify discrepancies in pricing or ASINs (Amazon Standard Identification Numbers).
- **Financial Reconciliation:** Streamline financial reconciliation processes by automatically identifying and flagging potential invoice errors.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking 'Test workflow'" node.
2.  **Read Invoice:** Reads a PDF invoice from a specified local file path using the "Read/Write Files from Disk" node.
3.  **Extract Text:** Extracts text from the PDF invoice using the "Extract from File" node (PDF extraction mode).
4.  **AI-Powered Data Extraction:** The "Text Extractor" node utilizes an OpenRouter Chat Model to extract structured data from the invoice text, including invoice number, vendor name, date, PO details, total amount, tax details, and line items (serial number, code, description, last character, quantity, unit price, line total, HSN code, CGST, and SGST).  It uses a detailed prompt engineering to ensure data is extracted in JSON format.
5.  **JSON Post-Processing:**  The "Post-Processing" node uses code to clean and parse the JSON output from the AI model, removing backticks and other unwanted characters.
6.  **Error Handling:** The "If" node checks for JSON parsing errors. If errors are found it re-sends the raw text to "Text Extractor" node
7.  **Split Line Items:** The "Split Out" node splits the extracted line items into individual items for processing.
8.  **Generate Unique Key:** The "Generate Unique Key" node creates a unique key for each line item based on the invoice number and item index.
9.  **Google Sheets Integration (Append):** Appends extracted invoice data to a Google Sheet using the "Send Invoice Data" node.
10. **Fetch Master Data:** Retrieves master data from a separate Google Sheet using the "Fetch Master Data" node.
11. **Data Validation:**  The "Validation" node compares the extracted invoice data with the master data, identifying discrepancies in ASINs and unit prices. It calculates a Levenshtein distance to match SKUs against values in a master Google sheet.
12. **Google Sheets Integration (Update):** Updates the initial Google Sheet with validation results, including mismatch notes, price differences, and total loss/gain calculations, using the "Update Results" node.

## Services:

-   **OpenRouter API:** Used to access the deepseek-chat-v3-0324 chat model for extracting invoice data.
-   **Google Sheets:** Used for storing and retrieving invoice data and master data.

## Hashtags:

#n8n #automation #invoiceprocessing #datavalidation #googlesheets
