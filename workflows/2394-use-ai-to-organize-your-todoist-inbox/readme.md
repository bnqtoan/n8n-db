# Todoist Task Prioritizer with OpenAI

## Use cases:

- **Automated Task Management:** Automatically prioritize tasks in your Todoist inbox based on their content and assign them to relevant projects.
- **Improved Productivity:** Streamline your workflow by ensuring that new tasks are quickly categorized and assigned appropriate priority levels.
- **Contextual Task Prioritization:** Use OpenAI to understand the context of your tasks and assign priority based on project relevance.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger node, which periodically activates the workflow.
2.  **Your Projects:** A Set node stores a mapping of project names to priority levels (e.g., `apartment: 1`, `health: 2`, `german: 3`).
3.  **Get inbox tasks:** Retrieves all tasks from your Todoist inbox using the "Get inbox tasks" node, connected to your Todoist account.
4.  **If task is not a subtask:** Filter only the main tasks in your inbox, eliminating subtasks.
5.  **Categorize:** The task's content is sent to OpenAI (GPT-4O-MINI) to categorize it into a pre-defined project. The prompt instructs OpenAI to return the project name.
6.  **If other or ai hallucinates:** Validates if the categorized project from OpenAI exists in the projects configured in the "Your Projects" node.
7.  **Update priority in todoist:** Finally, the workflow updates the priority of the task in Todoist based on the project name provided by OpenAI. It uses the mapping defined in the "Your Projects" node to determine the correct priority level.

## Services:

-   **Todoist:** A task management application used to store and organize tasks.
-   **OpenAI:** An artificial intelligence research and deployment company, used here for text categorization.

## Hashtags:

#n8n #automation #todoist #openai #taskmanagement
