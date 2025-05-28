# Calendar Event Automation with AI

## Use cases:

- **Automated Event Creation from Slack:** Streamline event planning by automatically creating Google Calendar events from messages in a designated Slack channel.
- **Attendee Management:** Automatically add users who react with a specific emoji (e.g., ✅) to the event in Slack to the Google Calendar event as attendees.
- **AI-Powered Event Details:** Leverage AI to extract and format event titles, dates, times, locations, and descriptions from user messages.

## How it works:

1.  **Slack Monitoring:** The workflow is triggered by a schedule and searches a specific Slack channel for messages containing the calendar emoji and the term `in:#n8n-events has::calendar:`.
2.  **Event Existence Check:** For each message, the workflow checks if a corresponding event already exists in Google Calendar based on a unique identifier (`#event[a-z0-9]+`) in the replies.
3.  **AI-Powered Event Creation (if no existing event):**
    *   An AI agent uses the OpenAI Chat Model to create a professional event calendar events based on user message, extract details such as event title, start/end dates and times, and location from the message. It uses SerpAPI and Wikipedia tools to enhance location information.
    *   The structured output is parsed by the Structured Output Parser and then send data to google calendar and created new event.
    *   A confirmation message is sent to the Slack channel, including a link to the newly created event and the event ID.
4.  **Attendee Management (if event exists):**
    *   The workflow retrieves reactions to the original Slack message and identifies users who reacted with a specific emoji (e.g., ✅).
    *   It checks if these users are already added as attendees to the Google Calendar event.
    *   If not, the workflow adds them to the event, using their Slack profile email.

## Services:

-   Slack
-   Google Calendar
-   OpenAI
-   SerpAPI
-   Wikipedia

## Hashtags:

#n8n #automation #workflow #calendar #slack #googlecalendar #AI #eventmanagement
