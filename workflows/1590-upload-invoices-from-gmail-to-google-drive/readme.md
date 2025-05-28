# Orlen Invoice Automation

## Use cases:

- **Automatic Invoice Archiving:** Automatically downloads and saves Orlen invoices from Gmail to a specific Google Drive folder structure based on year and month.
- **Paperless Accounting:** Eliminates the need to manually download and organize Orlen invoices, streamlining accounting processes.
- **Notification on Invoice Processing:** Receive Slack notifications whenever a new Orlen invoice is processed and archived.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("On clicking 'execute'") or automatically every day at 23:45 ("Every 23:45").
2.  **Current Date:**  The "Current date" node determines the current year and month.
3.  **Find Year and Month Folders:** "Get Year folder" and "Get Month folder" nodes search for Google Drive folders corresponding to the current year and month. It uses the current year and month values to search folders in Google Drive.
4.  **Fetch Orlen Invoices:** "Orlen Invoice" node retrieves all unread emails from `orlenpay@orlen.pl` with attachments from Gmail.
5.  **Upload to Google Drive:** "Upload Invoice to Google Drive" node uploads the invoice attachment to the corresponding year/month folder in Google Drive, naming it "Orlen [Invoice Number].[File Extension]".
6.  **Mark as Read:** The "Mark as Read" node marks the processed email as read in Gmail.
7.  **Slack Notification:** The "Slack" node sends a notification to a specified Slack channel, informing users about the newly added invoice, including the invoice number and the folder it was saved to.
8.  **Merge**: The "Merge" node combines the data from "Get Month folder" and "Orlen Invoice" nodes to prepare data for the next nodes.

## Services:

-   Gmail
-   Google Drive
-   Slack

## Hashtags:

#n8n #automation #invoice #googleDrive #gmail #slack
