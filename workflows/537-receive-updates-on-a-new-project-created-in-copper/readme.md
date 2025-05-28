# Copper Project Trigger

## Use cases:

*   **Real-time Project Tracking:** Automatically trigger actions in other systems when a new project is created in Copper CRM.
*   **Notifications:** Send notifications to relevant teams via Slack or email when new projects are added, ensuring immediate awareness.

## How it works:

This workflow is triggered when a new project is created in Copper CRM. It uses the "Copper Trigger" node, configured to listen for "new" events on the "project" resource. When a new project is detected in Copper, the workflow initiates. Currently, the workflow only triggers and doesn't perform any further actions. To make it fully functional, you would need to connect additional nodes to define the subsequent steps, such as sending a notification or updating another system.

## Services:

*   Copper CRM

## Hashtags:

#n8n #automation #copperCRM #CRM #trigger
