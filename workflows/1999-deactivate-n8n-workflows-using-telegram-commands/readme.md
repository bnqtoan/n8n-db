# Telegram N8N Workflow (De)activator

## Use cases

*   **Remote Workflow Management:** Activate or deactivate n8n workflows remotely via Telegram when you don't have direct access to your n8n instance (e.g., during travel).
*   **Emergency Response:** Quickly disable faulty workflows that are causing issues, such as sending incorrect data or overwhelming external services, directly from your mobile device.
*   **Scheduled Activation/Deactivation:** Although not explicitly implemented in this workflow, it lays the groundwork for toggling workflows on/off based on external triggers received through Telegram.

## How it works

1.  **Receive Telegram Command:** The workflow starts with a Telegram Trigger node, listening for new messages sent to your Telegram bot.
2.  **Filter Chat ID:** It filters messages to only process commands from a specific Telegram chat ID, ensuring only authorized users can control the workflows.
3.  **Command Recognition:** The "Switch depending on command" node checks if the message starts with either `/stop` or `/start`, routing the workflow accordingly.
4.  **Content Identification:** The next switch nodes ("Switch depending on content (deactivate)" and "Switch depending on content (activate)") analyze the rest of the message to identify which workflow needs to be (de)activated (e.g., "marketing", "sales").
5.  **(De)activate Workflow:** Finally, the corresponding n8n nodes (e.g., "Deactivate the marketing workflow", "Activate the sales workflow") use the n8n API to either deactivate or activate the specified workflow based on its ID.  The workflow ID is required for the n8n nodes to work.

## Services

*   **Telegram:** Used for receiving commands to (de)activate n8n workflows.
*   **n8n API:** Used to remotely control the activation state of n8n workflows.

## Hashtags

#n8n #automation #Telegram #workflow #remotecontrol
