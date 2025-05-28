# Backup workflows to git repository on Gitea

## Use cases:

- **Automated Workflow Backup:** Regularly back up n8n workflows to a Gitea repository for safekeeping and version control. This prevents data loss in case of system failures or accidental deletions.
- **Version Control for Collaboration:** Implement version control for n8n workflows, allowing multiple users to collaborate, track changes, and revert to previous versions if needed. This is particularly useful for teams working on complex automations.
- **Disaster Recovery:** Ensure business continuity by having a readily available backup of all n8n workflows in a separate Gitea repository. This allows for quick restoration of critical automations in case of a disaster.

## How it works:

The workflow is triggered by a `Schedule Trigger` node, which runs every 45 minutes.

1.  **Fetch workflows**: A `n8n` node retrieves all n8n workflows using the n8n API.
2.  **Store repo variables**: A `Globals` node store variables that are used within the different nodes
3.  **Iterate workflows**: A `ForEach` node iterates through each workflow retrieved from n8n.
4.  **Check if workflow exists**: The `GetGitea` node checks if the workflow already exists in the Gitea repository by making an HTTP request. If the file does not exist, the `Exist` node handles the response, routing the workflow to be created.
5.  **Base64 Encoding**: The nodes `Base64EncodeUpdate` and `Base64EncodeCreate` encode the workflow data into Base64 format.
6.  **Update the workflow**: If the workflow exists, the `Changed` node checks if the workflow has been updated. If there has been a change, then it uses the `PutGitea` node to update the workflow in the Gitea repository via an HTTP PUT request.
7.  **Create the workflow**: If the workflow does not exist, the `PostGitea` node creates a new file in the Gitea repository via an HTTP POST request.
8.  **Sticky Notes**: The workflow includes `Sticky Note` nodes to provide helpful descriptions of what each step is doing.

## Services:

-   **Gitea:** A self-hosted Git service used as the backup repository.
-   **n8n API:** Used to retrieve workflow definitions from n8n.

## Hashtags:

#n8n #automation #workflow #git #backup
