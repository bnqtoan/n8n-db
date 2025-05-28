# Realtime Notion Todoist 2-way Sync Template

## Use cases:

-   **Centralized Task Management:** Keep tasks synchronized between Notion and Todoist, ensuring that updates in one platform are automatically reflected in the other. This eliminates the need to manually update tasks in multiple places.
-   **Enhanced Productivity:** Streamline your workflow by using Notion for planning and documentation while leveraging Todoist for daily task management and reminders. The seamless synchronization ensures no task is missed.
-   **Team Collaboration:** Enable teams to collaborate effectively by keeping task statuses and details consistent across Notion and Todoist. This is particularly useful for teams that use Notion for project overviews and Todoist for individual task assignments.

## How it works:

This workflow provides a bi-directional synchronization between Notion databases and Todoist projects. It consists of two main parts:
 1. **Full Sync:** Scheduled to run daily, retrieves all open tasks from Notion and Todoist, compares them, and updates each platform to reflect the latest changes.
 2. **Real-time Sync:** Uses webhooks to instantly synchronize updates between Notion and Todoist, ensuring changes are immediately reflected in both platforms. It manages task creation, updates, completion, and deletion.
 The workflow uses Redis to prevent endless loops. To configure the sync, you will need to generate a config file and update several credentials and webhooks. Use the setup described at the top of the document.

## Services:

-   **Notion API:** Used to read and write data to Notion databases, enabling the workflow to fetch tasks, update properties, and create new pages.
-   **Todoist API:** Used to manage tasks within Todoist, allowing the workflow to create, update, complete, reopen, and delete tasks.
-   **Redis:** Used for caching to prevent sync loops and data inconsistency by storing temporary flags and IDs.
-   **Gmail API:** Sends a daily summary of changes made by the workflow via email.

## Hashtags:

#n8n #Notion #Todoist #automation #sync #taskmanagement
