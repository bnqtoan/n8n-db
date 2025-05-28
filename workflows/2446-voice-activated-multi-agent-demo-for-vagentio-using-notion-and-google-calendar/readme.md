# My Workflow

## Use cases:

- **Virtual Assistant:** Integrate this workflow with a chat platform (like Vagent.io) to create a virtual assistant capable of managing tasks in Notion and scheduling events in Google Calendar based on user input.
- **Meeting Scheduler:** Allow users to quickly schedule meetings by parsing their requests, checking calendar availability, and creating events automatically.
- **Task Management Automation:** Streamline task creation in Notion by enabling users to define tasks through natural language, automatically capturing title, description, and priority.

## How it works:

1.  **Trigger:** The workflow is triggered either by a chat message received via webhook or a chat trigger.
2.  **Input Mapping:** The incoming message is mapped to extract the `chatInput` and `sessionId`.
3.  **Main Agent (LLM Router):** An agent powered by `gpt-4o` determines whether the input relates to task management (Notion) or calendar management (Google Calendar) and routes the request to the appropriate sub-workflow, using descriptions defined in the "toolDescription" of each sub-agent. A window buffer memory is used to provide conversation history to the agent, which helps it keep track of the conversation and take previous input into account.
4.  **Sub-Agent Execution:**
    *   **Notion Task Agent:** Another agent which determines the missing information for the creation of a task in Notion. Once enough information is gathered (title, description, priority), the task is created in Notion via an HTTP Request node. The agent has access to a window buffer memory to keep track of the conversation.
    *   **Google Calendar Agent:** Another agent which determines the missing information for the creation of a calendar event. Before creating the event, the tool will check the availability of a user with the Google Calendar API. The agent has access to a window buffer memory to keep track of the conversation.
5.  **Response:** The output from the sub-workflow is formatted and sent back to the user via webhook.

## Services:

-   Google Calendar API
-   Notion API
-   OpenAI (GPT-4o)

## Hashtags:

#n8n #automation #workflow #taskmanagement #calendarscheduling
