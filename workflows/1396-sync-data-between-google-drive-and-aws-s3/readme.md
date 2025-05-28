# Google Drive to AWS S3 File Backup

## Use cases:

*   **Automated Backup:** Automatically back up files from a specific Google Drive folder to an AWS S3 bucket whenever a file is updated.
*   **Centralized Storage:** Consolidate files from Google Drive into a centralized AWS S3 storage for better organization and management.
*   **Disaster Recovery:** Ensure data redundancy by creating a backup of important Google Drive files in a separate cloud storage service like AWS S3.

## How it works:

1.  **Google Drive Trigger:** The workflow starts with a "Google Drive Trigger" node that monitors a specific folder in Google Drive for file update events.  It triggers the workflow when a file is updated.
2.  **AWS S3 - Get:** The workflow gets all the keys from the AWS S3 bucket.
3.  **Merge:** This node removes items from Google Drive's metadata based on the keys in AWS S3.
4.  **AWS S3 - Upload:** Uploads the files with the Google Drive `name` property to the `mybucket` AWS S3 bucket.  It also adds a "source: gdrive" tag to each uploaded file and uses AES256 server-side encryption for security.

## Services:

*   Google Drive
*   AWS S3

## Hashtags:

#n8n #GoogleDrive #AWSS3 #Backup #Automation
