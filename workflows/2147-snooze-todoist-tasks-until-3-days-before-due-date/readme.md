# Todoist Snooze Workflow

## Use cases:

- **Automated Task Snoozing:** Automatically moves tasks from your Todoist inbox to a "snoozed" project when they have a due date, and then returns them to the inbox a few days before the due date.
- **Declutter Inbox:** Keep your Todoist inbox clean by automatically moving tasks with due dates to a separate project until they become relevant.
- **Time-Based Task Management:** Ensures tasks reappear in your inbox at an appropriate time before their deadline, preventing them from being forgotten.

## How it works:

1.  **Triggers:** The workflow uses two schedule triggers. One runs every 5 minutes to process inbox tasks, and another runs every day at 5 AM to process snoozed tasks.
2.  **Get Inbox Tasks:** The "Get inbox tasks to snooze" node retrieves all tasks from a specified Todoist inbox project. The "Get snoozed tasks" retrieves tasks from a specified "snoozed" project.
3.  **Filter Subtasks:** The "if task is not a subtask" node filters out subtasks.
4.  **Check for Due Date:** "If task has due date" Checks if task has due date, if not it will do nothing.
5.  **Calculate Unsnooze Date:** The "Get date to unsnooze" node calculates the date when a task should be moved back to the inbox (3 days before the due date, by default).
6.  **Check unsnooze date:** The "if after unsnooze date" node checks if current date is after the calculated "unsnooze date".
7.  **Set Target Project ID:** Based on the evaluation on the previous step, the "Set inbox project id" node, and "Set snoozed project id" node, assigns the target project ID for tasks being moved either to the inbox or to the "snoozed" project.
8.  **Filter Same Project:** The "If not same project" node filters out tasks that are already in target project to prevent redundant operations.
9.  **Set Move Arguments:** The "Set args to move" node prepares the necessary arguments for moving tasks between projects.
10. **Generate UUID:** The "Generate unique uuid for move" node creates a unique ID for each move operation.
11. **Merge Commands:** The "Merge all items into a list" node aggregates all the individual move commands into a single list.
12. **Move the tasks:** The "Move the tasks" node sends a request to the Todoist API to move the tasks between projects using HTTP request.

## Services:

-   Todoist API

## Hashtags:

#n8n #automation #todoist #taskmanagement #workflow
