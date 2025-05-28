# N8N Workflow Backup to GitHub

## Use cases:

*   **Automated Workflow Backup:** Automatically backs up all n8n workflows to a specified GitHub repository, ensuring a secure and version-controlled storage of your automation designs.
*   **Version Control for Collaboration:** Enables teams to collaborate on n8n workflows with version control, tracking changes, and reverting to previous versions if needed.
*   **Disaster Recovery:** Provides a reliable backup solution for n8n workflows, allowing for quick restoration in case of system failures or accidental deletions.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via "On clicking 'execute'" or automatically at a scheduled time (8:11 PM daily) using the "Daily @ 20:00" Cron node.
2.  **Fetch Workflows:** Retrieves a list of all n8n workflows from the n8n instance using the "N8N Workflows" HTTP Request node, hitting the `/rest/workflows` endpoint.
3.  **Prepare Workflow Data:** The "dataArray" Function node extracts individual workflow data from the API response.
4.  **Process One at a Time:** The "OneAtATime" Split In Batches node processes each workflow individually to avoid rate limiting and ensure proper handling.
5.  **Fetch Existing Workflow from GitHub:** The "GitHub" node attempts to retrieve the corresponding workflow file from the specified GitHub repository. If the file doesn't exist, the node continues on fail.
6.  **Get N8N Workflow Details:** Get the detail of the workflow by id using the "N8N Workflow Detail" node
7.  **Merge Data:** The "Merge" node combines the data from the GitHub node (if the file exists) and the n8n workflow API.
8.  **Compare and Determine Status:** The "isDiffOrNew" Function node compares the workflow data from n8n with the data retrieved from GitHub. It determines if the workflow is "same", "different", or "new" (not existing in GitHub).
9.  **Update GitHub (if needed):**
    *   If the workflow is "same", nothing happens.
    *   If the workflow is "different", the "GitHub Edit" node updates the existing workflow file in the GitHub repository with the latest version.
    *   If the workflow is "new", the "GitHub Create" node creates a new workflow file in the GitHub repository.
10. **Globals:** The "Globals" node defines global variables like the GitHub repository owner, name, and path.
11. **Switch:** Based on the `github_status` value the workflow continues differently with a switch node.

## Services:

*   GitHub API
*   n8n API

## Hashtags:

#n8n #automation #workflow #backup #github #versioncontrol
