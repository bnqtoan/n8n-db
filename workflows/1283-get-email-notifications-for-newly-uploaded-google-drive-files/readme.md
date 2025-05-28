# Google Drive File Creation Notification Workflow

## Use cases:

*   **Real-time alerts for shared folders:** Get instant email notifications when someone uploads a file to a shared Google Drive folder, ensuring you're always aware of new additions.
*   **Automated project updates:** Track progress on collaborative projects by receiving notifications whenever new documents or resources are added to a project folder in Google Drive.
*   **Content monitoring for specific folders:** Monitor content uploads to specified folders and be notified of new files.

## How it works:

This workflow monitors a specific folder in Google Drive for new file creations. When a new file is detected:

1.  The **Google Drive Trigger** node detects a newly created file in the folder specified by the "folderToWatch" parameter.
2.  The **Send Email** node then sends an email notification to the specified "toEmail" address. The email includes the name of the newly created file in the email body. The "subject" and "fromEmail" are also configurable within the Send Email node.

## Services:

*   Google Drive
*   SMTP (for sending emails)

## Hashtags:

#n8n #googleDrive #email #automation #fileTracking
