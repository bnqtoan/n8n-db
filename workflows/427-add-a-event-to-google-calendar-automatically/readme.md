## n8n Workflow: Add Event to Google Calendar

This workflow automates the process of adding events to a Google Calendar.

### Use cases:

*   **Quick Event Creation:**  Instantly add an event to your Google Calendar with predefined start and end times via manual execution.
*   **Testing Calendar Integration:**  Useful for testing and verifying the functionality of other workflows that integrate with Google Calendar.

### How it works:

1.  The workflow starts with a **Manual Trigger** node ("On clicking 'execute'"). This node allows you to manually initiate the workflow.
2.  Upon execution, the workflow triggers the **Google Calendar** node.
3.  The **Google Calendar** node uses the provided credentials (`googleCalendarOAuth2Api`) to connect to your Google Calendar (specified as `shaligramshraddha@gmail.com`).
4.  It then creates an event with a start time of "2020-06-25T07:00:00.000Z" and an end time of "2020-06-27T07:00:00.000Z".

### Services:

*   Google Calendar

### Hashtags:

#n8n #googlecalendar #automation #calendar #event
