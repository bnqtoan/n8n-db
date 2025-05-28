## Discord Intro Workflow - Readme

### Use cases:

*   **Send Welcome Messages:** Automatically post a pre-defined welcome message to a Discord channel when triggered manually. Useful for announcements or testing purposes.
*   **Simple Notification System:** Use this workflow as a base for a basic notification system to send alerts to a Discord channel for events that require manual triggering.

### How it works:

This workflow is triggered manually using the "On clicking 'execute'" node. Upon execution, it sends a "Hello World!" message to a specified Discord channel via a webhook. The "Discord" node is configured with the webhook URI and the message content.

1.  **Manual Trigger:** The workflow starts when you click the "Execute Workflow" button in n8n.
2.  **Send to Discord:** The "Discord" node takes the configured message ("Hello World!") and sends it to the Discord channel defined by the provided webhook URI.

### Services:

*   Discord (via Webhook)

### Hashtags:

#n8n #discord #automation #webhook #notification
