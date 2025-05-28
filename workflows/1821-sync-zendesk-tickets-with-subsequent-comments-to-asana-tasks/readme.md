# Zendesk Ticket to Asana Task Automation

## Use cases:

- **Automatically create Asana tasks from new Zendesk tickets:** When a new ticket is created in Zendesk, a corresponding task is automatically created in Asana.
- **Update Zendesk tickets with Asana task IDs:** The Zendesk ticket is updated with the ID of the newly created Asana task, providing a link between the two systems.
- **Add comments from Zendesk to existing Asana tasks:** If a Zendesk ticket already has a linked Asana task, new comments on the ticket are added as comments to the existing Asana task.

## How it works:

1.  **On new Zendesk ticket:** The workflow starts when a new ticket is created in Zendesk.
2.  **Get ticket:** Retrieves the details of the newly created Zendesk ticket.
3.  **Determine:** This Function node checks if an Asana task ID (stored in a custom field in Zendesk) already exists for the ticket.
4.  **IF:** Based on the previous step, the workflow branches into two possible paths:
    *   **If an Asana task ID exists:**
        *   **Create comment on existing task:** A comment is added to the existing Asana task using the content of the new Zendesk ticket.
    *   **If an Asana task ID does not exist:**
        *   **Create task:** A new task is created in Asana, using the Zendesk ticket's subject as the task name.
        *   **Update ticket:** The Zendesk ticket is updated with the ID of the newly created Asana task in a specified custom field.

## Services:

*   Zendesk
*   Asana

## Hashtags:

#n8n #automation #Zendesk #Asana #TaskManagement
