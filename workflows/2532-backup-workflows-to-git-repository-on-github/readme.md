# Backup workflows to git repository

## Use cases:

- **Automated Workflow Backup:** Regularly back up n8n workflows to a Git repository, providing a version-controlled history for disaster recovery or rollback purposes.
- **Collaborative Workflow Development:** Enable multiple users to collaborate on n8n workflows by leveraging Git for version control, branching, and merging.
- **Infrastructure as Code:** Store n8n workflows as part of an infrastructure-as-code strategy, ensuring that workflow definitions are managed consistently with other infrastructure components.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule using the "Schedule Trigger" node.
2.  **Globals:** The "Globals" node sets global variables such as the GitHub repository owner, name, and path for storing the workflow files.
3.  **n8n:** The "n8n" node retrieves all workflows from the n8n instance using the n8n API.
4.  **Loop Over Items:** The "Loop Over Items" node splits the list of workflows into individual items for processing.
5.  **GitHub:** The "GitHub" node attempts to retrieve a workflow file from the specified GitHub repository.
6.  **If:** The "If" node checks if the GitHub node returned an error (meaning the file does not exist in the repo).
7.  **Code:** If the file exists the "Code" node convert the file contents from Base64 to JSON.
8.  **If1:** The "If1" node compare the content of the retrived file with the content of the current workflow.
9.  **Create new file and commit:** If the workflow file does not exist in the repository, the "Create new file and commit" node creates a new file in the GitHub repository with the current workflow's JSON definition.
10. **Update file content and commit:** If the workflow file exists but is different with the current workflow, the "Update file content and commit" updates the file on the Git repository with the current workflow data.
11. **Workflow changes committed to the repository** Show a description about the process done.

## Services:

-   **GitHub:** Used for storing and versioning the n8n workflows.
-   **n8n API:** Used to retrieve workflow definitions from the n8n instance.

## Hashtags:

#n8n #automation #workflowbackup #git #versioncontrol
