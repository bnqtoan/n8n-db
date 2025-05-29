# ULTIMATE Personal Todoist Agent

## Use cases:

- **Smart Task Creation:** Automatically create tasks in Todoist with due dates, priorities, and project assignments based on natural language input. For example, "Remind me to pay bills next Tuesday at 6 pm" will create a task with the specified due date and time.
- **Efficient Task Management:** Use natural language to find, update, or mark tasks as complete. For example, "Mark 'Buy groceries' as done" will close the corresponding task in Todoist.
- **Project and Section Organization:** Manage Todoist projects and sections using natural language. For example, create a "Vacation Planning" project or move a task to the "Next Week" section within a project.

## How it works:

1.  **Trigger:** The workflow is triggered either by a chat message (e.g., from Telegram, Slack) or when executed by another n8n workflow. The `When chat message received` and `When Executed by Another Workflow` nodes handle these triggers, respectively.
2.  **Orchestration (Optional):** The `Orchestrator` node (an optional Langchain Agent) receives the initial message and uses the `Call Todoist Agent` tool to manage Todoist tasks. A `Simple Memory` node stores conversation history for context.
3.  **Todoist Agent:**
    -   The `Todoist Agent` node, powered by a language model (`OpenAI Chat Model`), processes the natural language input. It determines the appropriate action to take based on the input (e.g., create a task, get tasks, update a project).
    -   The agent uses the Todoist API to perform the requested actions.  Nodes like `Get All Tasks`, `Create a Task`, `Update a Task`, `Get All Projects`, `Create a Project`, and others interact with the Todoist API.
4.  **Todoist Actions:** Various Todoist Tool and HTTP Request nodes perform actions on Todoist:
    -   Tasks: `Get All Tasks`, `Get a Task`, `Create a Task`, `Update a Task`, `Mark Task as Done`, `Reopen a Task`, `Move a Task`.
    -   Projects: `Get All Projects`, `Get a Project`, `Create a Project`, `Update a Project`, `Archive a Project`, `Get Archived Projects`, `Unarchive a Project`.
    -   Sections: `Get All Sections`, `Get a Section`, `Create a Section`, `Update a Section`, `Delete a Section`.
    -   Labels: `Get All Labels`, `Get a Label`, `Create a Label`, `Update a Label`, `Delete a Label`.
    -   Comments: `Add a Comment`
5.  **Output:** The workflow performs the actions and confirms them. The agent uses the relevant parameters from the AI, such as `Task_ID`, `Project_ID`, `Content`, and `Due_Date_Time`, to interact with Todoist.

## Services:

-   **Todoist:** A task management application for organizing and managing tasks.
-   **OpenAI:** Utilized for natural language processing and understanding user requests.

## Hashtags:

#n8n #automation #workflow #todoist #openai #taskmanagement
