# Zendesk to Slack

## Use cases:

*   **Daily Unassigned Ticket Notifications:** Automatically post a summary of all unassigned Zendesk tickets to a designated Slack channel every day. This helps teams quickly identify and address pending issues.
*   **Real-time Ticket Alerts:** Trigger the workflow manually to get an immediate overview of unassigned tickets, which is useful during peak hours or when staffing levels change.
*   **Escalation Reminders:** Use the workflow to send reminders about tickets that have been unassigned for a specific period, preventing them from being overlooked.

## How it works:

This workflow retrieves unassigned tickets from Zendesk and sends a formatted message to a Slack channel.

1.  **Trigger:** The workflow can be triggered in two ways:
    *   **Manually:** By clicking the "Execute" button in n8n.
    *   **Scheduled:** Using a Cron node, configured to run daily at 4:30 PM.
2.  **Zendesk Node:** Queries Zendesk for all tickets that are currently unassigned and have a status less than pending. The "returnAll": true option ensures all matching tickets are retrieved.
3.  **Function Node:** This node formats the data received from Zendesk into a readable message for Slack.  It iterates through each ticket, extracting the ticket ID, status, and subject.  It then constructs a message containing a list of ticket URLs with their status and subject.  The ticket URL is modified to point to the agent interface in Zendesk.
4.  **Slack Node:**  Sends the formatted message generated by the Function node to a specified Slack channel. The message includes the list of unassigned tickets.

## Services:

*   Zendesk
*   Slack

## Hashtags:

#n8n #automation #zendesk #slack #ticketing
