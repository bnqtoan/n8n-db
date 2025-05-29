# Automated Workflow Backup System with Google Drive and Archiving

## Use Cases:

- **Regularly backup n8n workflows to Google Drive:** This ensures that if your n8n instance fails or you accidentally delete a workflow, you have a recent backup to restore from.
- **Archive older workflows:** Workflows tagged as "ARCHIVE" can be separated from active workflows and stored in a designated archive folder, keeping your main n8n workspace clean.
- **Automated Disaster Recovery:** In case of a system failure or data loss, the backed-up workflows on Google Drive can be easily imported into a new n8n instance.

## How it Works:

1.  **Schedule Trigger:** The workflow starts automatically based on a defined schedule (e.g., daily, weekly).
2.  **Create to date folder:** Create a folder named with current date.
3.  **GET Workflows:** Retrieves all workflows from the n8n instance using the n8n node.
4.  **If:** Checks if a workflow is labeled or contains the word "ARCHIVE". This determines whether the workflow should be archived or treated as a regular workflow.
5.  **Convert to JSON:** Converts the workflow data to JSON format for easy storage and retrieval. There are two convert to JSON to, one for ARCHIVE workflows and another for the rest
6.  **Save 'ARCHIVE' Workflows/Save all other Workflows:** Saves the JSON representation of the workflows to Google Drive in different folders, based on the "ARCHIVE" tag.
7.  **Delete 'ARCHIVE' Workflows:** Delete all workflows tagged as archive.

## Services:

-   **n8n:** Used to retrieve workflow data and delete workflows from n8n
-   **Google Drive:** Used for storing the workflow backups.

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
