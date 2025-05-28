# Zammad Open Tickets

## Use cases:

- **Daily Stand-up Automation:** Automatically post a summary of open, new, pending close, and pending reminder tickets to a designated Zulip stream every morning to facilitate daily stand-up meetings.
- **Real-time Ticket Status Monitoring:** Quickly get an overview of the current status of all tickets in Zammad with a breakdown by state (new, open, pending).
- **Performance Tracking:** Track changes in ticket status over time by archiving the daily summaries, allowing for performance analysis and identification of potential bottlenecks.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via the "On clicking 'execute'" node or automatically by the "Standup Cron" node, which is set to run every weekday at 8:30 AM.
2.  **List Tickets:** The "List Tickets" node retrieves all tickets from Zammad using the Zammad API. It utilizes the "Zammad Token Auth account" credential for authentication.
3.  **Ticket Filtering:** The "Ticket Filtering" node processes the retrieved tickets. It filters and counts the tickets based on their `state_id` to categorize them into "new," "open," "pendingReminder," and "pendingClose" statuses.
4.  **Notify for Standup:** The "Notify for Standup" node sends a formatted summary of the ticket counts to a specified Zulip stream and topic. The summary includes the number of tickets in each status category and sends it to the "customer support" stream, on the "tickets" topic. The "Zulip n8n Bot" credential is used for authentication.

## Services:

-   Zammad
-   Zulip

## Hashtags:

#n8n #automation #zammad #zulip #ticketing
