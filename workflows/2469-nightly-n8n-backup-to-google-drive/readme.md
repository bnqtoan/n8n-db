# Nightly n8n Workflow Backup to Google Drive with Purge

## Use cases:

-   **Automated Backup:** Regularly back up your n8n workflows to Google Drive to prevent data loss due to system failures or accidental deletions.
-   **Version Control:** Archive previous workflow versions in a dedicated "n8n_old" folder for auditing or reverting to older configurations.
-   **Automated Cleanup:** Automatically delete older backups after a specified period (e.g., 30 days) to manage storage space in your Google Drive.

## How it works:

1.  **Schedule Trigger:** The workflow starts based on a defined schedule (e.g., nightly).
2.  **Get Current Folders:** Retrieves a list of folders in your Google Drive to check for the existence of "n8n_backups" and "n8n_old" folders.
3.  **Check Folder Existence:** A Code node verifies if the "n8n_backups" and "n8n_old" folders exist.
4.  **Create Folders (If Needed):** If the folders don't exist, Google Drive nodes create the "n8n_backups" and "n8n_old" folders in your Google Drive root directory.
5.  **List Workflows:** Retrieves all n8n workflows using the n8n API.
6.  **Convert Workflows to Binary Data:** Converts each workflow's JSON data into a binary format with a filename that includes the workflow name and its active status.
7.  **Upload to Google Drive:** Uploads the binary data of each workflow as a JSON file to the "n8n_backups" folder in Google Drive.
8.  **Move Old Backups:** Moves the workflows to the "n8n_old" folder
9.  **Purge Old Backups:** If the workflow is enabled, retrieves a list of files in the "n8n_old" folder and deletes files older than 30 days.

## Services:

-   **Google Drive:** Used for storing n8n workflow backups and managing old versions.
-   **n8n API:** Interacts with the n8n instance to retrieve workflow data.

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
