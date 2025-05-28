# Todoist Daily Task Automation

## Use cases:

*   **Daily Task Repetition:** Automatically recreates tasks with a "daily" label in Todoist every day, ensuring recurring tasks are always present.
*   **Template-Based Task Creation:** Copies tasks from a template project in Todoist, parses due dates and days from the task description, and creates them in the Inbox for the current day.
*   **Scheduled Task Management:** Executes tasks based on a schedule trigger, automating the process of adding and removing daily tasks.

## How it works:

This workflow automates the creation and management of daily tasks in Todoist. It consists of two main flows:

1.  **Daily Task Refresh:**
    *   Triggers every day at 5:00 AM using a **Schedule Trigger** node.
    *   Retrieves all tasks from the "Inbox" project in Todoist using the **Todoist** node.
    *   Checks if the task list is not empty using an **If** node.
    *   Filters tasks that have the label "daily" using an **If** node that verifies if the `labels` array includes "daily".
    *   Deletes tasks with the "daily" label from the Inbox using a **Todoist** node. This ensures that previous day's tasks are removed before new ones are created.

2.  **Template Task Creation:**
    *   Triggers every day at 5:10 AM using a **Schedule Trigger** node.
    *   Fetches all tasks from a specified template project in Todoist using a **Todoist** node.
    *   Parses task details (days, due time) from the task description using a **Code** node.  The code extracts "days" and "due" information from the description field, allowing for flexible scheduling.
    *   Filters tasks to only keep those that match the current day using a **Filter** node. It checks if the current day of the week (e.g., "mon", "tues") is present in the "days" extracted from the task description.
    *   Creates new tasks in the Inbox with the "daily" label using a **Todoist** node. It sets the content and description of the new tasks based on the parsed details.

## Services:

*   Todoist

## Hashtags:

#n8n #todoist #automation #dailytasks #taskmanagement
