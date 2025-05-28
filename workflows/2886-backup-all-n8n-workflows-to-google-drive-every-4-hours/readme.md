# My Workflow

## Use cases:

*   **Automated Workflow Backups:** Regularly backs up n8n workflows to a specified Google Drive folder, ensuring data safety and version control.
*   **Scheduled Backups:**  Creates backups automatically on a schedule (e.g., every 4 hours) without manual intervention.
*   **Folder Management:** Deletes empty folders in Google Drive

## How it works:

1.  **Trigger:** The workflow starts either manually via "On clicking 'execute'" or on a schedule using "Schedule Trigger" (every 4 hours).
2.  **Create New Folder:** Creates a new folder in Google Drive named "Workflow Backups" with the current date.
3.  **Get n8n Workflows:** Fetches all workflows from the n8n instance using the "n8n" node.
4.  **Loop Over Workflows:** Iterates through each workflow received from n8n.
5.  **Get Folders:** Get all folders inside "Workflow Backups" folder.
6.  **Filter:** Filters for folders that are not the new created folder.
7.  **Delete Folder:** Delete the old folders.
8.  **Convert to File:** Converts each workflow (JSON data) to a file. The filename is set to the workflow's name with a ".json" extension.
9.  **Upload to Google Drive:** Uploads the converted JSON file to the newly created Google Drive folder.

## Services:

*   n8n API
*   Google Drive

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
