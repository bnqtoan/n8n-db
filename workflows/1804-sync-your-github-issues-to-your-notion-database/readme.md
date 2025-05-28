# GitHub Issue to Notion Database

## Use cases:

- **Issue Tracking:** Automatically creates a Notion database page for every new GitHub issue, allowing for centralized tracking and management of issues within Notion.
- **Real-time Updates:** Keeps the Notion database synchronized with GitHub issues. When an issue is edited, deleted, closed, or reopened in GitHub, the corresponding Notion page is updated accordingly.
- **Project Management:** Integrates GitHub issue tracking with Notion project management, enabling teams to link issues to specific tasks, projects, or documentation within Notion.

## How it works:

1.  **GitHub Issue Trigger:** The workflow starts with a "Trigger on issues" node, which listens for specific events (e.g., opening, editing, deleting, closing, or reopening) on issues within a designated GitHub repository.
2.  **Conditional Branching (IF):** An "IF" node checks if the issue was "opened".
    *   **If True (Issue Opened):**
        *   **Create database page:** Create a new page in a Notion database, automatically populate the page title, Issue ID, and a link to the issue.
    *   **If False (Issue Edited/Deleted/Closed/Reopened):**
        *   **Create custom Notion filters:** A "Function" node generates a JSON filter to locate the corresponding Notion page based on the GitHub issue ID. This is needed to find and update existing entries when an issue is modified.
        *   **Find database page:** A "Notion" node retrieves the relevant database page using the filter created by the "Function" node.
        *   **Switch:** A "Switch" node routes the workflow based on the specific action performed on the GitHub issue (edited, deleted, closed, reopened).
            *   **Edited:** Updates the title of the Notion page with the current issue title.
            *   **Deleted:** Archives (deletes) the Notion page.
            *   **Closed:** Updates a "Closed" checkbox property on the Notion page to `true`.
            *   **Reopened:** Clears the "Closed" checkbox property on the Notion page.

## Services:

*   GitHub
*   Notion

## Hashtags:

#n8n #GitHub #Notion #Automation #IssueTracking
