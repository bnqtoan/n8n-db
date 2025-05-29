# [Trello (Free) + Google Calendar] Move Card -> Create Meeting

## Use cases:

-   Automatically create a Google Calendar event when a Trello card is moved to a specific list (e.g., "Scheduled").
-   Keep meeting attendees informed by automatically adding a Google Meet link to the Trello card after the calendar event is created.
-   Streamline project management and scheduling by linking Trello tasks directly to calendar events.

## How it works:

1.  **Trigger Move Card in Trello:** The workflow starts when a Trello card is moved between lists.
2.  **Filter Action:** This node filters the Trello event to ensure the workflow only proceeds for relevant card movements (specific list).
3.  **Trello: Get Card Info:** Retrieves detailed information about the moved Trello card, such as description and members.
4.  **Get Email:** Extracts email addresses from the Trello card's description (assumed to be formatted in a parsable way).
5.  **Separates Emails:** Splits the string of emails into an array, to be correctly passed in the google calendar node.
6.  **Calendar: Create Meeting:** Creates a new event in Google Calendar using the card's information (title, description) and extracted email addresses as invitees.
7.  **Trello: Add Meeting Link:** Updates the Trello card with a link to the newly created Google Calendar event, specifically for the Google Meet link.

## Services:

-   Trello
-   Google Calendar

## Hashtags:

#n8n #Trello #GoogleCalendar #Automation #ProjectManagement
