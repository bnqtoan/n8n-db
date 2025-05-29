# Daily Calendar Brief

## Use cases:

*   **Daily Briefing Email:** Automatically sends a daily email with a summary of your calendar events and relevant information gathered from your emails.
*   **Meeting Preparation:** Gathers information about external attendees and related email correspondence to help you prepare for meetings.
*   **Personalized Schedule Summary:** Creates a personalized summary of your schedule, formatted in HTML, and delivered to your inbox.

## How it works:

1.  **Schedule Trigger ("Run Daily"):** The workflow starts daily based on the schedule set in the node.
2.  **Read Calendar Events ("Read Calendar Events"):** Fetches your calendar events for the day from Google Calendar.
3.  **Parse Attendees ("Parse Attendees"):** Extracts the attendees from each calendar event.
4.  **Identify External Attendees ("Identify External Attendees"):** Filters the attendees to identify external participants (likely based on email domain).
5.  **Read Latest Emails ("Read Latest Emails"):** Reads your latest emails from Gmail, potentially filtering for emails related to the external attendees.
6.  **OpenRouter Chat Model ("OpenRouter Chat Model"):** Uses the OpenRouter Chat Model to process information.
7.  **Simple Memory ("Simple Memory"):** Uses Langchain memory to store data from the conversation.
8.  **Research and Develop Brief ("Research and Develop Brief"):** Uses a Langchain Agent to research and develop a brief based on the calendar events, attendee information, and email content.
9.  **Merge Events ("Merge Events"):** Merges schedule with any relevant context found in the emails.
10. **OpenRouter Chat Model1 ("OpenRouter Chat Model1"):** Uses the OpenRouter Chat Model to process information.
11. **Summarize Schedule ("Summarize Schedule"):** Summarizes the combined calendar events and research brief using a Langchain LLM Chain.
12. **Markdown to HTML ("Markdown to HTML"):** Converts the summarized schedule from Markdown to HTML format.
13.  **Send Email ("Send Email"):** Sends an email via Gmail containing the HTML-formatted schedule summary.

## Services:

*   Google Calendar
*   Gmail
*   OpenRouter

## Hashtags:

#n8n #automation #googlecalendar #gmail #dailybrief #langchain
