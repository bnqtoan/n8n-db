# Meeting Transcript Analyzer and Follow-Up Automation

## Use cases:

- **Meeting Summary and Action Item Extraction:** Automatically summarize meeting transcripts to identify key discussion points, decisions made, and action items assigned to attendees.
- **Automated Calendar Event Creation:** Based on the meeting transcript, automatically schedule follow-up meetings with the relevant attendees, including pre-populating the event description with context from the original meeting.
- **Intelligent Meeting Management:** Enhance meeting productivity by providing participants with concise summaries, assigned tasks, and automatically scheduling follow-up meetings, thus reducing the administrative overhead.

## How it works:

1. **Get Calendar Event:** The workflow starts by retrieving a specific meeting event from Google Calendar, identified by its event ID. This provides context about the meeting, such as attendees, creator, and schedule.
2. **Retrieve Meeting Transcript:** It then uses the meeting ID from Google Calendar to retrieve the associated transcript from Google Meet. This involves querying the Google Meet API to find the conference record and then retrieving the transcript file, converting it to PDF format.
3. **Analyze Transcript with AI Agent:** The PDF transcript is loaded and passed to an AI Agent (powered by OpenAI) for analysis. The AI Agent summarizes the meeting, identifies key discussion points per attendee, extracts action items, and identifies any requests to create follow-up calendar events.  The agent uses a structured output parser to help it format the information for downstream use.
4. **Schedule Meeting Tool:** The AI Agent is equipped with a tool, a workflow trigger in n8n, to create calendar events.
5. **Create Follow-Up Calendar Events (if requested):** If the AI Agent identifies a need to create follow-up meetings, it triggers a separate workflow. This workflow receives event details (title, description, start/end times, attendees) from the AI Agent.
6. **Add Attendees to Invite:** The workflow extracts the list of attendees from the query and iteratively adds them to the calendar event invite.
7. **Respond:** Finishes with a response from the created calendar.

## Services:

- Google Calendar: Used for retrieving meeting details and creating/updating calendar events.
- Google Meet API: Used for retrieving meeting transcripts based on the calendar event.
- Google Drive: Used to host the transcript.
- OpenAI: Powers the AI Agent for transcript analysis and action item extraction.

## Hashtags:

#n8n #automation #workflow #ai #meetingManagement #googleCalendar #googleMeet #OpenAI
