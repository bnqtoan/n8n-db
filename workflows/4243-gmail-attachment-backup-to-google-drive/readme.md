# Gmail Attachment to Google Drive Backup

## Use cases:

- **Automatic Backup of Important Attachments:** Automatically save attachments from emails sent by a specific sender (e.g., a client, a team member, or a system) to a designated folder in Google Drive.
- **Centralized Storage of Attachments:** Create a central repository for attachments from a particular sender, making it easier to manage and retrieve important files.
- **Email Archiving Compliance:** Archive email attachments to Google Drive for compliance or record-keeping purposes.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a "Gmail Trigger" node that listens for new emails from a specific sender (`akhilgadiraju@gmail.com`). It's configured to check for new emails every minute.
2.  **Get Email:** When a new email arrives from the specified sender, the "Gmail" node retrieves the email details, including attachments, using the message ID.
3.  **Extract Attachments:** The "Code" node processes the attachments, extracting the binary data of each attachment.
4.  **Upload to Google Drive:** The "Google Drive" node uploads each attachment to a specified folder ("DOcs") in Google Drive. The filename is dynamically generated using the email ID, current timestamp, and the suffix "backup\_attachment".
5.  **Placeholder Node:** The "Replace Me" node is a placeholder for additional logic to be added after the file upload.

## Services:

-   Gmail
-   Google Drive

## Hashtags:

#n8n #Gmail #GoogleDrive #Automation #EmailBackup
