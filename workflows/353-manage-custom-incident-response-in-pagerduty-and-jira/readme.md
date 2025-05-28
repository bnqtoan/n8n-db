# n8n Workflow: Incident Management Automation

## Use cases:

- **Automated Incident Response:** When a new incident is created in PagerDuty, automatically create a corresponding Jira issue and a Mattermost channel for focused discussion and resolution.
- **Real-time Incident Updates:** Keep stakeholders informed by posting updates to Mattermost channels when an incident is acknowledged or resolved in PagerDuty and Jira.
- **Centralized Incident Tracking:** Streamline communication and tracking by linking PagerDuty incidents, Jira issues, and Mattermost channels.

## How it works:

1.  **Webhook (Webhook):** This workflow starts when a POST request is received at the configured webhook URL.  It expects PagerDuty incident data in the body.
2.  **Create Mattermost Channel (Mattermost1):** A new Mattermost channel is created based on the incident title from the PagerDuty data. The channel name is derived from the `incident_key` and the display name from the incident title.
3.  **Add User to Channel (Mattermost2):** A specific user (`qwertz12345`) is added to the newly created Mattermost channel.
4.  **Create Jira Issue (Jira1):** A new Jira issue is created in the specified project ("10016"). The issue summary is taken from the PagerDuty incident title, and a specific assignee (`qwertz12345`) is set.
5.  **Post Initial Incident Details to Mattermost (Mattermost3):**  A message is posted to a general Mattermost channel (`qwertz12345`) with links to the auxiliary channel, the PagerDuty incident, and the Jira issue.
6.  **Post Detailed Incident Information with Actions (Mattermost4):** A detailed message, including incident summary and links, is posted to the newly created Mattermost channel. It also includes interactive buttons for acknowledging and resolving the incident, which trigger separate webhooks.
7.  **Acknowledge Incident (Ack):**  This webhook is triggered when the "Acknowledge" button in Mattermost is clicked.
8.  **Update PagerDuty Incident to Acknowledged (PagerDuty1):** The corresponding PagerDuty incident is updated to "acknowledged."
9.  **Notify Mattermost of Acknowledgment (Mattermost5):** A message is posted to the original Mattermost channel, informing users that the incident has been acknowledged in PagerDuty.
10. **Resolve Incident (Resolve):** This webhook is triggered when the "Resolve" button in Mattermost is clicked.
11. **Update PagerDuty Incident to Resolved (PagerDuty2):** The corresponding PagerDuty incident is updated to "resolved."
12. **Update Jira Issue Status (Jira2):**  The linked Jira issue is updated to a status with ID "31" (likely "Resolved" or "Closed").
13. **Notify Mattermost of Resolution (Mattermost6, Mattermost7):** Confirmation messages are sent to the original Mattermost channel and general channel (`qwertz12345`), informing users that the incident has been resolved in both PagerDuty and Jira.

## Services:

*   **PagerDuty:** Used for incident tracking and updates.
*   **Jira:** Used for issue tracking and management.
*   **Mattermost:** Used for team communication and collaboration.

## Hashtags:

#n8n #automation #incidentmanagement #pagerduty #jira #mattermost
