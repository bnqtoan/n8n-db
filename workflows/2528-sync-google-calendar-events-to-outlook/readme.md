# Google calendar to Outlook

## Use cases:

- **Automatic Outlook Calendar Synchronization:**  Whenever a new event is created in your Google Calendar, it is automatically created in your Outlook Calendar, ensuring both calendars are always in sync.
- **Event Cancellation Management:** If an event is cancelled in Google Calendar, the corresponding event is automatically deleted from your Outlook Calendar, preventing confusion and double bookings.
- **Notification of Cancellations:** When an event is cancelled, an email notification is sent via Outlook, keeping relevant parties informed.

## How it works:

This workflow automates the synchronization of events between Google Calendar and Microsoft Outlook.

1.  **Incoming Event Trigger (Google Calendar):**  Listens for new events created in your specified Google Calendar ("your\_email@gmail.com").
2.  **Create Outlook Event (Microsoft Outlook):** When a new event is detected, this node creates a corresponding event in your Outlook Calendar. It copies the event's subject, start time, end time, description, and HTML link from the Google Calendar event.
3.  **Cancel Event Trigger (Google Calendar):**  Listens for cancelled events in your Google Calendar ("your\_email@gmail.com").
4.  **Get Event to Cancel (Microsoft Outlook):** When a cancellation is detected, this node searches for the corresponding event in your Outlook Calendar. It uses the Google Calendar event summary (title) to find the matching event.
5.  **Delete Event (Microsoft Outlook):**  Deletes the identified event from your Outlook Calendar.
6.  **Merge:** Merges the result of `Delete Event` and `Get Event to Cancel`.
7.  **Send E-mail with details (Microsoft Outlook):** Sends an email notification via Outlook to "your\_email@work.zom" informing about the event cancellation. The email subject includes the original event subject and the word "Cancelled". The email body contains a simple HTML message indicating that the event was cancelled via Google Calendar.

## Services:

-   Google Calendar
-   Microsoft Outlook

## Hashtags:

#n8n #googleCalendar #outlook #calendarSync #automation
