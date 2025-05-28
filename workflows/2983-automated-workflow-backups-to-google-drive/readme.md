# ✨😃Automated Workflow Backups to Google Drive

## Use cases:

- **Automated Backup:** Regularly back up n8n workflows to Google Drive to prevent data loss due to accidental deletion or system failures.
- **Version Control:** Archive different versions of n8n workflows based on timestamped folders, enabling you to revert to previous states if needed.
- **Disaster Recovery:** Ensure business continuity by maintaining an offsite backup of critical n8n workflows in Google Drive.

## How it works:

1.  **Trigger:** The workflow starts either manually or on a daily schedule using the "On clicking 'execute'" or "Every Day" trigger node.
2.  **Timestamped Folder Creation:** A new folder is created in Google Drive with a timestamp using the "Get DateTIme" and "Create Folder with DateTime Stamp" nodes. The folder name follows the format `n8n-Workflow-Backups-YYYY-MM-DD`.
3.  **Workflow Retrieval:** The "Get Workflows" node fetches all workflows from the n8n instance.
4.  **Limiting the Records:** The "Limit to 200" node limits the number of records to 200 for debugging purposes.
5.  **Workflow Conversion and Saving:** The "Loop Over Items" node iterates through each workflow. The "Convert Workflow to JSON File" node converts each workflow to a JSON file, and the "Save JSON File to Google Drive Folder" node saves the file into the timestamped folder.
6.  **Backup Management:** The workflow searches for existing backup folders using the "Search Folder Names" node. A "Find Folders to Delete" node then determines which folders are older than seven days using a JavaScript code. These folders are then deleted using the "Delete Folders" node.
7.  **Notification:** Finally, a Telegram message is sent using the "Complete Message" node, notifying the user that the backup is complete, with a link to the created folder in Google Drive.

## Services:

-   Google Drive
-   Telegram
-   n8n API

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
