# _infra: Automatically document n8n workflows directly in Notion database

## Use cases:

- **Automated Documentation:** Automatically create and update documentation for n8n workflows in a Notion database, ensuring that the documentation stays current with the latest workflow changes.
- **Centralized Workflow Management:** Maintain a centralized repository of workflow information, including details like creation date, update date, active status, and links to the workflows, all within Notion.
- **Change Tracking and Notifications:** Track changes to workflows, automatically back them up to a GitHub repository, and notify relevant teams (e.g., internal infrastructure) about updates or errors via Slack.

## How it works:

This workflow automates the process of documenting n8n workflows in a Notion database and backing them up to GitHub. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow starts with a schedule, running every Monday at 1 AM.
2.  **Get Active Workflows:** It fetches all active n8n workflows tagged with `internal-infra`.
3.  **Check for Updates:** It filters workflows updated within the last 7 days.
4.  **Extract Key Fields:** Extracts key information from each workflow, such as name, ID, active status, creation date, update date, and the workflow definition itself.
5.  **Query Notion:** It queries a Notion database to check if a page already exists for the given workflow ID.
6.  **AI Summary:** It uses OpenAI to summarize what the N8N plugin does.
7.  **Conditional Branching:**
    *   **New Workflow:** If no Notion page is found, it creates a new page in the Notion database with the extracted workflow information and the AI summary.
    *   **Existing Workflow:** If a Notion page exists, it updates the existing page with the latest workflow information and the AI summary.
8.  **GitHub Backup:** It attempts to update the workflow definition in a GitHub repository. If the file doesn't exist, it creates a new file.
9.  **Notifications:**
    *   Sends a Slack notification to the `internal-infra` channel when a new workflow is pushed to Notion.
    *   Sends a Slack notification when a workflow is updated in Notion.
    *   Sends a warning notification if the workflow lacks an error workflow setup.
    *   Sends a warning notification if it fails to upload new N8N workflow to repo.

## Services:

-   **Notion:** Used for storing and managing workflow documentation.
-   **GitHub:** Used for backing up workflow definitions.
-   **Slack:** Used for sending notifications about workflow updates, errors, and backup status.
-   **OpenAI:** Used to summarize what the N8N plugin does.

## Hashtags:

#n8n #automation #workflow #documentation #Notion #GitHub #Slack
