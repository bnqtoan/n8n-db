# Automatically delete SPAM emails

## Use cases

- **Regular mailbox cleanup:** Automatically delete SPAM emails on a weekly basis to keep your inbox clutter-free and improve email management.
- **Reduce storage usage:** Regularly deleting SPAM helps reduce the amount of storage your email account consumes.
- **Enhance email security:** While SPAM filters are generally effective, automatically deleting SPAM provides an extra layer of security by removing potentially malicious emails.

## How it works

This workflow automates the process of deleting SPAM emails from your Gmail account. Here's a breakdown:

1.  **Trigger at Sunday midnight:** The workflow starts on Sunday at midnight using a Schedule Trigger node.
2.  **Get all SPAM emails:** The "Get all SPAM emails" node (Gmail node) retrieves all emails currently labeled as "SPAM" from your Gmail account. It uses the Gmail API to search for emails with the "SPAM" label.
3.  **Delete SPAM emails:** The "Delete SPAM emails" node (Gmail node) receives the list of SPAM emails and iterates through them, deleting each email from your Gmail account.

## Services

-   Gmail

## Hashtags

#n8n #automation #gmail #email #spam
