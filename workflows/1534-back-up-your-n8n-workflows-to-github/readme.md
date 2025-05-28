# n8n Workflows Backup to GitHub

## Use cases

- **Automated Workflow Backup:** Regularly back up your n8n workflows to a GitHub repository, ensuring you have a version-controlled history of your automation configurations.
- **Disaster Recovery:** In case of data loss or system failure in your n8n instance, easily restore your workflows from the GitHub repository.
- **Collaboration and Versioning:** Enable collaboration by storing workflows in a central repository. Track changes, revert to previous versions, and manage updates effectively.

## How it works

This workflow automates the process of backing up your n8n workflows to a GitHub repository. Here's a breakdown:

1.  **Trigger:** The workflow can be triggered manually ("On clicking 'execute'") or scheduled to run daily ("Schedule Trigger").
2.  **Fetch Workflows:** Retrieves all workflows from your n8n instance using the n8n API.
3.  **Looping:** Iterates through each workflow using "Loop Over Items".
4.  **Subworkflow Execution:** Calls itself using the "Execute Workflow" to process each workflow individually, reducing memory usage. The `Execute Workflow Trigger` initializes the subworkflow.
5.  **Configuration:** Gathers repository details (owner, name, path) from the "Config" node, which relies on n8n variables for settings like `repo_owner`, `repo_name`, and `repo_path`.
6.  **File Retrieval:** Attempts to get the existing workflow file from GitHub, checking if it exists based on the workflow ID.
7.  **File Size Check:** Checks if the workflow file content is empty to determine if the file download was successful.
8.  **Content Comparison:** Compares the retrieved workflow with the current version. Determines if the workflow has been modified, is new, or is identical to the version in GitHub.  It uses custom JavaScript code ("isDiffOrNew" node) to compare the content.
9.  **GitHub Interaction:**
    *   If the file is new, it creates a new file in the specified GitHub repository using the "Create new file" node.
    *   If the file has been changed, it edits the existing file in the repository using the "Edit existing file" node.
    *   If the file is the same, it does nothing ("Same file - Do nothing").
10. **Notifications:** Sends Slack notifications for workflow start, completion, and failures.

## Services

-   n8n API
-   GitHub API
-   Slack API

## Hashtags

#n8n #automation #workflow #backup #github #versioncontrol