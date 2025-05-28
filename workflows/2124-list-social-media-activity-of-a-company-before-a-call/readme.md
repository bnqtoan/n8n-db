# My Workflow

## Use cases:

- **Meeting Preparation:** Automatically gather recent social media activity of companies you're meeting with to stay informed and personalize your approach.
- **Sales Intelligence:** Provide sales teams with insights into potential clients' recent LinkedIn posts and Twitter activity to identify opportunities and tailor conversations.
- **Relationship Building:**  Help account managers track social media updates from key clients to foster stronger relationships and identify potential issues or successes.

## How it works:

1.  **Schedule Trigger:** The workflow starts every morning at 7 AM.
2.  **Setup:**  Sets API keys for LinkedIn and Twitter, along with the email address to send the summaries to.
3.  **Get Meetings for Today:** Fetches today's meetings from a specified Google Calendar.
4.  **Get Attendees Email Domains:** Extracts the email domains and full email addresses of the attendees (excluding the organizer) from each meeting.
5.  **Split Out:** Splits the data by email domain to handle each company separately.
6.  **Keep only ones with the domain:** Filter out objects without domain property.
7.  **Enrich Attendee Company:** Uses Clearbit to enrich the company information based on the email domain.
8.  **Switch:** Routes the workflow based on whether a LinkedIn handle or Twitter ID is found for the company.
9.  **Get Recent LinkedIn Posts / Get Recent Tweets:** Retrieves recent posts from LinkedIn (using the LinkedIn URL) and tweets from Twitter (using the Twitter ID) via RapidAPI.
10. **Format LinkedIn Posts / Format Tweets:** Formats the retrieved social media data into HTML for inclusion in an email.
11. **Combine all activity for a company:** Combines the LinkedIn and Twitter HTML snippets into a single object.
12. **Extract data for email:** Extracts data such as attendee email, start hour, and start minute.
13. **Prepare email template:** Generates an HTML email body containing the company's social media activity, and meeting time.
14. **Gmail:** Sends the email to the specified email address with the social media summary.

## Services:

-   **Google Calendar:** To retrieve meeting information.
-   **RapidAPI (Fresh LinkedIn Profile Data):** To fetch recent LinkedIn posts.
-   **RapidAPI (Twitter):** To fetch recent tweets.
-   **Clearbit:** To enrich company information based on email domain.
-   **Gmail:** To send the email with the social media summary.

## Hashtags:

#n8n #automation #socialmedia #email #linkedin #twitter
