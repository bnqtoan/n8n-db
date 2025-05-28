# Reschedule overdue Asana tasks and clean up completed tasks

## Use cases:

- **Automated Task Management:** Automatically reschedule overdue tasks in Asana to the current day, ensuring that deadlines are addressed.
- **Asana Workspace Cleanup:** Regularly clean up completed tasks in Asana, keeping the workspace organized and focused on active projects.
- **Daily Task Prioritization:** By rescheduling overdue tasks each morning, users can easily prioritize their work for the day.

## How it works:

1.  **Scheduler:** The workflow starts with a `Everyday at 7am` trigger, initiating the process daily at 7:00 AM.
2.  **Fetch Tasks:** The `Get user tasks` node retrieves a list of tasks assigned to a specific user within a defined workspace in Asana. It filters tasks to only include those not completed since the current day.
3.  **Task Details:** For each task, the `Get task infos` node retrieves detailed information from Asana using the task's ID (`gid`).
4.  **Check Task Status:** The `Task is open?` node checks if the task is not completed (`completed` is `false`). If the task is open, the workflow proceeds to check the due date. If the task is completed, the workflow proceeds to delete it.
5.  **Check Due Date:** The `Due date in the past?` node determines if the task's due date is in the past by comparing the `due_on` field with the current date.
6.  **Reschedule Overdue Tasks:** If the due date is in the past, the `Set due date to Today` node updates the task in Asana, setting the `due_on` field to the current date.
7. **Clean up task** If the task is completed, the `Clean up task` delete the task
8.  **Keep Asana Tidy:** By automating these steps, the workflow ensures that tasks are up-to-date and the Asana workspace remains clutter-free.

## Services:

-   Asana

## Hashtags:

#n8n #Asana #Automation #TaskManagement #Productivity
