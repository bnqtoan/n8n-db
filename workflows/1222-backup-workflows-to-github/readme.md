# N8n Workflows Backup to GitHub

## Use cases:

- **Automated Daily Backups:**  Schedule daily backups of your n8n workflows to a GitHub repository, ensuring you have a version-controlled history of your automation setups.
- **Disaster Recovery:** In case of data loss or corruption in your n8n instance, easily restore your workflows from the GitHub backup.
- **Version Control and Collaboration:** Track changes to your workflows over time and facilitate collaboration by storing them in a central GitHub repository.

## How it works:

1.  **Schedule Trigger:** The workflow starts daily at 23:59 using a Cron node.
2.  **Fetch Workflows List:** It retrieves a list of all workflows from your n8n instance using the n8n API (`/rest/workflows`).
3.  **Get Workflow Data:** For each workflow in the list, it fetches the complete workflow data (including nodes, connections, and settings) from the n8n API (`/rest/workflows/:id`).
4.  **Download Raw Content from Github:** workflow download files from github in order to have the old version for comparison.
5.  **Merge Workflows:** Merges the data retrieved from the n8n API and GitHub.
6.  **Create/Edit Files in GitHub:**
    -  If the workflow doesn't exist in the GitHub repository, it creates a new JSON file with the workflow data. The file name will be the name of the workflow.
    - If the workflow already exists in the GitHub repository, it edits the corresponding JSON file with the latest workflow data.
    The commit message includes a timestamp and the workflow name for easy identification.

## Services:

-   **n8n API:** Used to retrieve workflow definitions from the n8n instance.
-   **GitHub API:** Used to create or update files in a specified GitHub repository.

## Hashtags:

#n8n #automation #backup #GitHub #versioncontrol
