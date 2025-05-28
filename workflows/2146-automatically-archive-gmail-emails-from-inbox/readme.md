# Gmail Inbox Archiver for Starred Emails

## Use cases:

- **Automated Email Management:** Automatically archive emails in your Gmail inbox at the end of each workday, except for those you have starred. This helps keep your inbox clean and focused on important items.
- **Prioritized Inbox:** Ensure that only starred emails remain in your inbox, serving as a visual reminder of pending tasks or important information.
- **Time-Based Archiving:** Automatically process and archive emails older than one day, ensuring that your inbox only contains recent communications.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "At midnight every work day" node, which triggers the workflow at midnight every workday (Monday to Friday).
2.  **Get all emails in the last day:** Retrieves all emails received in the last 24 hours from your Gmail inbox using the Gmail node.
3.  **Get the thread of each email:** For each email, the corresponding thread is fetched using the Gmail node to work on the entire conversation.
4.  **Keep only starred emails in inbox:** A Filter node checks if the thread contains any starred messages.
5.  **Archive thread (remove from inbox):** If the thread does not contain starred messages, the entire thread is archived (removed from the inbox) using the Gmail node.
6.  **for each message in the thread:** If the thread contains starred messages, loop for each email on that thread
7.  **Archive message (remove from inbox):** The workflow archive individual message, removing the INBOX label.

## Services:

-   Gmail

## Hashtags:

#n8n #gmail #automation #emailmanagement #inboxzero
