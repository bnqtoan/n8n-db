# Typhoon_Submit

## Use cases:

- **Automated Data Extraction from Government Documents:** Automatically extract key information (book ID, date, subject, etc.) from scanned Thai government documents and store them in a Google Sheet for easy access and analysis.
- **Invoice Processing Automation:** Extract data from Thai invoices (if the format is consistent) such as invoice number, date, total amount, and vendor details to automate bookkeeping tasks.
- **Legal Document Summarization and Archiving:** Process legal documents in Thai, extract key information, and store it in a structured format for easier search and retrieval.

## How it works:

1. **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2. **Load PDFs:** The "Load PDFs from doc Folder" node reads PDF files from the "doc/" directory.
3. **Extract Text with Typhoon OCR:** The "Extract Text with Typhoon OCR" node uses a Python script and the `typhoon_ocr` library to perform OCR on the PDF documents.  It extracts the text content from the image. **Important:** The user must provide their own Typhoon OCR API key in this node by replacing `<YourTyphoonKey>`.
4. **Structure Text to JSON with LLM:** The "Structure Text to JSON with LLM" node uses a Large Language Model (LLM) via Langchain to analyze the OCR output and extract key fields (book_id, date, subject, etc.) based on the provided instructions and format the information into a JSON structure. It uses a prompt specifically designed for Thai government documents.
5. **Parse JSON to Sheet Format:** The "Parse JSON to Sheet Format" node uses a JavaScript code block to clean and parse the JSON received from the LLM. It handles potential formatting issues (e.g., ` ```json`) and converts the data into a format suitable for Google Sheets. It also handles the case where the contact information is an object, extracting phone, email, and fax numbers.
6. **Save to Google Sheet:** The "Save to Google Sheet" node appends the extracted data to a specified Google Sheet, mapping the extracted fields to the corresponding columns.

## Services:

- **Typhoon OCR:** An OCR service (requires an API key).
- **OpenRouter:** A service providing access to various LLMs (requires an API key).
- **Google Sheets:** A spreadsheet program for storing the extracted data.

## Hashtags:

#n8n #automation #OCR #LLM #GoogleSheets
