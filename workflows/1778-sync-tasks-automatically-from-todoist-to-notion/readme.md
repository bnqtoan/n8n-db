# Sync Todoist tasks to Notion

## Use cases:

*   **Automatic Task Synchronization:** Automatically syncs new tasks labeled "send-to-notion" in Todoist to a specified Notion database, ensuring tasks are mirrored across platforms.
*   **Task Management and Archiving:** Creates a centralized repository in Notion for Todoist tasks, including archiving or reporting purposes.
*   **Cross-Platform Collaboration:** Facilitates team collaboration by making Todoist tasks accessible and manageable within a Notion workspace, potentially enriching them with more detailed context or project-specific information.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a schedule trigger ("On schedule"), which executes the workflow periodically based on a defined interval (in this case, every second).
2.  **Get Tasks from Todoist:** It retrieves all tasks from Todoist that have a specific label ("send-to-notion") using the "Get all tasks with specific label" node. This node authenticates with Todoist using OAuth2 credentials.
3.  **Add Tasks to Notion:** The workflow then adds these tasks to a specified Notion database ("My Todoist Tasks") using the "Add to Notion database" node. The title of the Notion page is set to the content of the Todoist task, and the Todoist task ID is saved as a number property within the Notion page.
4.  **Update Task on Todoist:** After successfully adding the task to Notion, the "Replace label on task" node updates the original Todoist task. This involves adding the "sent" label, adding a Notion link to the description, and appending the original description of the task. This node also authenticates with Todoist using OAuth2.

## Services:

*   Todoist
*   Notion

## Hashtags:

#n8n #Todoist #Notion #Automation #TaskManagement
