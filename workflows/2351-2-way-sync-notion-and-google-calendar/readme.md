# My Workflow

## Use Cases:

- **Two-way Synchronization between Notion and Google Calendar:** Keeps your tasks or meeting schedules synchronized between your Notion workspace and Google Calendar, ensuring consistency across both platforms.
- **Automated Calendar Event Management:** Automatically updates Google Calendar events when corresponding entries are modified in Notion, reflecting changes such as date, time, or description.
- **Calendar Cleanup and Maintenance:** Automatically deletes Google Calendar events when the corresponding Notion pages are deleted, keeping your calendar free of outdated or irrelevant entries.

## How it works:

This workflow automates the synchronization of events between Notion and Google Calendar. It uses triggers to detect updates in both platforms and then performs actions to keep them in sync. Here's a breakdown:

1.  **Notion Updates to Google Calendar:**
    - The workflow starts with a Notion trigger that detects when a page is updated in a specified Notion database (Meetings or Tasks).
    - It checks if the page has been edited by a user (to avoid infinite loops) using an "If" node.
    - It retrieves global variables like database and calendar IDs.
    - It checks to see if a Google Calendar ID exists in Notion.
    - It determines whether a Google Calendar event already exists using the Google Calendar ID stored in Notion. If it exists, the workflow updates the existing event; otherwise, it creates a new event.
    - The workflow determines if the event is an 'all-day' or 'dateTime' event and updates it accordingly with the Google Calendar API.

2.  **Google Calendar Updates to Notion:**
    - The workflow uses a Google Calendar trigger to detect when an event is created or updated in Google Calendar.
    - Filters events to process only those updated by a user, preventing infinite loops.
    - For all-day events, it subtracts a day from the `end_date` to align with Notion's date handling.
    - Updates corresponding Notion pages with the Google Calendar event details. If not found, it will create them.

3.  **Google Calendar Deletion to Notion**
    - The workflow uses a Google Calendar trigger to detect when an event is deleted in Google Calendar.
    - Finds the related pages in Notion and filters them by calendar ID.
    - Deletes the corresponding Notion pages.

4.  **Scheduled Calendar Cleanup**
    - The workflow uses a schedule trigger to run every three minutes.
    - It retrieves global variables like database and calendar IDs.
    - Finds any deleted pages in Notion and deletes the corresponding events from Google Calendar.

Key Nodes:

*   **Notion Trigger:** Detects page updates in Notion.
*   **Google Calendar Trigger:** Detects event updates or creations in Google Calendar.
*   **If Node:** Conditional logic to determine if the event is an 'all-day' or 'dateTime' event
*   **HTTP Request:** Interacts with the Google Calendar API to create, update, or delete events.
*   **Notion Node:** Interacts with the Notion API to create, update, or delete pages.
*   **Date Time Node:** Handles date and time conversions to ensure compatibility between Notion and Google Calendar.
*   **Set Node:** Sets global variables and other workflow parameters.
*   **Split In Batches Node (Loop):** Handles multiple scenarios and events.

## Services:

-   Google Calendar API
-   Notion API

## Hashtags:

#n8n #automation #workflow #googlecalendar #notion
