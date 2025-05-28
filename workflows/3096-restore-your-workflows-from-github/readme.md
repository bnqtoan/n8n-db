# Restore your workflows from GitHub

## Use cases:

- **Backup Restoration:** Automatically restore your n8n workflows from a GitHub repository to a new or existing n8n instance, ensuring business continuity and disaster recovery.
- **Version Control Deployment:** Deploy specific versions of your workflows from a GitHub repository to your n8n instance, enabling controlled and auditable deployments.
- **Workflow Migration:** Migrate n8n workflows between different n8n instances (e.g., from development to production) using a GitHub repository as an intermediary.

## How it works:

The workflow is triggered manually via the "When clicking ‘Test workflow’" node. It then proceeds as follows:

1.  **Globals:** Stores configuration values such as the GitHub repository owner, repository name, and path to the workflow files within the repository. You **must** configure this node with your GitHub repository details.
2.  **Get all files in given path:** Uses the GitHub API to retrieve a list of all files located in the specified path of the GitHub repository.
3.  **Split the result:** Splits the list of files into individual items for processing.
4.  **Get file content from GitHub:** For each file, retrieve the content from GitHub using the GitHub API.
5.  **Convert files to JSON:** Parses the file content as JSON data, assuming each file contains a valid n8n workflow in JSON format.
6.  **Restore n8n Workflows:** Creates or updates n8n workflows in your n8n instance using the JSON data extracted from the GitHub files.

## Services:

-   **GitHub API:** Used to access and retrieve workflow files from a GitHub repository.
-   **n8n API:** Used to create and update workflows within the n8n instance.

## Hashtags:

#n8n #GitHub #WorkflowAutomation #Backup #Restore
