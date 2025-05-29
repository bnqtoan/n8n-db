# Backup all N8N workflows to Nextcloud

## Use cases:

- **Automated Backup:** Regularly back up your n8n workflows to a Nextcloud instance to prevent data loss due to system failures or accidental deletions.
- **Version Control:** Maintain a history of your n8n workflows, allowing you to revert to previous versions if needed.
- **Disaster Recovery:** In the event of a major incident, quickly restore your n8n workflows from the Nextcloud backup.

## How it works:

1.  **Trigger:** The workflow is initiated either manually by clicking 'execute' or automatically based on a schedule.
2.  **Backup Path:** A "Backup Path" node sets the directory path in Nextcloud where the backups will be stored. It includes the current date and time in the folder name (e.g., `/N8N-Backup/2024-01-01_120000`).
3.  **Create Directory:** The "Nextcloud Directory" node creates a new directory in Nextcloud based on the generated backup path.
4.  **Fetch Workflows:** The "n8n" node retrieves all n8n workflows.
5.  **Loop Through Workflows:** The "Loop Over Items" node iterates through each workflow retrieved from n8n.
6.  **Convert to File:** The "Convert to File" node converts each workflow into a JSON file, naming it after the workflow's name.
7.  **Upload to Nextcloud:** The "Nextcloud Upload" node uploads the JSON file to the designated directory in Nextcloud.
8.  **List Existing Backups:** The "Nextcloud List Dir" node retrieves a list of existing backup directories in Nextcloud.
9.  **Sort Backups:** The "Backups" node sorts the directories by date, descending.
10. **Limit Backups:** The "Limits Backups" node uses a code block to filter the list, keeping only the newest 7 backup folders.
11. **Delete Old Backups:** The "Nextcloud - Delete old backups" node deletes the older backup directories to maintain retention.

## Services:

-   n8n API
-   Nextcloud API

## Hashtags:

#n8n #automation #workflow #backup #Nextcloud
