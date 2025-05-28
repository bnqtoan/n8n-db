# Microsoft To Do Task Management Workflow

## Use cases:

- **Automated Task Creation:** Automatically create a new task in Microsoft To Do when a specific trigger occurs (in this case, manually triggered but could be an email, form submission, etc.).
- **Task Status Updates:** Update the status of a task to "in progress" after it has been created.
- **Task Retrieval (Hypothetical):** While the provided workflow does not fully implement task retrieval, based on the node type, it can be extended to retrieve task details for further processing or reporting.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Create Task:** A new task is created in Microsoft To Do using the "Microsoft To Do" node. The task's title is set to "Document Microsoft To Do node", and its importance is set to "high". The task is added to a specified task list (taskListId).
3.  **Update Task Status:** The "Microsoft To Do1" node updates the task created in the previous step. It uses the ID of the newly created task (obtained from the previous node's output) and sets its status to "inProgress." It uses the same Task List ID as the previous node.
4.  **Task Retrieval:** The "Microsoft To Do2" node retrieves the taks. This node needs the `operation` parameter configured to work as intended.

## Services:

-   Microsoft To Do

## Hashtags:

#n8n #automation #MicrosoftToDo #taskmanagement #workflow
