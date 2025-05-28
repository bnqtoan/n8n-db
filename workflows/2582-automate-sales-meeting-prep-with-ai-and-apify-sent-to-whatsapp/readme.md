# AI Meeting Assistant

## Use cases:

- **Pre-meeting Briefing:** Busy professionals can use this workflow to automatically receive a summary of upcoming meetings, including attendee information, recent email correspondence, and LinkedIn activity, enabling them to quickly prepare and make a strong impression.
- **Enhanced Networking:** Sales professionals can use this workflow to gather quick insights about meeting attendees, including their interests and recent activities, facilitating more engaging and productive conversations.
- **Time Efficiency:** Executives with packed schedules can leverage this workflow to stay informed about their meetings without spending hours researching attendees, thus optimizing their time management.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger that runs hourly to check for upcoming meetings.
2.  **Check For Upcoming Meetings:** The Google Calendar node retrieves meetings scheduled within the next hour.
3.  **Extract Attendee Information:** The "Extract Attendee Information" node uses an AI model to extract attendee details, such as email addresses and LinkedIn URLs, from the meeting invite's summary and description.
4.  **Attendee Information Retrieval:** It splits the attendees and, based on the available information(email or LinkedIn URL), calls the subworkflows "Get Correspondance" and "Get LinkedIn Profile & Activity", if an email or LinkedIn URL is available for an attendee respectively.
5.  **Fetch Last Email Correspondence:** If an email is available, the workflow uses the Gmail node to fetch the latest email exchange with each attendee, summarizing the email content for quick context.
6.  **Scrape LinkedIn Profile & Recent Activity:** The workflow uses Apify to scrape LinkedIn profiles and extract recent activity, providing insights into the attendee's professional background and current interests.
7.  **AI Summarization:** With both email and LinkedIn data, the workflow employs OpenAI Chat Model to generate concise summaries of the attendees' recent correspondence and LinkedIn activity.
8.  **Generate Pre-Meeting Notification:** A LLM is used to prepare a personalised message for the user summarising details of the meeting and of the attendees.
9.  **Send Notification via WhatsApp:** The final notification, including meeting details and attendee insights, is sent to the user's WhatsApp.

## Services:

-   Google Calendar
-   Gmail
-   OpenAI
-   Apify
-   WhatsApp Business Cloud

## Hashtags:

#n8n #automation #AI #meetingAssistant #productivity
