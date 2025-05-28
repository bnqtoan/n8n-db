# My Workflow

## Use cases:

*   **Backup n8n Workflows to Google Drive:** This workflow can be used to automatically create a backup of all your n8n workflows and store them as JSON files in a specified Google Drive folder. This protects against data loss and allows for easy restoration of workflows.
*   **Scheduled Workflow Archiving:** You can schedule the workflow to run daily and archive the current state of your n8n workflows. This is useful for version control and auditing purposes.
*   **Workflow Migration:** Export all workflows to Google Drive, enabling you to migrate n8n configurations between instances (e.g., from a development to a production environment).

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("On clicking 'execute'") or daily at 2:30 am ("Run Daily at 2:30am").
2.  **Get Workflow List:** It fetches a list of all workflows from your n8n instance using the "Get Workflow List" node, which sends an HTTP request to the n8n API. You will need to setup your credentials for your n8n instance (most likely using Basic Auth).
3.  **Map Workflow IDs:** The "Map" node extracts the `id` from each workflow entry in the list.
4.  **Get Workflow Details:** For each workflow ID, the "Get Workflow" node fetches the detailed workflow data from the n8n API using another HTTP request and your n8n credentials.
5.  **Merge Workflow Data:** The "Merge" node combines the workflow ID with the detailed workflow data.
6.  **Process data:** The "FunctionItem" node structures the item.
7.  **Convert to Binary Data:** The "Move Binary Data" node converts the JSON workflow data into binary data.
8.  **Upload to Google Drive:** Finally, the "Google Drive" node uploads the workflow data as a JSON file to a specified folder in Google Drive. You must configure your Google Drive credentials and provide the correct folder ID. The filename is dynamically set to the name of the workflow.

## Services:

*   n8n API (self)
*   Google Drive

## Hashtags:

#n8n #automation #workflow #backup #googleDrive
