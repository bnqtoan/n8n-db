# n8n Workflow Backup to GitHub

## Use cases:

- **Automated Workflow Backup:** Regularly back up your n8n workflows to a GitHub repository to ensure data safety and version control.
- **Version History:** Maintain a historical record of workflow changes, allowing you to revert to previous versions if needed.
- **Collaboration and Sharing:**  Facilitate collaboration by storing workflows in a central repository accessible to multiple team members.

## How it works:

1.  **Schedule Trigger:** The workflow starts automatically based on a predefined schedule.
2.  **List files from repo:** Retrieves a list of file names in a specified Github repository
3.  **Aggregate:** Combines the names of the files retrieved from Github.
4.  **Retrieve workflows:** Fetches all workflows from your n8n instance.
5.  **Json file:** Converts the workflows to JSON format.
6.  **To base64:** Converts the JSON file to base64 encoding.
7.  **Commit date & file name:** Format the commit message.
8.  **Check if file exists:** Checks if a file with the same name already exists in the GitHub repository.
9.  **Update file:** If the file exists, it updates the existing file with the new content.
10. **Upload file:** If the file does not exist, it uploads the new file to the GitHub repository.

## Services:

-   n8n
-   GitHub

## Hashtags:

#n8n #automation #GitHub #backup #versioncontrol
