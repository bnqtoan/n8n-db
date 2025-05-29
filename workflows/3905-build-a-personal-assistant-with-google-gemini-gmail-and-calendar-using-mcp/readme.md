# Personal Assistant MCP server

## Use cases:

- **Smart Task Management:** Automate tasks based on natural language commands via chat, such as creating calendar events, drafting emails, or updating contact information in a Google Sheet.
- **Personalized Reminders & Notifications:** Get summaries of upcoming meetings, email reminders, or updates on specific contacts directly through your personal assistant.
- **Streamlined Information Retrieval:** Quickly find specific emails, contact details, or calendar events using natural language queries processed by the AI agent.

## How it works:

This workflow creates a personal assistant that integrates with chat services, Google services (Calendar, Gmail, Sheets), and a Memory Chain Persistence (MCP) server.

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  **AI Agent Processing:** The message is passed to a "Personal Assistant" node, powered by a "Google Gemini Chat Model" for natural language processing.
3.  **Memory Management:** The "Simple Memory" node provides short-term memory to the AI agent, allowing it to maintain context during conversations.
4.  **MCP Server Integration:** The AI agent uses the "MCP Client" to communicate with an "MCP Server Trigger" that facilitates interaction with various tools.
5.  **Service Interactions:** Based on the chat command, the AI agent can perform actions such as:
    -   **Google Calendar:** Create ("Create event"), find ("Find single event", "Find multiple events"), or update ("Update event") calendar events.
    -   **Gmail:** Draft emails ("Draft email") or search for emails ("Find emails").
    -   **Google Sheets:** Add ("Add new row"), find ("Find row"), or update ("Update row") contact information.

## Services:

-   Google Gemini (via Google Palm API)
-   Google Calendar
-   Gmail
-   Google Sheets
-   Memory Chain Persistence(MCP) Server

## Hashtags:

#n8n #automation #personalassistant #AIagent #googleworkspace
