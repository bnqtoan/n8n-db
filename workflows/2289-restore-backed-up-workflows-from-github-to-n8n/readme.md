# [OPS] Restore workflows from GitHub to n8n

## Use cases:
- **Backup and Restore:** Automate the process of backing up n8n workflows to a GitHub repository and restoring them to an n8n instance.
- **Version Control:** Use GitHub as a version control system for n8n workflows, allowing you to track changes and revert to previous versions.
- **Disaster Recovery:** Quickly restore n8n workflows from a GitHub backup in case of data loss or system failure.

## How it works:
The workflow is triggered manually. It retrieves workflow files from a specified GitHub repository and restores them to your n8n instance. Here's a breakdown:

1.  **Trigger:** The workflow starts when you manually execute it ("On clicking 'execute'").
2.  **Globals:** Sets global variables like the GitHub repository owner, repository name, and the path to the workflow files within the repository.
3.  **Get GitHub files:** Retrieves a list of files from the specified GitHub repository using the GitHub API.
4.  **Get each Github file:** Retrieves the content of each file from Github.
5.  **Set name and content:** Extracts the workflow name and content from each GitHub file, decoding the content from base64.
6.  **Get existing n8n workflows:** Retrieves a list of all existing workflows in your n8n instance using the n8n API.
7.  **Set n8n existing workflows names:** Get the name of the existing workflows in n8n.
8.  **Merge Github and n8n workflows:** Compares the workflows retrieved from GitHub with the workflows already present in n8n (based on their names). It keeps only the workflows from GitHub that do not already exist in n8n.
9.  **If workflow already exists:** Check if a workflow with the same name exists on n8n.
10. **Create workflow:** Creates a new workflow in n8n using the content retrieved from GitHub.

## Services:
- GitHub API: Used to access and manage files in a GitHub repository.
- n8n API: Used to interact with the n8n instance, retrieving and creating workflows.

## Hashtags:
#n8n #automation #GitHub #workflow #backup
