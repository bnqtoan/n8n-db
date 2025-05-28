# Sync New Files From Google Drive with Airtable

## Use cases:

*   **Automated Document Sharing:** Automatically share newly added documents (e.g., contracts, reports) in a specific Google Drive folder with a designated recipient for review or approval.
*   **Backup and Record-Keeping:** Keep a log of all files added to a Google Drive folder in Airtable, including their metadata, for backup, auditing, or reporting purposes.
*   **Content Distribution Tracking:** Track when new marketing materials are uploaded to Google Drive, shared with a team member (e.g., for publishing), and record relevant details in Airtable for performance analysis.

## How it works:

1.  **Google Drive Trigger ("Google Drive"):** Monitors a specified folder in Google Drive for newly created files. It triggers the workflow whenever a new file is added.
2.  **Share File with Recipient ("Share File with Recipient"):**  Takes the file ID from the trigger and shares the file with a pre-defined recipient via email, granting them "writer" access.
3.  **Log File Metadata (" Log File Metadata"):**  Logs the metadata of the file (File Name, FileId, CreatedTime, ModifiedTime, and the ID of the shared file) into an Airtable base and table.

## Services:

*   Google Drive
*   Airtable

## Hashtags:

#n8n #GoogleDrive #Airtable #Automation #FileSharing
