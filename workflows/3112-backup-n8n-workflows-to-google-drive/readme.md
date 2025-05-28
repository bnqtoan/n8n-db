# n8n Workflow Backup to Google Drive

## Use cases:

- **Automated Workflow Backup:** Schedule daily or weekly backups of your n8n workflows to Google Drive to prevent data loss.
- **Version Control:** Maintain a history of your workflow configurations by backing them up to Google Drive, allowing you to revert to previous versions if needed.
- **Disaster Recovery:** Ensure business continuity by having a readily available backup of your n8n workflows in case of system failures or accidental deletions.

## How it works:

1.  **Schedule Trigger:** The workflow starts automatically at a specified time (1:30 AM) using the "Schedule Trigger" node.
2.  **Parameters**: The directory name is set using "Parameters" node.
3.  **Get all n8n Workflows:** Fetches all n8n workflows using the "Get all n8n Workflows" node and your n8n API credentials.
4.  **Code:** Converts each workflow's JSON data into a base64 encoded string with proper filename.
5.  **Backup to Google Drive:** Uploads each workflow as a `.json` file to a specified folder in Google Drive using the "Backup to Google Drive" node. The filename is dynamic and based on the n8n workflow name. The Google Drive folder is specified as a parameter at the beginning of the workflow.

## Services:

-   n8n API
-   Google Drive API

## Hashtags:

#n8n #automation #backup #googleDrive #workflow
