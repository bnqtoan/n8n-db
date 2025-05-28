# n8n Workflow: Backup n8n Workflows to Nextcloud

## Use cases:

*   **Automated Workflow Backups:** Regularly back up your n8n workflows to a Nextcloud instance, ensuring data safety and version control.
*   **Disaster Recovery:** In case of n8n instance failure or data loss, quickly restore workflows from Nextcloud backups.
*   **Version History:** Maintain a history of workflow versions in Nextcloud, allowing you to revert to previous states if needed.

## How it works:

This workflow automates the process of backing up n8n workflows to a Nextcloud instance. Here's a breakdown:

1.  **Trigger:** The workflow can be triggered either manually via the "On clicking 'execute'" node or automatically using the "Cron" node, which is set to run every 6 hours.
2.  **Get Workflow List:** The "Get Workflow List" node retrieves a list of all workflows from the n8n instance using the n8n API.
3.  **Map:** The "Map" node transforms the list of workflows into a format suitable for retrieving each workflow's detailed data, preparing the `id` parameter.
4.  **Get Workflow:** The "Get Workflow" node retrieves the data for each workflow from n8n using the n8n API, iterating over the IDs provided by the Map node.
5.  **Merge:** The "Merge" node combines the list of workflow names with the JSON data of each workflow.
6.  **FunctionItem:** Takes the combined data and sets it to the item variable
7.  **Move Binary Data:** The "Move Binary Data" node converts the workflow's JSON data into binary data, which is necessary for uploading to Nextcloud.
8.  **Nextcloud:** The "NextCloud1" node uploads the binary data (the workflow JSON) to a specified path in the Nextcloud instance. The path includes the name of the workflow.

## Services:

*   **Nextcloud:** Used for storing the workflow backups.
*   **n8n API:** Used to retrieve workflows from the n8n instance.

## Hashtags:

#n8n #automation #backup #Nextcloud #workflow
