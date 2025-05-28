# Smartbill Invoice Downloader to Google Drive

## Use Cases:

1.  **Automatic Invoice Archiving:** Automatically downloads PDF invoices from Smartbill and saves them to a designated folder in Google Drive for organized record-keeping.
2.  **Invoice Backup and Versioning:** Creates a backup of invoices in Google Drive, providing a secure and easily accessible repository with versioning capabilities.
3.  **Streamlined Accounting Workflow:** Integrates invoice retrieval from Smartbill into a broader accounting workflow, allowing for further processing or sharing of invoices.

## How it Works:

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "When clicking Execute Workflow" node.
2.  **Set Data:** (Presumably) sets some initial data needed for the workflow, though its specific function isn't clear without its configuration.
3.  **Set Default Folder Name:** Defines the name of the folder in Google Drive where invoices will be stored.
4.  **Search Drive Folder:** Searches Google Drive for a folder with the name defined in the previous step.
5.  **If exists:** Checks if the folder was found in Google Drive.
    *   **If the folder exists:** The workflow proceeds to the "Set Folder ID" node to use existing folder.
    *   **If the folder does not exist:** The workflow proceeds to "Create Drive Folder" to create a new folder.
6.  **Create Drive Folder:** Creates a new folder in Google Drive with the name defined earlier.
7.  **Set Folder ID:** Saves the ID of the Google Drive folder (either found or newly created) for later use.
8.  **Set the loop:** (Presumably) prepares data for looping invoices, though its specific function isn't clear without its configuration.
9.  **Loop Over Items:** Splits a list of items into individual items to be processed one by one in the loop. The list source is not specified here.
10. **Smartbill get invoice pdf:** Retrieves a PDF invoice from Smartbill. The specific invoice is likely determined by data from the "Loop Over Items" node.
11. **Set mime:** Sets the MIME type of the file (likely to `application/pdf`) for correct handling by Google Drive.
12. **Upload file to Google Drive:** Uploads the downloaded PDF invoice to the specified Google Drive folder.
13. **Wait a sec:** Pauses the workflow for a short period (presumably to avoid rate limits or ensure successful uploads).
14. **Loop Over Items:** Continue the workflow with the next item from split node

## Services:

*   Smartbill
*   Google Drive

## Hashtags:

#n8n #automation #smartbill #googleDrive #invoiceAutomation
