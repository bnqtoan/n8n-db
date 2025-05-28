# Outlook Calendar to Notion Database Synchronization

## Use cases:

- **Automated Meeting Logging:** Automatically log all your Outlook calendar events into a Notion database for record-keeping and reporting.
- **Centralized Task Management:** Integrate your calendar events with Notion to manage tasks and projects related to specific meetings or events.
- **Historical Event Tracking:** Maintain a historical archive of all calendar events in Notion, allowing for easy search and retrieval of past meetings and appointments.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "On schedule" node, triggering the workflow periodically (based on the defined interval, in this case, every minute).
2.  **Date Calculation:** The "X days into the future" node calculates a future date (365 days from now, in this case) based on the current timestamp.
3.  **Fetch Calendar Events:** The "Get Outlook Calendar events" node retrieves events from your Outlook calendar using the Microsoft Graph API for a specific date range (from the current time to the "Future date").  The `startdatetime` and `enddatetime` are dynamically generated using the current timestamp and the future date calculated in the previous node.
4.  **Split Items:** The "Split out items" node splits the list of events returned by the HTTP Request node into individual items, allowing each event to be processed separately.
5.  **Try get database page:** The "Try get database page" node searches your Notion database for entries corresponding to a calendar event. It filter the notion database using the event ID.
6.  **Merge:** The "Merge" node combines the information of an existing event with the data coming from the Outlook API.
7.  **Conditional Branching:** The "If database page not found" node checks if the event already exists in the Notion database. If the `property_event_id` field is empty it takes the "True" branch and assumes that the event doesn't exist.
8.  **Create/Update Notion Page:**
    *   If the event doesn't exist (the "True" branch), the "Create database page" node creates a new page in the specified Notion database, populating it with data extracted from the Outlook calendar event (subject, date, link, etc.).
    *   If the event exists, the "Update database page" node updates the existing Notion page with the latest information from the Outlook calendar event.

## Services:

-   **Microsoft Outlook Calendar:** Fetches calendar events via the Microsoft Graph API.
-   **Notion:** Creates and updates pages in a specified Notion database.

## Hashtags:

#n8n #automation #workflow #outlook #notion #calendar
