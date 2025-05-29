# MCP_google_calendar

## Use cases:

- **AI-Powered Calendar Management:** Enable an AI agent to manage a user's Google Calendar, including creating, updating, deleting, and retrieving events based on natural language requests.
- **Automated Event Scheduling:** Automate the process of scheduling events by checking for time slot availability and creating events accordingly, integrating with other systems via API calls.
- **Time Conflict Resolution:** Detect and resolve time conflicts when scheduling or updating events, ensuring that no double-bookings occur.

## How it works:

This workflow acts as a comprehensive Google Calendar management system, designed to be triggered either by an external webhook (MCP Server Trigger) or by another n8n workflow (When Executed by Another Workflow).

1.  **Trigger:** The workflow starts either via a webhook call or when triggered by another workflow, receiving parameters like `operation`, `startDate`, `endDate`, `eventId`, and `timeZone`.
2.  **Operation Routing:** The `Operation` node acts as a switch, directing the workflow to different branches based on the desired action: `getEvent`, `deleteEvent`, `createEvent`, `updateEvent`, or `getEventData`.
3.  **Data Formatting:** The `map_data` node formats the input data, converting the start and end dates to ISO format based on the specified time zone.
4.  **Calendar Operations:**
    -   `createEvent`: Checks availability using `check_availability_to_create` node that calls the Google Calendar API (`n8n-nodes-base.googleCalendar`) to see if the time slot is free. If available, it creates a new event. If busy, the workflow stops with an error.
    -   `updateEvent`: `update_calendar` updates an existing event.
    -   `deleteEvent`: `delete_event1` deletes an event using the provided event ID.
    -   `getEventData`: `get_event_in_time_gap` retrieves events data using the provided time gap.
    -    `validate_busy_time`: it validates if the gap of time is already busy
    -    `get_events_in_gap_time`: get event data in a gap of time.
5.  **Google Calendar Interaction:** The workflow interacts with the Google Calendar API to perform calendar operations such as checking availability, creating events, updating events, and deleting events.
6.  **Response:** For queries (e.g., `getEventData`), the workflow formats the data and responds to the request.

## Services:

-   Google Calendar API

## Hashtags:

#n8n #googlecalendar #automation #workflow #calendarmanagement
