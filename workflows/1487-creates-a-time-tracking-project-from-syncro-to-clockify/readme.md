# Syncro to Clockify

## Use cases:

*   **Automated Time Tracking:** Automatically create Clockify time entries when new tickets are created in Syncro, ensuring accurate time tracking for support or project work.
*   **Streamlined Billing:** By linking Syncro tickets to Clockify time entries, generate more accurate and detailed invoices for clients.
*   **Improved Reporting:** Gain better insights into time spent on specific clients or ticket types through automated data synchronization between Syncro and Clockify.

## How it works:

1.  **Webhook Trigger (Webhook):** The workflow starts when a POST request is sent to the specified webhook URL in n8n.  This webhook is configured to listen for events from Syncro. The `path` parameter defines the unique endpoint `/43d196b0-63c4-440a-aaf6-9d893907cf3c` where Syncro should send the data. It receives all entries from the Syncro POST request
2.  **Create Clockify Time Entry (Clockify):** The data received from the webhook is then passed to the Clockify node. This node uses the Clockify API (authenticated via credentials) to create a new time entry. The `name` of the time entry is dynamically generated using data from the Syncro ticket, specifically the ticket number, customer business name, and ticket ID. The workspace ID is specified for the Clockify account.

## Services:

*   Syncro
*   Clockify API

## Hashtags:

#n8n #automation #clockify #syncro #timetracking
