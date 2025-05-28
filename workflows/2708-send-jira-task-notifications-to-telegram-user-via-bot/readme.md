# Jira to Telegram Notifications

## Use cases:

- **Real-time issue updates:** Notifies users via Telegram when a new Jira issue is created, updated, or assigned to them.
- **Personalized notifications:** Directs Jira issue notifications to the correct Telegram user based on the assignee in Jira.
- **Improved team collaboration:** Keeps team members informed about important Jira events, fostering faster response times and better collaboration.

## How it works:

1.  **Jira Webhook:** The workflow starts with a "jira-webhook" node, which listens for incoming webhook events from Jira.  It's configured to trigger when issues are created, updated, or when the assignee changes.
2.  **Check Issue Body, Assignee and Hook Type**: The "check issue body, assignee and hook type" node validates the webhook data received from Jira. It verifies that the body, assignee details exist and the hook type is defined.
3.  **Telegram Account Lookup:** The "telegram account" node uses a Code node to determine the appropriate Telegram chat ID based on the Jira issue assignee's account ID. It uses a lookup table (`telegramAccounts`) to map Jira account IDs to Telegram chat IDs.  You need to replace `"[jira account id]"` with real Jira account id and `00000000` with a telegram chat id.
4.  **Check Telegram Account Exists:** The "check tg account exists" node verifies that a Telegram chat ID was found for the Jira assignee. This prevents errors if there's no mapping for a particular user.
5.  **Check Type:** The "check type" node examines the `type` header of the Jira webhook to determine the event type (created, updated, or change-assignee).
6.  **Send Telegram Message:** Based on the event type, the workflow sends a formatted message to the appropriate Telegram chat ID. There are three "Telegram" nodes:
    -   "Send Create": Sends a message for newly created issues.
    -   "Send Update": Sends a message for updated issues.
    -   "Send Assign Alert": Sends a message when an issue is assigned to a user.
    The messages include details like the issue type, project, key, title, description, and creation time.

## Services:

-   Jira
-   Telegram

## Hashtags:

#n8n #automation #Jira #Telegram #notifications
