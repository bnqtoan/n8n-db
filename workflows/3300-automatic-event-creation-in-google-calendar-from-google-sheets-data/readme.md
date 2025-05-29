# Automate Event Creation in Google Calendar from Google Sheets

## Use cases:

- **Automated Event Scheduling:** Automatically create events in Google Calendar whenever a new event is added to a Google Sheet, saving time and reducing manual data entry.
- **Meeting and Appointment Management:** Streamline the process of scheduling meetings or appointments by automatically syncing new entries from a sheet into a shared calendar.
- **Workshop and Training Coordination:** Simplify the organization of workshops or training sessions by automatically creating events in Google Calendar with the relevant details extracted from a Google Sheet.

## How it works:

This workflow automates the process of creating events in Google Calendar based on data from a Google Sheet.

1.  **New Event Entry Listener (Google Sheets Trigger):** The workflow starts by monitoring a specific Google Sheet for new row entries. When a new row is added, it triggers the workflow.
2.  **Event Date Formatter (Function Node):** The "Event Date Formatter" node receives the data from the Google Sheets trigger and uses JavaScript code to format the event date. It extracts the relevant fields, such as "Event Name", "Event Description", and "Location", and formats the "Event Start Date" into the YYYY-MM-DD format required by Google Calendar.  It also ensures that the date includes the current year, if the year is missing.
3.  **Google Calendar Event Creator (Google Calendar Node):** The formatted event data is then passed to the "Google Calendar Event Creator" node, which uses the Google Calendar API to create a new event. The event's start and end dates, summary (title), location, description, and other settings are populated based on the data from the previous nodes. The event is set as "transparent" (showMeAs) and guests can invite others (guestsCanInviteOthers). The event color is also set (color).

## Services:

-   Google Sheets
-   Google Calendar

## Hashtags:

#n8n #automation #googleSheets #googleCalendar #eventManagement
