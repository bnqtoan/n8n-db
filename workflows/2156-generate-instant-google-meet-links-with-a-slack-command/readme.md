# Generate google meet links in slack

## Use cases:
- **Quick Meeting Scheduling:**  Generate and share Google Meet links directly within a Slack channel for ad-hoc meetings.
- **Automated Stand-ups:**  Create a simple slash command to quickly generate a meeting link for daily stand-up meetings, posting the link to the channel.
- **On-the-fly Collaboration:**  Facilitate instant collaboration by generating a Google Meet link for immediate screen sharing and discussion.

## How it works:
1.  **Webhook Trigger (Slack Command):** The workflow starts when a user types a slash command (e.g., `/meet`) in Slack. The Webhook node receives the POST request from Slack.
2.  **Create Event with Google Meet Link:** The `Create event with google meet link` node uses the Google Calendar API to create a temporary calendar event with a Google Meet link. The event is set to start immediately and last for 15 minutes.
3.  **Send Message with Google Meet Link:** The `Send msg with Google meet link` node retrieves the generated Google Meet link from the calendar event and sends it as a message to the Slack channel where the command was initiated.
4.  **Delete Temporary Calendar Event:** The `Delete temporary calendar event` node deletes the temporary event from the calendar, cleaning up the calendar after the link has been shared.

## Services:
-   Slack
-   Google Calendar API

## Hashtags:
#n8n #slack #googlemeet #automation #slashcommand
