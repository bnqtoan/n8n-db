# (Tung) OCR invoice extract to spreadsheet copy

## Use cases:

- **Automated Invoice Processing:** Automatically extract data from invoices received via email, Telegram, or Google Drive and store it in a Google Sheet for accounting or record-keeping purposes.
- **Receipt Management:** Process receipts received through various channels (email, uploaded images) to track expenses and create a searchable database in Google Sheets.
- **Data Extraction from Documents:** Extract specific information from documents (invoices, receipts) stored in Google Drive and consolidate it in a structured format in a Google Sheet.

## How it works:

1.  **Trigger:** The workflow starts with one of the following triggers:
    *   **Telegram Trigger Image:** Triggered when a new image is sent to a Telegram bot.
    *   **Gmail Trigger:** Triggered when a new email arrives in a Gmail inbox.
    *   **Google Drive Trigger New Files:** Triggered when a new file is added to a specific Google Drive folder.
2.  **File Handling:**
    *   For Telegram images, a filename is created and the file is saved to Google Drive.
    *   For Gmail triggers, attachments are processed, filtered, and split into individual binary files.
    *   For Google Drive Trigger, the workflow takes all items and Loops over them
3.  **OCR and Data Extraction:** The workflow retrieves the file from Google Drive, converts the file to a base64 string. It then uses a **Gemini API** (likely for OCR) to extract the invoice data.
4.  **Data Transformation:** The extracted data is converted from JSON to a string, then parsed using a **Code** node to format it correctly.
5.  **Data Storage:** The parsed data is added to a Google Sheet using the **Add to Google Sheets** node.
6.  **Waiting & Looping** There are nodes that wait for saving and loop over items, attachments or emails before going on with the next trigger or step.
7.  **Saving and Cleaning:** The workflow saves the file to google drive.

## Services:

*   Telegram
*   Gmail
*   Google Drive
*   Google Sheets
*   Gemini API (Likely for OCR)

## Hashtags:

#n8n #automation #OCR #invoiceprocessing #googlesheets
