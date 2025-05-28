# Zendesk Ticket Creation Workflow

This n8n workflow automates the creation of tickets in Zendesk.

## Use cases:

- **Manual Ticket Creation:** Allows support agents or other authorized personnel to quickly create Zendesk tickets directly from n8n with a single click.  This can be useful for scenarios where a ticket needs to be created based on a verbal request or other information not already in a system.
- **Testing Zendesk Integration:** Can be used to easily test the Zendesk integration within n8n, ensuring proper authentication and functionality before deploying more complex workflows.

## How it works:

1.  **Manual Trigger:** The workflow is initiated manually when a user clicks the "Execute" button in n8n. This trigger node, named "On clicking 'execute'", starts the workflow execution.
2.  **Zendesk Ticket Creation:** The "Zendesk" node then creates a new ticket in Zendesk. The specific details of the ticket (e.g., subject, priority, type) are configured within the Zendesk node's parameters.  Currently, it uses the default values as the `description` and `additionalFields` are empty.

## Services:

-   Zendesk

## Hashtags:

#n8n #automation #Zendesk #ticketing #workflow
