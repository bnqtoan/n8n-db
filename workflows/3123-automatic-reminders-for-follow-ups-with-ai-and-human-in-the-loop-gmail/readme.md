# My Workflow

## Use cases:

- **Automated Sales Follow-up:** Automatically identify leads from past meetings who haven't been contacted and suggest meeting times to the user to book a follow-up.
- **AI-Powered Meeting Scheduling:** Streamline meeting scheduling by using AI to analyze past meetings and suggest similar, available time slots for future meetings.
- **Human-in-the-Loop Automation:** Implement a system where AI suggests actions (like booking meetings), but a human user must approve them before they're executed, ensuring accuracy and control.

## How it works:

1. **Schedule Trigger:** The workflow starts with a scheduled trigger that runs every morning at 6 AM.
2. **Get Past Events:** Retrieves past events (meetings) from Google Calendar within a specific time frame (2-4 days ago). The `Remove Duplicates` node ensures that the workflow processes only new events.
3. **Loop Over Items:** Iterates through each past event retrieved from Google Calendar.
4. **Check for Follow-up Emails:** Uses the Gmail node to search for emails exchanged with meeting attendees since the meeting ended.
5. **Flag to Follow Up:** Flags events where no follow-up email has been detected, marking them for potential follow-up.
6. **Only Follow Ups:** Filters the list of events, keeping only those that have been flagged for follow-up.
7. **Meeting Availability Agent:** Leverages an AI Agent to analyze the details of the previous meeting (title, date, duration) and suggest available time slots for the next meeting based on user preferences to mimic the same time or similar.
8. **Generate Message:** Creates a personalized message to the user, suggesting available time slots for a follow-up meeting, using data from the AI Agent.
9. **Send for Human Approval:** Sends the generated message to the user via Gmail, using the "send and wait for approval" mode, allowing the user to approve or modify the suggested meeting times.
10. **Meeting Booking Agent:**  An AI agent to Book the meeting using AI tools if confirmed by the user or disregard it if the user declines.

## Services:

- Google Calendar
- Gmail
- OpenAI API

## Hashtags:

#n8n #automation #ai #googlecalendar #gmail #meetingscheduling
