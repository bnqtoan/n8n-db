# Awork Task Status Rollback with Dependencies and Subtask Check

## Use Cases

- **Enforce Task Dependencies:** Prevent users from prematurely closing tasks that depend on other incomplete tasks, ensuring a logical workflow sequence.
- **Subtask Completion Enforcement:** Ensure all subtasks of a parent task are completed before the parent task can be marked as done, maintaining project integrity.
- **Automated Status Correction:** Automatically revert the status of a task if its dependencies or subtasks are not yet complete, providing immediate feedback to the user.

## How it Works

1.  **Webhook Trigger:** The workflow starts when a task's status is changed in Awork, triggering a webhook to n8n.
2.  **Configuration:** Retrieves settings like finished state labels, and flags for dependencies and tree structure.
3.  **Status Change Check:** Filters the webhook payload to only process task status changes.
4.  **"Done" Status Verification:** Checks if the new task status indicates that the task has been marked as "done."
5.  **Dependency Check:** If enabled, it loads all linked tasks and filters for any that are still open. If open dependencies exist, the workflow rolls back the task status.
6.  **Tree Structure Check:** If enabled, and if the task has subtasks, the workflow retrieves all open subtasks. If any subtasks are open, the workflow rolls back the task status.
7.  **Status Rollback:** The workflow reverts the task to its previous status.
8.  **Comment Addition (Optional):** If configured, adds a comment to the task explaining why the status was rolled back (either due to dependencies or subtasks).

## Services

-   Awork (Task Management API)

## Hashtags

#n8n #automation #awork #taskmanagement #workflow
