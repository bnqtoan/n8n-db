# OCR receipts from Google Drive

## Use cases:
- Automatically extract data from receipts and invoices stored in a Google Drive folder, such as vendor name, total amount, and line items.
- Create a searchable archive of financial documents in Google Sheets.
- Monitor a Google Drive folder for new receipts or invoices and process them in real-time, eliminating manual data entry.

## How it works:
1.  The workflow is triggered either manually by clicking the "Test workflow" button or automatically when a new file is added to a specified Google Drive folder.
2.  It retrieves a list of files from the designated Google Drive folder using the "Load files from Google Drive folder" node.
3.  The workflow checks a Google Sheet to see which files have already been processed, avoiding duplicates, using the "Get already processed rows from Sheets" node and the "Filter processed files" node.
4.  For each new file, the workflow downloads it from Google Drive using the "Download file for OCR" node.
5.  The file is then sent to the OakPDF OCR API using the "OCR recognize" node, which uses an HTTP request to extract data from the receipt or invoice. You need to setup the RapidAPI key for this node to function properly.
6.  The "Unserialize response JSON" node parses the JSON response from the OCR API.
7.  Finally, the extracted data, including the document ID, filename, vendor information, total amount, and line items, is appended to a Google Sheet using the "Save OCR result into Sheets" node.

## Services:
- Google Drive
- Google Sheets
- OakPDF OCR API (via RapidAPI)

## Hashtags:
#n8n #OCR #GoogleDrive #GoogleSheets #Automation
