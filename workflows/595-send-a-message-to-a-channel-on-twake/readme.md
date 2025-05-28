# Send a message on Twake

## Use cases

*   **Send ad-hoc notifications:** Trigger a Twake message to a specific channel directly from n8n, useful for sending quick updates or alerts.
*   **Automated status updates:** Integrate this workflow into a larger automation to send status updates to a Twake channel upon completion of specific tasks.

## How it works

This workflow is triggered manually when you click the "execute" button in n8n. Upon execution, it sends a message to a specified Twake channel. The workflow consists of two main nodes:

1.  **On clicking 'execute':** This node serves as the trigger, initiating the workflow's execution.
2.  **Twake:** This node sends the message to Twake. It requires a connection to your Twake account (via credentials) and the `channelId` of the target channel. The message `content` will need to be manually specified in the node's parameters before each execution.

## Services

*   Twake

## Hashtags

#n8n #Twake #automation #messaging #notifications
