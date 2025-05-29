# n8n Workflow Backup to Google Drive

## Use cases:

- **Automated Backup:** Regularly back up all your n8n workflows to Google Drive, ensuring you have a safe copy in case of system failures or accidental deletions.
- **Version Control:** Archive different versions of your workflows over time, allowing you to revert to previous states if needed.
- **Disaster Recovery:** Quickly restore your n8n workflows from Google Drive to a new n8n instance in case of a server crash or migration.

## How it works:

This workflow automates the process of backing up your n8n workflows to Google Drive. Here's a step-by-step breakdown:

1.  **Schedule Trigger:** The workflow starts automatically at a specified time (1:30 AM) using the `Schedule Trigger` node.
2.  **Get all n8n Workflows:** The `Get all n8n Workflows` node retrieves all workflows from your n8n instance using the n8n API.
3.  **Loop Over Items:** The `Loop Over Items` node iterates through each workflow received from the previous step.
4.  **Limit:** limits the workflow to one run, so the success email is only sent once
5.  **Workflow Data:** When the workflow is triggered by another workflow, it will obtain the workfow data
6.  **Parameters:** Get Google Drive folder id
7.  **Get Drive file Data:** Get Google Drive existing file info.
8.  **ifDriveEmpty:** Only for initialing
9.  **CodeJsonToFile1 & firstWorkflowJson:** convert the workfow data to json type
10. **Execute Workflow:** Executes a specified n8n workflow.
11. **JsonToFile:** The `Code` node converts the JSON data of each workflow into a binary file.
12. **Backup to Google Drive2/4:** The `Google Drive` node saves (or updates if existing) the workflow as a JSON file in the specified Google Drive folder. If its a first time backup, new workflows will be uploaded. If not, existing workflows will be updated.
13. **Success/failure Email:** Sends an email via Gmail to notify the user about the successful/unsuccessful backup of each workflow.
14. **Discord:** Sends a discord message to notify the user about the successful backup of each workflow.

## Services:

-   n8n API
-   Google Drive
-   Gmail
-   Discord

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
