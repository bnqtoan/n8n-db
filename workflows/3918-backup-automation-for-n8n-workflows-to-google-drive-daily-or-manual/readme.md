# 💾 Backup Automation for n8n Workflows to Google Drive (Daily or Manual)

## Use cases:

*   **Automated Daily Backups:** Schedule daily backups of your n8n workflows to Google Drive to ensure you always have a recent copy in case of accidental deletion or system failures.
*   **Manual On-Demand Backups:** Trigger a workflow backup manually before making significant changes to your n8n workflows, providing a safety net in case something goes wrong.
*   **Version Control & Archiving:** Use the workflow to archive older versions of your workflows in Google Drive, allowing you to revert to previous states if needed.

## How it works:

This workflow automates the backup process of your n8n workflows to Google Drive. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow can be triggered either manually using "Start by Click" or automatically on a schedule via "Start by Date and Time".
2.  **Date & Time:** Fetches the current date and time to be used for naming the backup folder.
3.  **Folder Creation in Drive:** Creates a new folder in your Google Drive with the current date as the folder name (configured within the node, not visible in JSON).
4.  **Search All Workflows:** Retrieves all workflows currently present in your n8n instance.
5.  **Compiles Individual Data:** Processes the workflow data (purpose not fully clear from JSON).
6.  **Merge Data:** Merges the data from "Search All Workflows" and "Compiles Individual Data" nodes.
7.  **Move Binary Data:** Converts the workflow data into a binary format suitable for saving as a file.
8.  **Save to Drive:** Saves the binary data (workflow as a file) to the folder created in the "Folder Creation in Drive" step, storing the backup in Google Drive.

## Services:

*   Google Drive
*   n8n

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
