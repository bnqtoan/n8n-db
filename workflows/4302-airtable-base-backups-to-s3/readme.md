# Airtable Full Backup

## Use cases:

- **Regular Airtable Data Backup:** Automatically back up your entire Airtable base on a weekly schedule to an AWS S3 bucket, ensuring data safety and redundancy.
- **Archiving Airtable Data:** Store historical snapshots of your Airtable data for compliance or auditing purposes, organizing backups by week in S3.
- **Disaster Recovery:** In case of accidental data loss or corruption in Airtable, quickly restore your data from the backups stored in AWS S3.

## How it works:

This workflow automates the process of backing up your Airtable data to AWS S3 on a weekly and monthly schedule and pruning older backups.

1.  **Triggers:** The workflow starts with two schedule triggers:
    *   **Weekly Backup:** Triggers every week to initiate the backup process.
    *   **Monthly Prune:** Triggers every month to delete older backups.
2.  **Set Week:** A `Set` node creates a variable with the current week in `YYYY-'W'WW` format.
3.  **Create Folder:** The workflow creates a folder in AWS S3 named after the current week.
4.  **Airtable:** Retrieves the schema (metadata) of all tables in the specified Airtable base.
5.  **Loop Over Items:** Iterates through each table in the Airtable base.
6.  **Create Table Metadata:** Creates metadata for each table, including a cleaned file name and the table ID.
7.  **Pull Records:** Retrieves all records from the current table in Airtable.
8.  **Convert to File:** Converts the retrieved records into a CSV file, naming it based on the table name.
9.  **AWS S3 (Upload):** Uploads the CSV file to the AWS S3 bucket, placing it in a folder structure based on the week.
10. **Aggregate:** Aggregates all item data.
11. **Slack:** Sends a notification to a specified Slack channel indicating the backup is complete.
12. **Monthly Prune:** Calculates a cutoff date (4 weeks ago) to delete older backups.
13. **List Folders:** Lists all folders (representing weeks) in the S3 bucket.
14. **If:** Compares the folder name (week) with the cutoff date.
15. **AWS S3 (Delete):** If the folder's week is older than the cutoff date, it deletes the folder and its contents from S3.

## Services:

-   Airtable
-   AWS S3
-   Slack

## Hashtags:

#n8n #automation #Airtable #backup #AWS #S3 #Slack
