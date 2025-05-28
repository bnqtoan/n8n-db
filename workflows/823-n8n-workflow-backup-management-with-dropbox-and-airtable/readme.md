# Workflow management

## Use cases

- **Workflow Backup and Archival:** Automatically backs up n8n workflows to Dropbox, creating a historical record of workflow configurations.
- **Workflow Auditing and Tracking:**  Logs key workflow metadata (ID, name, creation/update timestamps, active status, and node types used) into Airtable for auditing and analysis.
- **Centralized Workflow Documentation:**  Provides a central repository (Airtable) with a summary of all n8n workflows, including links to their JSON definitions stored in Dropbox.

## How it works

1.  **Trigger:** The workflow starts either manually ("On clicking 'execute'") or on a schedule ("Cron" node).
2.  **Get All Workflows:** Fetches a list of all workflows from the n8n instance using an HTTP Request node, querying the `/rest/workflows` endpoint.
3.  **Process Workflow List:** A "Function" node iterates through the list of workflows obtained and prepares each workflow's data for further processing.
4.  **Split into Batches:**  The "SplitInBatches" node processes each workflow individually.
5.  **Get Workflow Details:** For each workflow, retrieves detailed information from the n8n instance using an HTTP Request to `/rest/workflows/{workflowId}`.
6.  **Workflow Backup:** The workflow's JSON data is saved to Dropbox.  The "Move Binary Data" node converts the JSON data to binary format, and the "Dropbox" node uploads the file to a specified path.
7.  **Get Dropbox Link:** A temporary link to the file saved in Dropbox is generated using the Dropbox API.
8.  **Check if Airtable Record Exists:** The workflow checks if a record already exists in Airtable for the current workflow, based on the workflow ID.
9.  **Prepare Data:** Two "Function" nodes ("Prepare data", "Prepare data1") extract relevant information from the workflow details and prepares it to be saved to Airtable, including extracting data about CRON jobs and trigger nodes.
10. **Update or Append Airtable Record:**  Depending on whether the record exists in Airtable, the workflow either updates the existing record ("Airtable1") or appends a new record ("Airtable2").  The information saved includes workflow ID, name, creation/update timestamps, active status, node types used, CRON details (if applicable), and a link to the backup file in Dropbox.
11. **Conditional End:** The "IF" node checks if all workflows have been processed.  If so, the workflow ends.

## Services

-   **n8n API:** Interacts with the n8n REST API to retrieve workflow details and workflow lists.
-   **Airtable:** Stores workflow metadata, creating a centralized log.
-   **Dropbox:** Stores workflow JSON files as backups.

## Hashtags

#n8n #automation #workflowmanagement #backup #Airtable #Dropbox
