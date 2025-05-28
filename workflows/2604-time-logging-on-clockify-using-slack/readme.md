# ClockifyBlockiaWorkflow

## Use cases:

- **Automated Time Logging:** An engineer can interact with the Slack bot to automatically create time entries in Clockify based on natural language instructions, eliminating manual data entry.
- **Time Entry Management via Chat:** Update or delete existing time entries in Clockify through a conversational interface in Slack, making it easier to correct mistakes or adjust logs on the fly.
- **Project and Client Discovery:** Query Clockify for project and client information directly from Slack, useful when starting a new task and needing to find the correct IDs or details.

## How it works:

1.  **Slack Trigger:** The workflow is initiated when the Slack bot is mentioned in a channel.
2.  **Execution Data:** Captures the context of the Slack message (channel, timestamp, user).
3.  **ClockifyBlockia (Langchain Agent):** The core of the workflow. It leverages a Large Language Model (LLM) to understand the user's intent and orchestrate actions.
    *   The agent has access to several tools that performs actions with Clockify:
        *   Get Clients: get a list of clockify clients, filtering is possible by client name.
        *   Get Projects: get a list of clockify projects, filtering is possible by project name or by client.
        *   Get All Time Entries: Get a list of time entries for the logged in user. Filtering by date periods is possible.
        *   Create New Time Entry: Creates a new time entry in Clockify.
        *   Update Time Entry: Updates an existing time entry in Clockify.
        *   Delete Time Entry: Delete a time entry in Clockify.
        *   Current loggedin user: Get the current logged in clockify user.
    *   The agent also has access to generic tools such as:
        *   Calculator: perform calculations
        *   DateConverter: converts human dates to milliseconds format.
4.  **OpenAI Chat Model:** Powers the conversational agent, interpreting user requests and generating responses.
5.  **Window Buffer Memory:** Saves conversation history.
6.  **Send reply:** The agent responds to the user in the same Slack channel.

## Services:

-   Clockify: Time tracking and management platform.
-   OpenAI: Language model for natural language processing.
-   Slack: Messaging and collaboration platform.

## Hashtags:

#n8n #automation #clockify #slack #timetracking
