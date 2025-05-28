# My Workflow

## Use cases:

- **Automated Workflow Backup:** Regularly back up n8n workflows to a GitLab repository to prevent data loss and facilitate version control.
- **Git-Based Workflow Synchronization:** Keep n8n workflows synchronized with a GitLab repository, allowing multiple users to collaborate on workflow development and deployment.
- **Disaster Recovery:** In case of an n8n instance failure, quickly restore workflows from the GitLab backup, minimizing downtime.

## How it works:

This workflow automates the process of backing up n8n workflows to a GitLab repository. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow can be triggered manually or via a schedule (every Saturday at 9:30 PM).
2.  **Set Globals:** Defines global variables such as GitLab owner, project name, workflow path, tags to match for backup, execution type (manual/scheduled), and execution timestamp.
3.  **Fetch n8n Workflows:** Fetches n8n workflows based on specific tags defined in the Globals.
4.  **Derive Filename:** Creates a normalized filename from the n8n workflow name by removing special characters and adding the ".json" extension.
5.  **Check if File Exists:** Checks if a file with the derived filename already exists in the designated GitLab repository.
6.  **List Existing Files:** Retrieves a list of all existing files in the specified GitLab workflow path and consolidates the filenames into a single list item.
7.  **Conditional Branching (If File Exists):**
    *   If the file exists, the workflow proceeds to fetch the existing file content from GitLab.
    *   If the file does not exist, the workflow proceeds to create a new file in GitLab.
8.  **Skip Unchanged Files:** Compares the content of the current workflow to the content of the workflow that is already in the Gitlab repo.
9.  **Create or Edit File:**
    *   **Create New File(s):** If the file doesn't exist, it creates a new file in the GitLab repository with the workflow definition in JSON format.
    *   **Edit Existing File(s):** If the file exists and has changes, it updates the file in the GitLab repository with the current workflow definition.

## Services:

*   **n8n:** Used to fetch workflow definitions.
*   **GitLab:** Used as a repository for storing and versioning the n8n workflow backups.

## Hashtags:

#n8n #automation #GitLab #workflow #backup
