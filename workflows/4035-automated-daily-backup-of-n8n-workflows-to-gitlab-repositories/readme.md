# Workflow Synchronization with GitLab

## Use cases:

- **Automated Workflow Backup:** Regularly back up n8n workflows to a GitLab repository for version control and disaster recovery.
- **Workflow Change Tracking:** Track modifications to n8n workflows over time, enabling easy rollback to previous versions if needed.
- **Collaborative Workflow Development:** Allow multiple team members to contribute to and manage n8n workflows using GitLab's branching and merging capabilities.

## How it works:

1.  **Trigger:** The workflow starts with a `Schedule Trigger` node, which defines the frequency at which the workflow will run.
2.  **Get GitLab Repository Details:** Retrieves the repository information from GitLab.
3.  **Retrieve n8n Workflows:** Fetches all workflows from the n8n instance using the `Retrieve all workflows` node.
4.  **Loop Through Workflows:** Iterates through each workflow retrieved from n8n using the `Loop Over Workflows` node.
5.  **Get File from GitLab:** For each workflow, it attempts to retrieve a corresponding JSON file from the specified GitLab repository. The filename is based on the workflow's ID.
6.  **Extract From File:** Extract the content of the file to json format.
7.  **Save each version in a different field:** Saves the version from gitlab and the current workflow version to compare after.
8.  **Compare Workflows:** A `Code` node compares the workflow from n8n with the one retrieved from GitLab. It checks if the workflow exists in GitLab, and if so, whether the versions are identical. It sets a `status` flag to "new", "same", or "diff" accordingly.
9.  **Handle Status:**
    *   **New:** If the workflow is new (doesn't exist in GitLab), it creates a new file in the GitLab repository.
    *   **Same:** If the workflows are identical, it does nothing.
    *   **Diff:** If the workflows are different, it updates the file in the GitLab repository with the latest version from n8n.
    *   **Error:** The process handle any error during file retrieving, for example, if the file doesn't exists.
10. **End Loop:** After checking and potentially updating each workflow, the loop finishes.

## Services:

-   GitLab: For storing and version controlling workflow definitions as JSON files.
-   n8n API: To retrieve workflow definitions from the n8n instance.

## Hashtags:

#n8n #automation #GitLab #workflow #versioncontrol
