## n8n Workflow: Create a New Task in Asana

This workflow automates the creation of new tasks in Asana with a single click.

### Use cases:

*   **Quick Task Creation:**  Instantly create a task in Asana without manually navigating to the platform and filling out the task details.
*   **Simple Task Trigger:**  Use as a base for a more complex workflow, triggered manually, to create tasks under specific conditions.

### How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "On clicking 'execute'" node.
2.  **Create Task in Asana:** The "Asana" node then creates a new task in your specified Asana workspace. Note: This workflow requires the `asanaApi` credential to be set up. The task details (name, workspace, and other properties) need to be configured within the "Asana" node.  Currently, the node parameters are empty except for name. You'll need to set `workspace` and at least a name for your task to be successfully created.

### Services:

*   Asana

### Hashtags:

#n8n #asana #automation #taskmanagement #workflow
