# Zendesk to Jira Integration

## Use cases:

- **Automatically create Jira issues from new Zendesk tickets:** When a new ticket is created in Zendesk, a corresponding issue is automatically created in Jira, ensuring that all support requests are tracked in the development workflow.
- **Update existing Jira issues with Zendesk ticket comments:** If a Jira issue key is found in the Zendesk ticket, new comments on the Zendesk ticket are added as comments to the existing Jira issue.
- **Keep Zendesk tickets updated with Jira issue keys:** Once a Jira issue is created from a Zendesk ticket, the Jira issue key is added to a custom field in the Zendesk ticket for easy reference.

## How it works:

1.  **On new Zendesk ticket:** The workflow starts when a new ticket is created in Zendesk, triggering a webhook.
2.  **Get ticket:** The Zendesk ticket details, including custom fields, are retrieved using the ticket ID.
3.  **Determine:** A Function node checks if a Jira issue key is already present in a specific custom field of the Zendesk ticket (identified by `ISSUE_KEY_FIELD_ID = 6689934837021`).
4.  **IF:** This node checks if the Jira issue key extracted in the "Determine" node is empty or not.
    *   **If a Jira issue key exists:**
        *   **Create comment to existing issue:** A comment containing the Zendesk ticket comment is added to the existing Jira issue using the extracted Jira issue key.
    *   **If a Jira issue key does not exist:**
        *   **Create issue:** A new Jira issue is created with the Zendesk ticket's subject as the summary and a link to the Zendesk ticket in the description.
        *   **Update ticket:** The Zendesk ticket is updated to include the newly created Jira issue key in the specified custom field.

## Services:

-   **Zendesk:** Used to monitor new tickets and update existing tickets.
-   **Jira:** Used to create new issues and add comments to existing issues.

## Hashtags:

#n8n #Zendesk #Jira #Automation #IssueTracking
