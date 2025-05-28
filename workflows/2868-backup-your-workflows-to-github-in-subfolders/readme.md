# My Workflow

## Use cases

- **Automated Workflow Backup:** Regularly back up all your n8n workflows to a GitHub repository, ensuring version control and disaster recovery.
- **Workflow Change Tracking:** Monitor changes to your n8n workflows by comparing the current version with the version stored in GitHub, highlighting any differences.
- **Centralized Workflow Management:** Store and manage all your n8n workflows in a single GitHub repository, making it easier to share, collaborate, and maintain them.

## How it works

This workflow automates the process of backing up n8n workflows to a GitHub repository. Here's a breakdown:

1.  **Trigger:** The workflow can be initiated manually via "On clicking 'execute'" or automatically using a "Schedule Trigger".
2.  **Fetch Workflows:** It retrieves all workflows from the n8n instance using the n8n API node.
3.  **Loop Through Workflows:** It iterates through each workflow using "Loop Over Items."
4.  **Get Workflow Data and tags for dynamic folder creation:** It retrieves the workflow tags in case there are any and generate the appropriate folder name.
5.  **Get Existing File (if any):** It attempts to retrieve the corresponding workflow file from the GitHub repository, if one exists, by calling the github node.
6.  **Check File Size:** It checks if file retrieved with content and there is no error.
7.  **Determine Difference:** If the file exists in GitHub, the workflow compares the current workflow version with the one retrieved from GitHub.  It checks for differences in a Code node called "isDiffOrNew".
8.  **Conditional Action:** Based on whether the workflow is new, the same, or different:
    *   **Same:** No action is taken.
    *   **Different:** The existing file in GitHub is updated with the current workflow version.
    *   **New:** A new file is created in the GitHub repository with the current workflow version.
9.  **GitHub Interaction:** It uses the GitHub node to either create a new file or edit an existing one. The workflow name and its status (new, different, or same) are added to the commit message.
10. **Return:** Return "Done" boolean after the process end.
## Services

-   **n8n API:** Used to retrieve workflows from the n8n instance.
-   **GitHub API:** Used to interact with a GitHub repository, including retrieving, creating, and updating files.

## Hashtags

#n8n #automation #GitHub #backup #versioncontrol
