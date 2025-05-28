# Social Media Activity Summary for Upcoming Meetings

## Use cases:

- **Sales Preparation:** A sales representative can use this workflow to automatically gather and summarize recent social media activity of a company they are meeting with, providing valuable context and talking points.
- **Relationship Building:** Professionals can leverage this workflow to stay informed about the recent activities of their contacts, enabling more personalized and relevant communication.
- **Meeting Intelligence:** Automatically provide a summary of social media activity to meeting attendees before the meeting to ensure everyone is up-to-date on the company's recent news and discussions.

## How it works:

1.  **Schedule Trigger:** The workflow starts every morning at 7 AM using the "Every morning @ 7" node.
2.  **Setup:** Sets API keys for LinkedIn and Twitter, and email addresses that should receive the summary.
3.  **Get Meetings for Today:** Fetches all meetings from Google Calendar for the current day using the "Get meetings for today" node and the provided Google Calendar credentials.
4.  **Get Attendees Email Domains:** Extract email domains and emails of all non-organizer attendees for each meeting.
5.  **Split Out:** Splits the data based on the attendee's email domain to handle each domain separately.
6.  **Keep only ones with the domain:** Filters the domains which exists.
7.  **Enrich Attendee Company:** Uses Clearbit to enrich company information based on the email domain.
8.  **Switch:** Determines if the company has LinkedIn or Twitter handles and routes execution accordingly.
9.  **Get Recent LinkedIn Posts/Get latest tweets:** Gets recent posts from LinkedIn (using RapidAPI's Fresh LinkedIn Profile Data API) or Twitter (using RapidAPI's Twitter API).
10. **Extract important data/Extract important data again:** Extracts the name of the company, recent social media posts, and meeting details.
11. **Combine all activity for a company:** Combines the data from LinkedIn and Twitter into a single object.
12. **Ask AI to summerize:** Sends the combined data to OpenAI (GPT-4) to generate a summary of the company's recent social media activity.
13. **Extract data for email:** Extracts the data to prepare email.
14. **Prepare email template:** Formats the summary into an HTML email template.
15. **Gmail:** Sends the email to the specified recipients with the subject line "Latest social activity for: [Company Name]".

## Services:

-   Google Calendar
-   Clearbit
-   RapidAPI (Fresh LinkedIn Profile Data, Twitter)
-   OpenAI
-   Gmail

## Hashtags:

#n8n #automation #socialmedia #meetingprep #salesintelligence
