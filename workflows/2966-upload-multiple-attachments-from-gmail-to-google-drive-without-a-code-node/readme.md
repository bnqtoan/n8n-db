# Gmail Attachment to Google Drive with Size Filtering

## Use cases:

*   **Automatic Backup of Important Attachments:** Automatically saves email attachments from a specific sender (e.g., a client or internal system) to a designated folder in Google Drive, ensuring that important documents are backed up.
*   **Attachment Size-Based Routing:** Categorizes and routes email attachments based on their size. Large files can be sent for review, while smaller files are automatically saved to Google Drive.
*   **Selective Attachment Saving:** Only saves attachments from a specific sender and that are not read.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a "Gmail Trigger" node that listens for new emails from a specific sender (`ray.thomas@charter.com`) that are unread. It also downloads the attachments from those emails.
2.  **Split Out:** A "Split Out" node then separates each attachment into an individual item to be processed.
3.  **Switch:** The "Switch" node checks the file size of each attachment.
    *   **Large Files:** If a file is larger than 300 MB, it is routed to the "Send " Too Big" Notification (for example)" node, which is a No-Op, it does nothing but could be configured to send a notification.
    *   **Medium Files:** If a file is larger than 10 MB, it is routed to the "Google Drive" node.
    *   **Small Files:** If a file is smaller than 10 MB, it is routed to the "Ignore Little Graphics / Icons (for example)", which is a No-Op, it does nothing.
4.  **Google Drive:** The "Google Drive" node uploads the file to a specific folder ("misc") in the user's Google Drive. The file name is retained.

## Services:

*   Gmail API
*   Google Drive API

## Hashtags:

#n8n #gmail #googledrive #automation #emailattachments
