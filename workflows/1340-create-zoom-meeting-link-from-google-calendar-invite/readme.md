# Google Cal to Zoom meeting

## Use cases:

- **Automated Zoom Meeting Creation:** Automatically create Zoom meetings for events scheduled in Google Calendar, ensuring a seamless transition from scheduling to virtual meetings.
- **Daily Agenda Synchronization:** Integrate with Google Calendar to create Zoom meetings for the current day's events in the morning, streamlining daily meeting setup.
- **Filter specific Events** Set up filters to specify which events you'd like a Zoom meeting to be created for based on the summary, avoiding duplication and unwanted meetings.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via the "On clicking 'execute'" node or by a daily Cron trigger at 7 AM.
2.  **Calculate Time Window:** A "Date & Time" node calculates a time window of 12 hours from the current time.
3.  **Fetch Google Calendar Events:** The "Google Calendar" node retrieves all events within the defined time window from a specified Google Calendar.
4.  **Filter Relevant Events:** The "IF Zoom meeting" node filters events, excluding those marked as "transparent" (canceled Calendly meetings), containing "signal", "minute meeting", or "in person" in the summary.
5.  **Create Zoom Meeting:** The "Zoom" node creates a new Zoom meeting for each filtered event. It extracts the meeting topic from the event summary, start time, end time, and time zone from the Google Calendar event details to set the meeting duration and time.

## Services:

-   Google Calendar
-   Zoom

## Hashtags:

#n8n #automation #workflow #googlecalendar #zoom #meeting
