## n8n Workflow: Post to RocketChat

This workflow automates the process of sending messages to a specified channel in RocketChat.

**Use cases:**

*   **Announcements:** Post important announcements or updates to a specific RocketChat channel from within n8n.
*   **Notifications:** Trigger notifications to a channel based on events in other systems, such as a new order in an e-commerce platform.
*   **Scheduled Messages:** Schedule and automatically send messages at specific times to keep teams informed.

**How it works:**

1.  The workflow is manually triggered by the "On clicking 'execute'" node.
2.  The "Rocketchat" node then uses the RocketChat API to send a message to the specified channel. The message content is "Hello everyone," and it's sent to the "#general" channel. The workflow uses credentials named "Rocket" to authenticate with the RocketChat API.

**Services:**

*   RocketChat

**Hashtags:**

#n8n #RocketChat #automation #messaging #workflow
