# MCP Google Calendar

## Use cases:

*   **AI-Powered Calendar Management:** This workflow can be used within an AI chatbot or assistant to allow users to manage their Google Calendar events directly through natural language commands.
*   **Automated Event Updates:** Automatically update, create, delete or fetch events based on triggers from external systems.
*   **Meeting Scheduling with Attendees:** Streamline the process of scheduling meetings by automatically creating Google Calendar events with specified attendees.

## How it works:

1.  **MCP Server Trigger:** The workflow is initiated by the "MCP Server Trigger" node, acting as a webhook endpoint that listens for incoming requests, likely from an AI tool or similar service.
2.  **Google Calendar Operations:** Based on the trigger, the workflow can then perform various actions on Google Calendar:
    *   **Update Event:** Modifies existing calendar events.
    *   **Delete Event:** Removes events from the calendar.
    *   **Get Events:** Retrieves details of existing events.
    *   **Create Event:** Adds new events to the calendar.
    *   **Create Event with Attendee:** Create a new event and add attendees.
3.  **AI Tool Connection**: Each Google Calendar operation has a connection pointing to the "MCP Server Trigger" node using "ai_tool" type. This indicates that the Google Calendar operations are triggered via an AI tool.

## Services:

*   Google Calendar

## Hashtags:

#n8n #googlecalendar #automation #ai #calendar
