# Workflow: Google Sheets to Dropbox via XLS Conversion

This n8n workflow automates the process of exporting data from a Google Sheet, converting it to an XLS file, and uploading it to a Dropbox folder.

## Use cases:

*   **Regular Data Backup:** Automatically backs up Google Sheet data to Dropbox at regular intervals (e.g., every 15 minutes).
*   **Data Archiving:** Creates historical archives of Google Sheets in a more portable file format (XLS) on Dropbox.
*   **Cross-Platform Compatibility:** Makes Google Sheets data accessible to applications or systems that require XLS files and are connected to Dropbox.

## How it works:

1.  **Trigger (Trigger all 15 min):** The workflow starts every 15 minutes.
2.  **Read Sheet (Read Sheet):** Retrieves data from a specified Google Sheet using the Google Sheets API. The `sheetId` parameter determines which sheet is accessed.
3.  **Convert to XLS (Convert to XLS):** Converts the data retrieved from Google Sheets into an XLS (Microsoft Excel) file format.
4.  **Upload Dropbox (Upload Dropbox):** Uploads the generated XLS file to a specified folder in Dropbox. The `path` parameter defines the destination folder and filename, and `binaryData` ensures the file is transferred correctly.

## Services:

*   **Google Sheets:** Used to read data from a specified spreadsheet.
*   **Dropbox:** Used to store the converted XLS file.

## Hashtags:

#n8n #automation #googleSheets #dropbox #dataBackup
