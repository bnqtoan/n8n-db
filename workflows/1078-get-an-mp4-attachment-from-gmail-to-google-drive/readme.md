# Gmail Attachment to Google Drive Workflow

## Use cases:

- **Automatic Backup of Important Attachments:**  Automatically save video attachments from specific Gmail labels to a designated Google Drive folder.
- **Centralized Storage of Visual Content:**  Aggregate video attachments received via email in a Google Drive folder for easy access and organization.
- **Archive Project-Related Videos:**  Filter emails by label and automatically back up video attachments of a specific project into a dedicated drive folder.

## How it works:

This workflow automates the process of extracting video attachments from Gmail, uploading them to Google Drive, and retrieving the shareable link.

1.  **Gmail (Gmail1):** Retrieves emails from Gmail based on the specified label ("Label\_1819449526183990002").  It extracts attachments from emails matching the criteria and sets the attachment to `attachment_0` to be used later.
2.  **Upload File (Upload File1):** Takes the binary data of the video attachment extracted from the email in step 1 and uploads it to a specified Google Drive folder ("1I-tBNWFhH2FwcyiKeBOcGseWktF-nXBr").
    *   The attachment is renamed using the attachments filename.
3.  **Get attachment Link (Get attachment Link):** Takes the uploaded file and saves the webViewLink into the `mp4_attachment` property.
    *   Removes all other properties to only keep `mp4_attachment`.

## Services:

*   Gmail
*   Google Drive

## Hashtags:

#n8n #gmail #googleDrive #automation #attachmentBackup
