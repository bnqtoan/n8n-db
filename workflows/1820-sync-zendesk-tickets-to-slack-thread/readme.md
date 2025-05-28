# Sync Zendesk tickets to Slack threads

## Use cases:
- Automatically create a Slack thread for every new Zendesk ticket to facilitate team discussions and updates.
- Post updates and comments from Zendesk tickets to the corresponding Slack thread to keep stakeholders informed.
- Streamline communication and collaboration between support teams and other departments by centralizing ticket-related conversations in Slack.

## How it works:
1.  **On new Zendesk ticket:** A webhook triggers the workflow when a new Zendesk ticket is created.
2.  **Get ticket:** Retrieves the full details of the Zendesk ticket using its ID.
3.  **Code:** Extracts the "Slack Thread ID" custom field from the Zendesk ticket.
4.  **IF:** Checks if a Slack Thread ID already exists in the Zendesk ticket's custom field.
    *   If a Slack Thread ID exists, it means a thread was previously created for this ticket.
        *   **Create reply on existing thread:** Posts the new Zendesk ticket comment to the existing Slack thread using the stored Thread ID.
    *   If a Slack Thread ID does not exist, it means this is a new ticket and a new thread needs to be created.
        *   **Create thread:** Creates a new Slack thread in the specified channel, using the Zendesk ticket's subject as the thread's title.
        *   **Update ticket:** Updates the Zendesk ticket by adding the new Slack Thread ID to the "Slack Thread ID" custom field.

## Services:
- Zendesk
- Slack

## Hashtags:
#n8n #Zendesk #Slack #Automation #Helpdesk
