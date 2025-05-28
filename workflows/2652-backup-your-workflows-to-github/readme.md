# Backup n8n Workflows to GitHub

## Use cases:

- **Automated Backup:** Regularly back up your n8n workflows to a GitHub repository to prevent data loss due to accidental deletion or system failures.
- **Version Control:** Track changes to your n8n workflows over time, allowing you to revert to previous versions if needed.
- **Collaboration:** Share and collaborate on n8n workflows with others by storing them in a central GitHub repository.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via "On clicking 'execute'" or on a schedule defined in the "Schedule Trigger" node (default every 2 hours).
2.  **Get Workflows:** The "n8n" node fetches all workflows from your n8n instance.
3.  **Loop Through Workflows:** The "Loop Over Items" node iterates over each workflow. For each workflow it calls itself.
4.  **Prepare workflow:** The Execute Workflow Trigger is used as starting point of the subworkflow and passes the data to the Global node.
5.  **Global Config:** The "Globals" node sets global variables like the GitHub repository owner, name, and path (folder).  **Important:** You **must** configure the "Globals" node with your GitHub repository details for the workflow to function correctly.
6.  **Check if File Exists:** Uses the "Get file data" node, the workflow checks if a file exists in the configured GitHub repository corresponding to the current workflow. This node handles errors gracefully, and the workflow continues even if the file doesn't exist (new workflow).
7.  **File Size Check:**  The "If file too large" node checks if the GitHub "Get file data" node returned a content.
8.  **Merge data:** If the file exists in the repo, the file is merged to the workflow
9.  **Compare Workflows:** The "isDiffOrNew" Code node compares the original workflow in GitHub and the current workflow and sets the `github_status` to `same`, `different`, or `new`.
10. **Conditional Actions:** The "Check Status" node routes the workflow based on the `github_status`:
    -   **same:**  "Same file - Do nothing" node reached.
    -   **different:** The "Edit existing file" node updates the existing file in the GitHub repository.
    -   **new:** The "Create new file" node creates a new file in the GitHub repository.
11. **GitHub interaction:** The "Edit existing file" and "Create new file" nodes interact with GitHub to update the file in the correct repo.
12. **Return:** The "Return" node is reached and stops the workflow.

## Services:

-   n8n API
-   GitHub API

## Hashtags:

#n8n #automation #GitHub #backup #versioncontrol
