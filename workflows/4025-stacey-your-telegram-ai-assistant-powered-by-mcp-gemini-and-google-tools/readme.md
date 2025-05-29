# AI Assistant Updated

## Use Cases:

- **Smart Task Management:** This workflow can be used as a personal assistant to manage emails, calendar events, and contact data automatically. For example, it can schedule meetings, respond to emails, and update contact information in Google Sheets based on Telegram messages or other triggers.
- **Content Generation and Research:** The workflow can assist in content creation by using the Tavily search tool and the Content Creator Agent to research topics and generate relevant content based on user input.
- **AI-Powered Customer Support:** By integrating with Telegram and Gmail, this workflow can serve as a basic AI-powered customer support system, automatically responding to queries, creating drafts, and labeling emails based on their content.

## How it works:

1.  **Trigger:** The workflow is initiated either by a Telegram message via the "Telegram Trigger1" node or by an "MCP Server Trigger".
2.  **Input Processing:**
    -   If triggered by Telegram, the "Switch input" node directs the workflow to either download a file (if one is attached) using the "Download File" node or process the text of the message via the "Set 'Text'" node. If a file is downloaded, it's transcribed using the "Transcribe" node.
    -   The MCP Server trigger directly sends the input for AI processing
3.  **AI Agent Orchestration:** The "AI Agent" node, powered by a Gemini model ("Gemini model" node) and utilizing memory ("User Context" node), processes the input. The agent can utilize various tools, including:
    -   Tavily for web searches
    -   Content Creator Agent for content generation
    -   Calculator
    -   Google Calendar tools (Create Event, Get Events, Delete Event, Update Event, Create Event with Attendee)
    -   Gmail tools (Send Email, Get Emails, Create Draft, Email Reply, Get Labels, Label Emails, Mark Unread)
    -   Google Sheets tools (update contact data, search contact data)
    -   MCP Client Tool for external communication
4.  **Response and Output:**
    -   The AI Agent generates a response based on the input and the tools it uses.
    -   The "response parser" node formats the response.
    -   The final response is sent back to the user via Telegram using the "Response1" node.

## Services:

-   Telegram
-   Google Calendar
-   Gmail
-   Google Sheets
-   Tavily API

## Hashtags:

#n8n #automation #AIassistant #workflow #contentcreation
