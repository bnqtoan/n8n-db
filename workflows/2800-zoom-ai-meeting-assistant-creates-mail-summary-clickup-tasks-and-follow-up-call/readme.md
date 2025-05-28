# Zoom AI Meeting Assistant

## Use cases:

- Automatically generate and send meeting summaries to participants after each Zoom meeting.
- Extract action items from meeting transcripts and create tasks in ClickUp for specific team members.
- Schedule follow-up meetings in Outlook Calendar based on discussions and decisions made during the Zoom meeting.

## How it works:

1.  The workflow is triggered manually or can be scheduled.
2.  It retrieves data of the last Zoom meeting from Zoom API for scheduled meeting.
3.  Filters the events of the last 24 hours.
4.  Retrieves the transcript URL and gets the Zoom meeting transcript using an HTTP Request node. If there is no recording or transcript then throw the error message.
5.  Extracts the text content from the transcript file.
6.  Formats the transcript text, cleaning it up for further processing.
7.  Retrieves participants data from Zoom API for the meeting.
8.  It uses the data to creates a meeting summary, action items, and important dates, using an AI agent for natural language processing.
9.  Formats the result as HTML for better readability.
10. Sends the formatted summary via email to the participants via SMTP.
11. It uses the data to creates tasks and a follow-up call via AI Agent using Create Tasks and Create follow-up call tools for ClickUp and Outlook.

## Services:

- Zoom (API and HTTP Request)
- Microsoft Outlook
- ClickUp
- SMTP
- Anthropic API (AI Model)

## Hashtags:

#n8n #automation #zoom #meetingSummary #ai
