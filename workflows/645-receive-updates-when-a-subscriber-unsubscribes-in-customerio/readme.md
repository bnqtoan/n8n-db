# Receive updates when a subscriber unsubscribes in Customer.io

## Use cases:

*   **Real-time Unsubscribe Monitoring:**  Immediately detect when a user unsubscribes from your Customer.io email lists, allowing for prompt action.
*   **Internal Notification:** Trigger a notification to a team channel (e.g., Slack, Microsoft Teams) when a user unsubscribes, alerting support or marketing.

## How it works:

This workflow uses a Customer.io Trigger node to listen for `customer.unsubscribed` events.  When a user unsubscribes within Customer.io, the trigger activates. Currently, the workflow only receives the trigger. To make the workflow useful, you'd need to add nodes after the trigger to process the unsubscribe event data. For example, you might add a Slack node to send a notification, or a Function node to perform custom logic.

## Services:

*   Customer.io

## Hashtags:

#n8n #CustomerIO #unsubscribe #automation #CRM
