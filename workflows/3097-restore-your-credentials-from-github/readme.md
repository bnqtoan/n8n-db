# Restore your credentials from GitHub

## Use cases:

- **Backup and Restore Credentials:** Automatically restore n8n credentials from a GitHub repository after a system failure or migration.
- **Version Control for Credentials:** Maintain a history of n8n credentials in a GitHub repository, allowing for rollback to previous configurations if needed.
- **Credential Sharing (with Caution):** Restore a standardized set of credentials across multiple n8n instances within a team (ensure proper security practices are in place).

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it within n8n.
2.  **Set Global Variables:** The `Globals` node sets global variables for the GitHub repository owner (`repo.owner`), repository name (`repo.name`), and the path to the credentials folder within the repository (`repo.path`).
3.  **Get All Files in Given Path:** Retrieves a list of files from the specified path in the GitHub repository using the GitHub API. It uses the credentials from the `GitHub account` credential type.
4.  **Split the result:** Takes the array of files and split it to items
5.  **Get file content from GitHub:** For each file, it retrieves the content from the specified GitHub repository using the GitHub API.
6.  **Convert files to JSON:** convert the content from file to JSON format
7.  **Check for skipped Credentials:** Determines to continue base on two contitions (credentials can be empty, or the name contains `n8n account`)
8.  **Restore n8n Credentials:** Create n8n credentials using the name, type, and data extracted from the JSON file. It uses the `n8n account` credential.

## Services:

-   GitHub API
-   n8n API

## Hashtags:

#n8n #GitHub #Credentials #Backup #Restore
