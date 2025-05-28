# N8n Instance Started Notification to Mattermost

## Use cases:

-  **System Monitoring:** Get notified in a Mattermost channel when your n8n instance starts, aiding in monitoring system uptime and availability.
-  **Debugging and Maintenance:**  Receive a notification upon instance restart after updates or debugging, ensuring you're aware of the system's state.

## How it works:

This workflow is triggered when the n8n instance initializes.  The "n8n Trigger" node configured to listen for the "init" event. When the event occurs, it triggers the "Mattermost" node, which sends a message to a specified Mattermost channel. The message includes a timestamp indicating when the n8n instance started.

## Services:

-   Mattermost

## Hashtags:

#n8n #automation #mattermost #notification #monitoring
