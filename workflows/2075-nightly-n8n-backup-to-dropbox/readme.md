# n8n Workflow Backup and Purge

## Use cases:

- **Automated Workflow Backup:** Regularly back up all your n8n workflows to a Dropbox folder, ensuring you have a copy of your configurations in case of accidental deletion or system failure.
- **Archiving Old Backups:** Automatically move existing backups to an "old" folder to keep the main backup directory clean and organized.  The backups are timestamped with the date they were moved.
- **Purging Old Backups:** Periodically delete backups older than a specified number of days (e.g., 30 days) to manage storage space in your Dropbox account and comply with data retention policies.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule (e.g., daily, weekly) using the "Schedule Trigger" node.
2.  **Destination Folder:** Defines the Dropbox folder path where the backups will be stored using a "Set" node.
3.  **Current Backups Archiving:**
    *   **Get Current Date**: Get the current date, to stamp the archived workflows.
    *   **Get Current Backups:** Retrieves a list of current backups from the backup directory.
    *   **Ignore Folders:** Filters out any folders from the list (only files are processed).
    *   **Move into Old Folder:** Moves files to an `/old` subfolder in the destination folder.
4.  **Workflow Backup:**
    *   **Get Workflows:** Retrieves all workflows from your n8n instance using the "n8n" node.
    *   **Make JSON Files:** Converts each workflow into a JSON file.
    *   **Upload Workflows:** Uploads the JSON files to the Dropbox destination folder, naming them after the workflow name.
    *   **Wait for Move to Finish:** Waits for all workflows to be moved.
5.  **Old Backup Purging:**
    *   **Purge Days:** Calculates a date 30 days in the past from the current date.
    *   **List Old Backups:** Retrieves a list of files in the "old" backup folder in Dropbox.
    *   **Check Dates:** Compares the last modified date of each file with the calculated purge date.
    *   **Delete Old Backups:** Deletes files older than the purge date from the Dropbox "old" folder.

## Services:

-   **n8n:** Interacts with the n8n API to retrieve workflow definitions.
-   **Dropbox:** Stores and manages workflow backups, including moving files to an archive folder and deleting old backups.

## Hashtags:

#n8n #automation #workflow #backup #dropbox
