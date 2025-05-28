# Attachments Gmail to drive and google sheets

## Use cases:

- **Automated Invoice Processing:** Automatically save invoice attachments from Gmail to Google Drive, extract relevant data (date, description, total price), and append this information to a Google Sheets reconciliation sheet.
- **Document Archiving:**  Efficiently archive important documents received via email by automatically saving them to a structured folder system in Google Drive.
- **Data Extraction for Reporting:**  Extract key data points from attachments (specifically PDFs) for reporting and analysis purposes, populating a Google Sheet for easy access and manipulation.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a Gmail Trigger node, which monitors a specified Gmail inbox for new unread emails with attachments.
2.  **Check if has attachment:** Check if the mail have attachments or not and if the `content-type` contains `multipart/mixed`.
3.  **Setup:** The workflow configures the URL of the google drive folder where files will be uploaded.
4.  **Upload PDF to Drive:** The PDF attachment is uploaded to a specified Google Drive folder.
5.  **Rename File:** The uploaded file in Google Drive is renamed using the email's subject and the current date, following a predefined naming convention.
6.  **Move to the correct folder:** The workflow moves the renamed file to a specific folder within Google Drive.
7.  **Download from Drive:** The workflow downloads the file from Google Drive to extract the text from the file.
8.  **Extract from File:** This node extracts text from a PDF.
9.  **Apply Data Extraction Rules:** Uses LLMs to extract the invoice data that comes inside `<invoice>` tags to extract the following information.
10. **Map Output:** A Set node maps the extracted data into a format suitable for appending to the Google Sheet.
11. **Append to Reconciliation Sheet:** Finally, the extracted invoice data (date, description, total price, and file link) is appended as a new row to a specified Google Sheet.
12. **Mark as Read:** The original email in Gmail is marked as read to avoid reprocessing.

## Services:

*   Gmail
*   Google Drive
*   Google Sheets
*   OpenAI

## Hashtags:

#n8n #automation #gmail #googledrive #googlesheets #invoiceprocessing
