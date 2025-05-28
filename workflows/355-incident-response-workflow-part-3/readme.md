# n8n Workflow: PagerDuty Incident Resolution Automation

## Use cases:

*   **Automated Incident Closure Notifications:** Automatically notify a Mattermost channel when a PagerDuty incident is resolved and the associated Jira issue is closed, keeping stakeholders informed.
*   **Streamlined Incident Management:** Upon receiving a PagerDuty incident resolution webhook, automatically update the incident status in PagerDuty and transition the linked Jira issue to a "Closed" state.
*   **Reduced Manual Effort:** Eliminate the need for manual updates in both PagerDuty and Jira upon incident resolution, saving time and reducing the risk of errors.

## How it works:

This workflow automates the process of closing incidents in PagerDuty and Jira and notifying a Mattermost channel when an incident is resolved.

1.  **Webhook Trigger (Webhook):** Listens for a POST request to a specific webhook URL (`/1bd40693-c7dd-43f5-97d9-6d8986e62fc1`).  It is assumed this webhook is triggered by PagerDuty (or another system) when an incident is resolved.
2.  **Update PagerDuty Incident (PagerDuty):**  Takes the `pagerduty_incident` ID from the webhook's JSON body and updates the corresponding PagerDuty incident to "resolved" using the PagerDuty API. It authenticates using provided PagerDuty credentials.
3.  **Update Jira Issue (Jira):** Extracts the `jira_key` from the webhook's JSON body (within the `context`) and updates the associated Jira issue. Specifically, it transitions the issue to status ID `31` (assumed to represent "Closed" or a similar state). It authenticates using provided Jira credentials.
4.  **Notify Mattermost (Mattermost, Mattermost1):** Sends two messages to Mattermost. The first goes to a channel ID provided in the original webhook, and the second to a hardcoded channel ID `k1h3du9r9byyfg7sys8ib6p3ey`.

## Services:

*   **PagerDuty:** Incident management platform.
*   **Jira:** Issue tracking and project management software.
*   **Mattermost:** Open-source collaboration platform.

## Hashtags:

#n8n #automation #incidentmanagement #pagerduty #jira #mattermost
