# Meeting Briefing Generator

## Use cases:

- Automatically generate a briefing document for upcoming meetings by gathering information about attendees and their companies.
- Quickly prepare for sales calls by researching potential clients and their business needs.
- Enhance networking by having readily available background information on individuals attending events.

## How it works:

1.  **Google Calendar Trigger:** The workflow starts when a new event is created in a specified Google Calendar.
2.  **Edit Fields:** Sets some variables such as context and email for later use in the process.
3.  **Split Out Attendees:** Extracts the list of attendees from the Google Calendar event.
4.  **Filter Out Myself:** Excludes the workflow user from the attendee list.
5.  **For Each Attendee:** Iterates through each attendee in the list.
6.  **Is Company Email?:** Determine is the email is a company email.
7.  **Company Prompt:** If the email is a company email, it generates a prompt for company research using the company website domain.
8.  **Person Prompt:** Generates a prompt for personal research on the attendee using their email address and additional context.
9.  **Research Company:** Sends a request to the OpenAI Responses API to research the attendee's company based on the generated prompt.
10. **Research Person:** Sends a request to the OpenAI Responses API to research the attendee based on the generated prompt.
11. **Collect Fields:** Gathers the researched information (company details and person details) and the attendee's email address into a single data structure.
12. **Combine All Research:** Combines the data from all attendees.
13. **Write HTML:** Formats the collected data into a markdown structure.
14. **Send Report:** Sends the formatted report via Gmail to a specified email address.

## Services:

-   Google Calendar
-   OpenAI Responses API
-   Gmail API

## Hashtags:

#n8n #automation #meetingprep #AISearch #briefing
