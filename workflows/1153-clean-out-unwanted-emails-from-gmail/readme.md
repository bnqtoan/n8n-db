# Gmail Unsubscribe Message Deleter

## Use cases

*   **Automated Inbox Cleaning:** Regularly delete old unsubscribe emails to maintain a clean and focused inbox.
*   **Privacy Management:** Automatically remove traces of promotional or subscription-based communications that are no longer relevant.
*   **Reduce Email Storage:** Delete large volumes of unsubscribe-related emails, helping to reduce storage usage in Gmail.

## How it works

1.  The workflow starts with a "Manual Trigger" node, which initiates the process when manually executed.
2.  The "Gmail" node fetches all email message IDs from your Gmail inbox that match the search query `"-in:chats unsubscribe -license -key -password"`. This query filters out chat messages and targets emails likely related to subscriptions or promotions, while excluding common keywords that might inadvertently delete important emails.
3.  The "SplitInBatches" node divides the fetched message IDs into smaller batches of 100 for efficient processing and to avoid hitting API rate limits.
4.  For each message ID in the batch, the "Delete Old Gmail" node deletes the corresponding email from your Gmail inbox. The process loops back to the "SplitInBatches" node to process the next batch, continuing until all message IDs have been processed.

## Services

*   Gmail

## Hashtags

#n8n #gmail #automation #emailmanagement #inboxclean
