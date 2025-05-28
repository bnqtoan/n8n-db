# Github Issue Auto-Assigner

## Use cases:

- **Automatically assign new Github issues to the creator:** When a new issue is opened without an assignee, automatically assign it to the user who created it. This ensures that someone is immediately responsible for the issue.
- **Allow users to self-assign issues via comments:** If a user comments "assign me" on an issue, the workflow will automatically assign the issue to that user, provided it is currently unassigned.
- **Notify users when an issue is already assigned:** If a user requests assignment on an issue that is already assigned, post a comment notifying them who the issue is assigned to.

## How it works:

1.  **Github Trigger:** Monitors a specified Github repository for new issues or comments on issues. It triggers when an issue is opened or when a comment is created.
2.  **Switch:** Determines if the trigger was initiated by a new issue being opened (`"opened"`) or a comment being created (`"created"`).
    *   **New Issue (`opened`):**
        *   **IF no assignee?:** Checks if the issue has no assignees and if the issue body contains "assign me". If both conditions are met, it proceeds to assign the creator.
        *   **Assign Issue Creator:** Assigns the issue to the user who created it and add "assigned" label.
    *   **New Comment (`created`):**
        *   **IF wants to work?:** Checks if the comment body contains "assign me".
        *   **IF not assigned?:** Checks if the issue has no assignees.
            *   If the issue is not assigned, it proceeds to assign the commenter.
            *   **Assign Commenter:** Assigns the issue to the user who commented.
            *   If the issue is already assigned:
            *   **Add Comment:** Adds a comment to the issue notifying the user that the issue is already assigned to someone else.

## Services:

-   GitHub API

## Hashtags:

#n8n #GitHub #Automation #IssueManagement #SelfAssignment
