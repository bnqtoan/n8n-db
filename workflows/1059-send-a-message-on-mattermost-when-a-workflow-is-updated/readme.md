# Workflow Update Notifier

## Use cases:

-   **Notify a team channel when an n8n workflow is updated:** Keep team members informed about changes to critical workflows, ensuring everyone is aware of the latest configurations.
-   **Simple Notification on Workflow Update:** Send basic update notifications to a communication platform, enabling easy monitoring of your n8n environment's modifications.

## How it works:

This workflow triggers a message to a Mattermost channel whenever the current n8n workflow is updated. It begins with a "Workflow Trigger" node that listens for "update" events. When a workflow update occurs, the "Workflow Trigger" node activates the "Mattermost" node. The "Mattermost" node then sends a message to the configured channel, indicating that the workflow has been updated. The message includes the name of the workflow that was updated. The Webhook and Set nodes serve no purpose on this workflow.

## Services:

-   Mattermost: A messaging platform for team communication.

## Hashtags:

#n8n #automation #workflow #mattermost #notification
