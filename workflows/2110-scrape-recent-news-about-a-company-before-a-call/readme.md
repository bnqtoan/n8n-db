# Latest Company News Before a Call

## Use cases:

*   **Meeting Preparation:** Automatically gather and receive the latest news about a company before a scheduled meeting or call, enabling informed and relevant conversations.
*   **Lead Monitoring:** Stay updated on news related to key leads and prospects, ensuring you're aware of any recent developments or announcements.
*   **Daily Briefing:** Receive a daily email with news summaries for all companies you have meetings with that day, providing a quick overview of important updates.

## How it works:

1.  **Schedule Trigger:** The workflow starts every morning at 7:00 AM.
2.  **Setup:** Configures API keys, news age, max articles and emails, setting up the workflow's parameters.
3.  **Get Meetings for Today:** Fetches all meetings scheduled for the current day from a specified Google Calendar.
4.  **Filter Meetings:** Filters the meetings to only include those with summaries starting with "call with" or "meeting with".
5.  **Extract Company Name:** Extracts the company name from the meeting summary.
6.  **Get Latest News:** Uses the extracted company name to query the News API for the latest articles.
7.  **Format for Email:** Formats the retrieved news articles into an HTML email.
8.  **Send News:** Sends the formatted email with the news summaries to the specified email addresses using Gmail. If no meetings are found, the workflow ends at the "No meetings today" node.

## Services:

*   **News API:** Used to fetch the latest news articles about companies.
*   **Google Calendar:** Used to retrieve scheduled meetings for the day.
*   **Gmail:** Used to send the formatted email with news summaries.

## Hashtags:

#n8n #automation #news #googlecalendar #email #meetingprep
