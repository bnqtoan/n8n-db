# Workflow Version Control with GitLab

## Use cases:

- **Automated Backup:** Regularly back up n8n workflows to a GitLab repository, ensuring that changes are tracked and recoverable.
- **Version History:** Maintain a detailed history of workflow modifications, allowing for easy rollback to previous versions if needed.
- **Collaboration:** Enable multiple users to collaborate on workflow development through GitLab's branching and merging capabilities.

## How it works:

1.  **Trigger:** The workflow is initiated manually via the "When clicking 'Test Workflow'" node.
2.  **Global Variables:** Sets global variables such as `repo.owner`, `repo.name`, `repo.branch`, and `repo.path` to configure the GitLab repository details.
3.  **Retrieve Workflows:** Fetches all workflows from the n8n instance using the "Retrieve all workflows" node.
4.  **Loop through Workflows:** Iterates through each workflow.
5.  **Get File from GitLab:** For each workflow, it attempts to retrieve the corresponding JSON file from the specified GitLab repository. If the file doesn't exist, the "Get file" node's `onError` parameter is set to `continueErrorOutput`, so it doesn't stop the execution.
6.  **Extract File Content:** If the file is successfully retrieved, the "Extract From File" node converts the GitLab file content from JSON to a usable Javascript Object named `workflow-from-gitlab`.
7. **Save versions**: It creates two new variables : `workflow-from-gitlab` from gitlab workflow and `workflow-from-n8n` from the current workflow
8.  **File Status Comparison:** A "Code" node compares the workflow retrieved from n8n and the workflow fetched from GitLab. It checks:
    *   If the file was not found in gitlab: the status is new
    *   If the files are the same (content is identical): the status is same
    *   If the files are differents: the status is diff
9.  **Switch:** Based on the status, the workflow will continue with one of those node:
    *   New: Create the file in gitlab
    *   Same: Do nothing
    *   Diff: Update the file in gitlab
    *   Error: Log the error
10. **Update GitLab:**
    *   If the file is new or has been changed, the workflow updates the corresponding JSON file in the GitLab repository with the current version from n8n.
    *   A commit message is generated to describe the changes.
11. **End Loop**: The workflow check the next n8n workflow to check

## Services:

-   n8n API
-   GitLab API

## Hashtags:

#n8n #automation #GitLab #versioncontrol #workflow
