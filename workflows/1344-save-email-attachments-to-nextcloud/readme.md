# Save Invoices from Email to Nextcloud

## Use cases:

- **Automatic Invoice Archiving:** Automatically save incoming invoices from a specific email inbox to a designated folder in Nextcloud.
- **Date-Based Organization:** Organize invoices by year and month in Nextcloud, making it easier to find and manage them.
- **Vendor-Specific Folders:** Create folders for each vendor within the Nextcloud invoice directory, ensuring a structured and easily searchable archive.

## How it works:

1.  **Read Emails (IMAP Email Node):** The workflow starts by connecting to an IMAP email server and fetching emails from the "Invoices" mailbox. It retrieves the email content and attachments.
2.  **Extract and Prepare Attachments (Map each attachment Node):** This node is a Function node that processes the email data, specifically the attachments. It iterates through each attachment in the email. Then:
    *   Generate date and from based on its value, and sanitize the value.
    *   Sanitize the filename.
    *   Maps each attachment to a separate item with metadata from email, and attachment
3.  **Upload to Nextcloud (Nextcloud Node):** This node uploads each attachment to a Nextcloud instance. It constructs the file path using the sanitized data from the previous node to save the file to a specific folder based on date, the sender and sanitized filename.

## Services:

-   IMAP (Email Server)
-   Nextcloud

## Hashtags:

#n8n #automation #invoice #nextcloud #email
