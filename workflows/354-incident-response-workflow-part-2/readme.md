# n8n Workflow: PagerDuty Incident Acknowledgment Notifier

This workflow automates the process of acknowledging PagerDuty incidents and notifying a Mattermost channel.

## Use cases:

- **Automated Incident Response:** Automatically acknowledge PagerDuty incidents as soon as they are triggered, streamlining initial response procedures.
- **Team Notification:**  Keep teams informed about incident status changes by posting updates to a designated Mattermost channel, improving collaboration and situational awareness.
- **Simplified Workflow:** Reduce manual steps involved in incident management, freeing up responders to focus on resolving the issue.

## How it works:

1.  **Webhook Trigger (Webhook):**  The workflow is triggered by an HTTP POST request to a specific webhook URL (`/213324b6-b84d-42f9-af3b-42804cc71cd1`). This webhook is assumed to be configured in PagerDuty to send data when an incident occurs. The workflow extracts the incident ID and channel ID from the incoming data.
2.  **Acknowledge PagerDuty Incident (PagerDuty):** The `PagerDuty` node uses the PagerDuty API to acknowledge the incident.  It extracts the `incidentId` from the webhook data  (`{{$json["body"]["context"]["pagerduty_incident"]}}`) and sets its status to "acknowledged". It uses the provided PagerDuty API credentials to authenticate.
3.  **Notify Mattermost Channel (Mattermost):**  The `Mattermost` node sends a message to a specified Mattermost channel, notifying the team that the incident has been acknowledged. It includes a message "💪🏼 Incident status has been changed to Acknowledged on PagerDuty." and posts it to a channel. It retrieves the `channelId` from the webhook data (`{{$node["Webhook"].json["body"]["channel_id"]}}`) and uses Mattermost API credentials for authentication.

## Services:

-   **PagerDuty:** Incident management platform.
-   **Mattermost:**  Open-source, self-hosted messaging platform.

## Hashtags:

#n8n #automation #pagerduty #mattermost #incidentmanagement
