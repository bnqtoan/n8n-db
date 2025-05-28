# Create Unique Jira Tickets from Splunk Alerts

## Use cases:

- **Automated Incident Management:** Automatically creates Jira tickets from Splunk alerts, ensuring timely tracking and resolution of security incidents or system anomalies.
- **Alert Prioritization:** Streamlines the process of triaging Splunk alerts by automatically creating corresponding Jira tickets, which can then be prioritized and assigned to the appropriate teams.
- **Centralized Alerting System**: Creates a system where Splunk alerts are automatically pushed to a Jira project enabling single pane of glass monitoring and response.

## How it works:

1.  **Webhook (Splunk Alert Trigger):** The workflow is triggered by a webhook, configured to receive alerts from Splunk.  Splunk must be configured to send alerts to the n8n webhook URL, instructions can be found [here](https://docs.splunk.com/observability/en/admin/notif-services/webhook.html).
2.  **Set Host Name (Normalize Hostname):** Extracts and normalizes the `host.name` from the Splunk alert payload, removing special characters to ensure compatibility with Jira.  The node then sets it as a variable, `splunk-host-name`
3.  **Search Ticket (Check for Existing Ticket):** Searches for existing Jira tickets based on the normalized `host.name` extracted from the Splunk alert using a JQL query.
4.  **IF Ticket Not Exists (Conditional Branching):** Checks if a Jira ticket with the specified `host.name` already exists. If no ticket is found, it proceeds to create one. If a ticket is found, the workflow will add a comment.
5.  **Create Ticket (Create New Ticket):** Creates a new Jira ticket with details extracted from the Splunk alert, including the host name, description, and other relevant information. The custom field will have the normalized host name.
6.  **Add Ticket Comment (Add Comment to Existing Ticket):** Adds a comment to the existing Jira ticket, containing the timestamp and description from the Splunk alert.  This prevents duplicate tickets while keeping the existing ticket updated.

## Services:

-   **Splunk:** Used to generate alerts that trigger the workflow.
-   **Jira:** Used for creating and updating tickets based on Splunk alerts.

## Hashtags:

#n8n #automation #Splunk #Jira #incidentmanagement
