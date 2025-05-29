# MCP_CALENDAR

## Use cases:

*   **Scheduling and managing appointments for a dental practice:** The workflow can be used to check availability, create, update, delete, and retrieve appointments within a Google Calendar for a dental office (ODONTOLOGIA).
*   **Automated calendar integration for a service-based business:** This workflow can serve as a foundation for integrating an AI tool with a Google Calendar, allowing users to manage calendar events programmatically based on AI-generated requests.
*   **Building a custom calendar management tool:** By exposing the webhook, a developer can create a front-end interface that interacts with the Google Calendar via the n8n workflow.

## How it works:

1.  The workflow starts with an "MCP_CALENDAR" node, which is an n8n Langchain trigger node. This node listens for incoming HTTP requests at the `/mcp/:tool/calendar` endpoint. The `:tool` parameter in the path suggests this is designed to integrate with an AI tool, with the `tool` determining the action to take.
2.  Based on the incoming request, different Google Calendar Tool nodes are triggered:
    *   **AVALIABILITY\_CALENDAR:** Checks the availability of the specified calendar within a given time range (`Start_Time` and `End_Time`). The timezone is explicitly set to "America/Sao\_Paulo".
    *   **GET\_ALL\_CALENDAR:** Retrieves all events from the specified calendar within a given time range (`Before` and `After`), ordering the results by start time and expanding recurring events.
    *   **DELETE\_CALENDAR:** Deletes a specific event from the calendar, identified by its `Event_ID`.
    *   **UPDATE\_CALENDAR:** Updates a specific event in the calendar, identified by its `Event_ID`. It allows for updating specific fields and toggling default reminders (`Use_Default_Reminders`).
    *   **GET\_CALENDAR:** Retrieves a specific event from the calendar, identified by its `Event_ID`.
    *   **CREATE\_CALENDAR:** Creates a new event in the calendar with a specified start (`Start`) and end (`End`) time, description (`Description`), and allows toggling default reminders (`Use_Default_Reminders`).
3.  All Google Calendar Tool nodes connect to the same Google Calendar (ODONTOLOGIA calendar with ID `a57a3781407f42b1ad7fe24ce76f558dc6c86fea5f349b7fd39747a2294c1654@group.calendar.google.com`) using the same Google Calendar OAuth2 API credentials.
4.  The parameters for each Google Calendar Tool use n8n's `$fromAI` expression, to let an AI decide the parameters, suggesting that an AI tool will determine the parameters for each operation on the calendar.

## Services:

*   Google Calendar API

## Hashtags:

#n8n #automation #googlecalendar #calendarmanagement #aiintegration
