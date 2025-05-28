# Google Calendar to Trello Task Automation

## Use cases:

- **Daily Task Management:** Automatically create Trello cards from your Google Calendar events to manage your daily tasks and meetings.
- **Meeting Documentation:** Generate Trello cards for meetings with pre-filled descriptions to capture purpose, next steps, decisions, and discussions.
- **Recurring Task Filtering:** Exclude recurring events like daily check-ins or breaks from being created as Trello cards to avoid clutter.

## How it works:

1.  **Trigger:** The workflow starts every day at 8:00 AM using a "Cron" trigger node.
2.  **Date Range:** The "Get Start & End of day" Function node determines the start and end times for the current day.
3.  **Fetch Events:** The "Get Todays Events" Google Calendar node retrieves all events from your specified calendar within the defined date range.
4.  **Batching:** The "Split Events In Batches" node splits the retrieved events into individual items for processing.
5.  **Set Card Details:** The "Set Trello Card Details" node extracts the event summary (name), description, start date/time (due date), and HTML link (URL) from each Google Calendar event and prepares them for the Trello card.
6.  **Filter Recurring Events:** The "Remove Recurring Tasks" If node filters out specific recurring events based on their summary (e.g., "Check email and start day," "Lunch," etc.).  Events matching these summaries will be routed to the "Delete Task" node.
7.  **Create Trello Card:** The "Create Trello Cards" Trello node creates a new card on your Trello board using the extracted details from the "Set Trello Card Details" node.  The card description includes sections for meeting purpose, next steps, decisions made, and discussion points. The URL of the calendar invite will be attached to the card.
8.  **Delete Task:** The "Delete Task" NoOp node does nothing, it´s there for filtering out the task for debugging and prevent them to go to Trello.

## Services:

-   Google Calendar
-   Trello

## Hashtags:

#n8n #automation #googlecalendar #trello #taskmanagement
