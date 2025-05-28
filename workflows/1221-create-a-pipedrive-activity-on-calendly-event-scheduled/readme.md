# Calendly Meeting to Pipedrive Activity and Slack Reminder

## Use cases:

*   Automatically create activities in Pipedrive whenever a new meeting is scheduled via Calendly. This ensures sales teams have a record of upcoming calls and meetings.
*   Send a Slack reminder to the meeting organizer (based on Calendly assignment) after the meeting ends, prompting them to write notes and mark the task as complete.
*   Streamline the sales workflow by automating activity creation, reminders, and follow-ups, reducing manual effort and improving efficiency.

## How it works:

1.  **Calendly Trigger:** The workflow starts when a new invitee is created in Calendly (i.e., a meeting is scheduled).
2.  **Date & Time:** Calculates the feedback time by adding 15 minutes to the event's end time.
3.  **Pipedrive:** Creates a new activity in Pipedrive. The activity details include the call subject (event type from Calendly) and the name of the invitee.
4.  **Wait:** Pauses the workflow until the calculated feedback time.
5.  **Slack:** Sends a message to a designated Slack channel reminding the meeting organizer to write notes from the call and mark the task as complete. The message includes the event type, invitee name, and a placeholder for a link to the call notes.

## Services:

*   Calendly
*   Pipedrive
*   Slack

## Hashtags:

#n8n #calendly #pipedrive #slack #automation
