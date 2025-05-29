# Workflow Backup copy

## Use cases:
- Automatically back up all n8n workflows to Google Drive on a weekly basis to prevent data loss.
- Create an archive of n8n workflows for version control and auditing purposes.
- Enable easy transfer of n8n workflows between different n8n instances or environments.

## How it works:
1. The workflow is triggered either manually or by a schedule (weekly by default).
2. A new folder is created in Google Drive with the name "Workflow Backups [date]".
3. The workflow fetches all workflows from the n8n instance using the n8n API.
4. It loops through each workflow and converts it into a JSON file.
5. The JSON file is then uploaded to the newly created folder in Google Drive.
6. After uploading the new backup, the workflow retrieves all existing folders with a specific ID.
7. It filters the results and deletes folders that do not match the folder created during the current execution, effectively removing older backups.

## Services:
- n8n API: Used to retrieve workflow data from the n8n instance.
- Google Drive: Used to store the workflow backups.

## Hashtags:
#n8n #automation #workflow #backup #googleDrive
