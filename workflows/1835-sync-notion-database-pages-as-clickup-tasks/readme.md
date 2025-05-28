# Notion & ClickUp Sync

## Use cases:

- **Two-way task synchronization:** Keep tasks updated in both Notion and ClickUp, ensuring that changes in one platform are automatically reflected in the other.
- **Project Management:** Streamline project management by linking tasks between Notion databases and ClickUp projects, providing a unified view of task status and deadlines.
- **Automated Reporting:** Generate reports in Notion based on task statuses in ClickUp, providing real-time visibility into project progress.

## How it works:

This workflow automates the synchronization of tasks between Notion and ClickUp. It consists of two main parts:

1.  **Notion to ClickUp:**
    -   The workflow starts with the "On updated database page" Notion trigger, which monitors a specific Notion database for page updates.
    -   When a page is updated, the trigger sends the updated information to the "Update an existing task" ClickUp node.
    -   The "Update an existing task" node uses the Notion page's data (Task name, Status, and Deadline) to update the corresponding task in ClickUp, identified by the "ClickUp ID" property in Notion.
2.  **ClickUp to Notion:**
    -   The workflow uses the "On task status updated" ClickUp trigger, that monitors ClickUp for changes in task statuses in a specific team.
    -   When a task's status is updated, the "Get database page by ClickUp ID" Notion node searches a Notion database for a page with a "ClickUp ID" property that matches the updated ClickUp task ID.
    -   Once the corresponding Notion page is found, the "Update the status of found database page" Notion node updates the "Status" property of the Notion page to match the new status from ClickUp.

## Services:

-   Notion
-   ClickUp

## Hashtags:

#n8n #Notion #ClickUp #Automation #TaskManagement
