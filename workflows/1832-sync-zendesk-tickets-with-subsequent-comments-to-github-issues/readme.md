# Zendesk to GitHub Issue Management

## Use cases:

- **Automated Issue Creation:** Automatically creates a new GitHub issue when a new ticket is created in Zendesk. This is useful for tracking bug reports or feature requests submitted through Zendesk.
- **Ticket Updates to GitHub:** When an existing GitHub issue is linked to a Zendesk ticket, the workflow can add new Zendesk ticket comments to the GitHub issue as comments.
- **Centralized Issue Tracking:** Connects Zendesk tickets to GitHub issues, making it easier for development teams to track customer-reported problems and feature requests directly within their development workflow.

## How it works:

1.  **On new Zendesk ticket:** Listens for new tickets created in Zendesk via a webhook.
2.  **Get ticket:** Retrieves the complete details of the newly created Zendesk ticket.
3.  **Determine:** A Function node that checks if a "GitHub Issue Number" custom field in the Zendesk ticket is already populated. It extracts the value of this field.
4.  **IF:** Checks the output of the "Determine" node.
    *   If the "GitHub Issue Number" field is NOT empty (meaning an issue already exists):
        *   **Create comment on existing issue:** Creates a new comment on the existing GitHub issue, using the ticket's latest comment.
    *   If the "GitHub Issue Number" field is empty (meaning a new issue needs to be created):
        *   **Create issue:** Creates a new issue on GitHub in the specified repository. The issue title is taken from the Zendesk ticket subject, and the owner and repository are configurable.
        *   **Update ticket:** Updates the Zendesk ticket by adding the created GitHub issue number to the "GitHub Issue Number" custom field.

## Services:

-   Zendesk
-   GitHub

## Hashtags:

#n8n #automation #zendesk #github #issuetracking
