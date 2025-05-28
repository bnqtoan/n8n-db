# Sync Discord scheduled events to Google Calendar

## Use cases:

- **Automated Event Management:** Automatically create and update events in Google Calendar based on scheduled events in a Discord server, ensuring your calendar always reflects the latest Discord event information.
- **Community Engagement:** Keep your community informed about upcoming events by syncing Discord schedules to a shared Google Calendar, making it easier for members to track and attend events.
- **Time Management:** Centralize event information from Discord into Google Calendar for personal or team time management, providing a unified view of schedules.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a schedule trigger (`On schedule`), which determines how often the workflow runs.
2.  **Configuration:** The `Configure` node sets the `guild_id` for the Discord server.
3.  **List Discord Events:** The `List scheduled events from Discord` node retrieves a list of scheduled events from a specified Discord server using the Discord API.
4.  **Get Events:** For each event retrieved from Discord, the `Get events` node attempts to retrieve the corresponding event from Google Calendar based on the Discord event ID. The workflow continues even if this step fails (`continueOnFail` is set to `true`).
5.  **Create or Update?:** The `Create or update?` node checks if the event ID exists in Google Calendar. If the ID is present, the event will be updated. If not, the event will be created.
6.  **Update Event Details:** If the event already exists in Google Calendar, the `Update event details` node updates the event's details (start time, end time, summary, location, and description) using data from the Discord event.
7.  **Create Event:** If the event does not exist in Google Calendar, the `Create event` node creates a new event in Google Calendar using the details from the Discord event.

## Services:

-   **Discord API:** Used to fetch scheduled events from a Discord server.
-   **Google Calendar API:** Used to retrieve, create, and update events in Google Calendar.

## Hashtags:

#n8n #Discord #GoogleCalendar #Automation #EventManagement
