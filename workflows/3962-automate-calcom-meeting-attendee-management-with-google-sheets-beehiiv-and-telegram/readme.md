# Meeting booked - to newsletter and CRM

## Use cases:

- Automatically add new meeting attendees to a Google Sheets spreadsheet for record-keeping and analysis.
- Subscribe new meeting attendees to a Beehiiv newsletter to nurture leads and keep them informed.
- Receive a Telegram notification whenever a new meeting is booked and an attendee is added to the newsletter and CRM.

## How it works:

1.  **Cal.com Trigger ("on New Booking"):** This workflow starts when a new booking is created in Cal.com.
2.  **Split Attendees:** Splits the attendees array from the Cal.com booking data into individual items.
3.  **Set Data:** Sets static data values such as Telegram chat ID, Beehiiv API key, and Beehiiv publication ID.
4.  **Set Attendee:** Extracts the attendee's name, email, and timezone from the split data.
5.  **Google Sheets ("Add users"):** Appends a new row to a specified Google Sheets spreadsheet with meeting details and attendee information.
6.  **Beehiiv ("Add subscriber"):** Adds the attendee as a subscriber to a Beehiiv newsletter using the Beehiiv API.
7.  **Telegram ("notify in channel"):** Sends a Telegram message to a specified chat ID with details of the new booking and attendee.

## Services:

-   Cal.com: For booking and scheduling meetings.
-   Google Sheets: For storing meeting and attendee data.
-   Beehiiv: For managing and sending newsletters.
-   Telegram: For sending notifications.

## Hashtags:

#n8n #automation #newsletter #CRM #meetings
