# Sync Jira issues with subsequent comments to Notion database

## Use cases:

- Automatically create a Notion database entry for every new Jira issue to track and manage project tasks in a centralized location.
- Keep a Notion database synchronized with Jira, reflecting updates to issue status, title, and other key fields in real-time.
- Automatically archive or delete Notion database entries when corresponding Jira issues are deleted, ensuring data consistency and cleanliness.

## How it works:

1.  **Jira Trigger ("On issues created/updated/deleted"):** This node listens for specific events in Jira, such as issue creation, updates, or deletions.
2.  **Lookup Table ("Lookup table"):** A code node that retrieves the status ID from the Jira issue to a Notion compatible status.
3.  **IF:** Based on if the issue was just created or updated/deleted, a different path will be taken.
4.  **Create database page:** If the issue was just created, create a new page in Notion with info about the Jira issue.
5.  **Create custom Notion filters:** This code node creates a filter based on the issue ID for the next node.
6.  **Find database page:** The filter created in the previous node is used here to find if an existing Notion page is already synced to the Jira issue.
7.  **Switch:** Depending on if the Jira issue was updated or deleted, a different path will be taken.
8.  **Update issue:** If the Jira issue was updated, update the existing Notion page with the newest info from Jira.
9.  **Delete issue:** If the Jira issue was deleted, delete the existing Notion page.

## Services:

-   Jira
-   Notion

## Hashtags:

#n8n #Jira #Notion #Automation #IssueTracking
