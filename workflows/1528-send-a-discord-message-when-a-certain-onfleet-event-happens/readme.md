# Onfleet --> Discord

## Use cases:

*   **Real-time Task Updates:** Notify a Discord channel whenever a task is started in Onfleet, keeping your team informed about ongoing operations.
*   **Operational Awareness:** Provide instant visibility into task progression, improving team coordination and response times.

## How it works:

This workflow triggers when a task is started in Onfleet. The "Onfleet Trigger" node listens for `taskStarted` events using a webhook.  When a task starts, the trigger sends data to the "Discord" node, which is configured to post a message to a specified Discord channel. The exact message and channel can be configured within the Discord node's settings.

## Services:

*   Onfleet
*   Discord

## Hashtags:

#n8n #Onfleet #Discord #Automation #TaskManagement
