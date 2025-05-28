# Receive updates when a new list is created in Affinity

## Use cases:

*   **New List Notifications:** Automatically receive notifications in a communication channel (e.g., Slack, Microsoft Teams) whenever a new list is created in Affinity.
*   **Data Synchronization:** Trigger a workflow to synchronize data from the new Affinity list to another system, such as a database or CRM.
*   **Automated Reporting:**  Generate an automated report summarizing new lists created in Affinity on a daily or weekly basis.

## How it works:

This workflow is triggered when a new list is created within Affinity.

1.  **Affinity Trigger:** The workflow starts with the "Affinity-Trigger" node. This node is configured to listen for the `list.created` event within Affinity.  When a new list is created in Affinity, this trigger activates the workflow.

## Services:

*   Affinity

## Hashtags:

#n8n #automation #affinity #crm #listmanagement
