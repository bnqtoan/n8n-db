# GDrive Permissions Audit

## Use cases

- **Regular Security Audits:** Automate daily, weekly, or monthly audits of Google Drive file permissions to identify potential security risks.
- **Compliance Monitoring:** Ensure compliance with data governance policies by automatically flagging files shared with external users or publicly accessible.
- **Data Leak Prevention:** Proactively identify and remediate overly permissive file sharing settings to prevent accidental data leaks.

## How it works

1.  **Scheduled Trigger:** The workflow starts with a scheduled trigger that runs daily at 6 AM.
2.  **Create New Sheet:** A new Google Sheet is created with the name `audit-yyyyMMdd` in a designated Google Sheets document to store the daily results.
3.  **Get Recently Active Documents:** The workflow fetches recently modified documents (modified in the last day) from Google Drive using the Google Drive node. It filters for documents, spreadsheets, and presentations, excluding trashed files. It retrieves file metadata, including permissions, sharing status, name, and ID.
4.  **Identify External Shares:** Using the filter node, identify all the files that has shared with external users and files with public access enabled.
5.  **Iterate through Files and Permissions:** The workflow iterates through each file and then each permission associated with that file.
6.  **Filter out owner permissions:** The owner permissions are filetered to focus on external users
7.  **Normalize Fields:** The workflow extracts and transforms relevant information from each permission entry (file ID, file name, type of share, user ID, user email, and role) using a Set node.
8.  **Aggregate and Flatten Results:** The extracted data is aggregated into a single array and flattened into a list of rows for easy insertion into the Google Sheet.
9.  **Append to New Sheet:** The data is appended to the newly created Google Sheet.
10. **Send Email Report:** A summary email is sent to `jim@example.com`, detailing the Google Drive Permissions Audit results for the day. The email includes links to the newly created audit sheet and lists files shared with external users and files shared with anyone.

## Services

-   Google Drive
-   Google Sheets
-   Gmail

## Hashtags

#n8n #GoogleDrive #GoogleSheets #SecurityAudit #Automation
