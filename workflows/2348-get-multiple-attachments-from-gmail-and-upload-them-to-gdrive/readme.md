# Email Attachment to Google Drive

## Use cases:

*   **Automatic Backup of Important Attachments:** Automatically save email attachments (like invoices, contracts, or reports) to Google Drive for safekeeping and easy access.
*   **Centralized Document Storage:** Create a workflow that collects attachments from specific email senders and organizes them in designated folders within Google Drive.
*   **Streamlined Collaboration:** Share a Google Drive folder with team members to provide access to important attachments received via email.

## How it works:

1.  **Trigger - New Email:** The workflow starts when a new email arrives in your Gmail inbox that contains attachments. It uses the filter `"has:attachment"` to identify these emails.
2.  **attach binary data outputs:** This Function node extracts the binary data (the attachment file itself) and the filename from the email. It prepares the data into a suitable format for the next node.
3.  **upload files to google drive:** This node uploads the extracted file to a specified Google Drive folder. The file name is dynamically generated using the original file name, the sender's email address and the file extension.

## Services:

*   Gmail
*   Google Drive

## Hashtags:

#n8n #gmail #googledrive #automation #emailattachments
