# Gmail Attachments to Google Drive with Company and Date Folders

## Use cases:

-   **Automated Invoice Processing:** Automatically save invoices received via Gmail to a structured Google Drive folder system based on the sender's company and the month they were received.
-   **Document Archiving:** Archive important documents sent via email to Google Drive, organized by company and date for easy retrieval.
-   **Receipt Management:**  Automatically save receipts received via Gmail to specific folders for expense tracking.

## How it works:

1.  **Gmail Trigger:** The workflow is triggered when a new email arrives in Gmail with a specific label (Label_2).
2.  **Google Sheets Whitelist:** It checks if the sender's email address exists in a Google Sheets whitelist.
3.  **Company Folder Check:**  It searches for a folder with the company name from the Google Sheet in a specific Google Drive folder ("Invoices"). If the folder doesn't exist, it creates one.
4.  **Year/Month Folder Check:** It then checks if a folder with the current year and month (YYYY/MM) exists within the company folder. If it doesn't exist, it creates one.
5.  **Attachment Download:** It retrieves the email's attachments from Gmail.
6.  **Attachment Splitting:** The workflow splits the attachments into individual items, each containing a single file.
7.  **File Upload:**  Finally, it uploads each attachment to the YYYY/MM folder within the company folder in Google Drive. The files are named with timestamp-filename. The node uploads each attachment to the YYYY/MM folder within the company folder in Google Drive.

## Services:

-   Gmail
-   Google Sheets
-   Google Drive

## Hashtags:

\#n8n \#automation \#googleDrive \#gmail \#invoiceProcessing
