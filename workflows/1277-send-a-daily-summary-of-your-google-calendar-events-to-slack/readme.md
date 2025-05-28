# Google Calendar to Slack Daily Meeting Reminder

## Use cases:

- **Daily Meeting Summary:** Automatically sends a daily summary of meetings scheduled in Google Calendar to a specific Slack channel.
- **Personal Assistant:** Acts as a personal assistant by reminding users of their daily schedule first thing in the morning.
- **Team Coordination:** Informs a team about upcoming meetings, ensuring everyone is aware of the day's agenda.

## How it works:

1.  **Cron Trigger:** The workflow starts with a Cron node, triggering the workflow at 6:00 AM.
2.  **Google Calendar:** Fetches all events from a specified Google Calendar. It uses the "getAll" operation to retrieve all events from the calendar "xxxxx@gmail.com" based on the credentials from the Google Calendar OAuth2 API.
3.  **Function:** Adds the current date and day of the week to the data.
4.  **Date & Time (Event Start Date Only):** Extracts the date from the event's start time and reformats it to "DD/MM/YYYY" in the Asia/Qatar timezone. It stores the formatted date in the "Event Start Date Only" property.
5.  **Date & Time1 (Today's Date):** Gets the current date and reformats it to "DD/MM/YYYY" in the Asia/Qatar timezone, storing it in the "Today's Date" property.
6.  **Set:** Creates variables with the event name, the event date, Google calendar URL, Location and the event's original Start Time
7.  **Merge:** Combines the data from the Google Calendar events and the current date information into a single stream of data.
8.  **IF:** Checks if the event date matches today's date. If they match, it proceeds to the next step.
9.  **Set1:** Sets the  the "Name" using the event's name, "Time" to the original event's start time and "URL" for the Google calendar URL.
10. **Date & Time2:** Extracts time from event's start time.
11. **Function1:** Creates a formatted Slack message containing a list of the user's meetings for the day, including the event name, time, and Google Calendar URL.
12. **Slack:** Sends the generated message to a specified Slack channel "virtual-assistant" using the provided Slack API credentials.

## Services:

-   Google Calendar
-   Slack

## Hashtags:

#n8n #GoogleCalendar #Slack #Automation #MeetingReminder
