## n8n Workflow: Download Google Drive File

This workflow automates the process of downloading a specific file from Google Drive and saving it to the n8n server's file system.

### Use cases:

*   **Automated Backup:** Regularly download important files from Google Drive as a backup strategy.
*   **File Processing:** Download a file from Google Drive as a trigger for further processing within an n8n workflow (e.g., converting it to a different format, extracting data).
*   **Scheduled Reporting:** Download a report generated in Google Drive on a schedule to store a local copy.

### How it works:

1.  The workflow is initiated manually using the "On clicking 'execute'" node (Manual Trigger).
2.  The "Google Drive" node downloads a specific file from Google Drive.  It's configured with a `fileId` that identifies the file to download and uses the provided Google API credentials (`n8n-test-service-account`).  The `download` operation is used to retrieve the file content.
3.  The "Write Binary File" node takes the downloaded file (as a binary file) from the "Google Drive" node and saves it to the nn8n server's file system. The file will be saved to `/data/downloaded_file.pdf`.

### Services:

*   Google Drive

### Hashtags:

#n8n #GoogleDrive #Automation #FileDownload #Backup
