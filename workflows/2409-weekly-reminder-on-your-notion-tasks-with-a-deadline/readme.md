# Weekly Notion Tasks Update

## Use cases:

- **Weekly Task Summary:** Automatically sends a weekly email with a summary of tasks from a Notion database, helping users stay on top of their deadlines.
- **Overdue Task Alerts:** Highlights overdue tasks in the email, ensuring critical items are addressed promptly.
- **Personalized Task Updates:** Delivers a customized email with a link to the Notion database, logo, and tasks, making it easy to access and manage tasks directly.

## How it works:

1.  **Trigger:** The workflow is triggered every Monday at 9 AM using the "Schedule Trigger" node.  Alternatively, the workflow can be manually triggered for testing.
2.  **Set Variables:** The "Set Workflow vars" node defines global variables like logo path, Pushover user key, Notion database URL, and user email.  **Note:** These values need to be configured in the n8n workflow.
3.  **Fetch Tasks from Notion:** The "Notion" node retrieves all pages from a specified Notion database ("databasePage", "getAll"). You must have a Notion API credential configured. This node is configured to fetch tasks from a specific Notion database (Database ID: b1e11f75-06df-42b4-8dd9-557ba937978d).
4.  **Filter for Deadline:** The "Filter for deadline" node filters the tasks based on if a deadline exists or not.
5.  **Sort Tasks:** The "Sort by closest deadline" node sorts the tasks by the "property_deadline.start" field, bringing upcoming deadlines to the top.
6.  **Conditional Branching:** The "If deadline is overdue" node checks if a task is overdue comparing the current date/time with the deadline set in Notion.
7.  **HTML Generation per Task:** The "HTML for Task" node generates an HTML snippet for each task, displaying the task name, deadline, priority, status and tags.
8.  **Aggregate Tasks:**  The workflow splits tasks into two groups (overdue and due to) and aggregates them into lists using the "Aggregate" nodes.
9.  **HTML Generation for Task Groups:** The "HTML overdue List" and "HTML due to List" nodes creates a HTML template for each task group, displaying if there are overdue tasks or upcoming deadlines.
10. **Merge Groups:** The "Merge groups" node merges the two lists of tasks into one object.
11. **Final Aggregation:** The "Aggregate" node then combines the resulting overdue and upcoming task lists into a single `html_groups` array.
12. **Create the Full Email Template:** The "HTML" node creates the final HTML email template, which includes styles, the logo, a link to the Notion database, and the lists of tasks.
13. **Send Email:** The "Send Email" node sends the email to the user specified in the "Set Workflow vars" node. You must have a SMTP credential configured.
14. **Send Push Notification:** Finally, the "Pushover" node sends a push notification to the user's device via Pushover. A Pushover credential is required.  **Note:** The user key needs to be configured in the n8n workflow "Set Workflow vars" node.

## Services:

-   Notion
-   Pushover
-   SMTP (for sending emails)

## Hashtags:

#n8n #automation #notion #productivity #email
