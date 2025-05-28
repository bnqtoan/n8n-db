# Receive updates for support in Zendesk

## Use cases

*   **Real-time Notifications:** Get notified instantly when a new ticket is created or updated in Zendesk, allowing for prompt responses and improved customer support.
*   **Automated Escalation:** Automatically escalate urgent or unresolved tickets based on specific criteria (e.g., priority, keywords in the description) to relevant support teams or individuals.
*   **Custom Reporting:** Trigger data collection and reporting processes whenever a ticket is updated, enabling better tracking of support metrics and trends.

## How it works

This workflow is triggered by events in Zendesk. Specifically, the "Zendesk Trigger" node monitors Zendesk for new or updated tickets.  When a matching event occurs (currently configured to trigger on any Zendesk ticket event due to the empty conditions), the workflow starts.  Currently, the workflow only receives the event, without performing any subsequent actions or data processing. Additional nodes need to be configured after the trigger to define what happens next (e.g., sending a Slack notification, updating a Google Sheet).

## Services

*   Zendesk

## Hashtags

#n8n #Zendesk #Automation #CustomerSupport #Ticketing
