## n8n Workflow: Create Freshdesk Ticket

This workflow automates the creation of a Freshdesk ticket.

### Use cases:

*   **Simple Ticket Creation:**  Quickly create a new ticket in Freshdesk with pre-defined settings, triggered manually. This can be used for testing or for very specific, infrequent ticket creations.
*   **Demonstration Workflow:** Serve as a foundational example for more complex Freshdesk integrations within n8n.

### How it works:

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered within n8n.
2.  **Create Freshdesk Ticket:**  The "Freshdesk" node creates a new ticket in Freshdesk.
    *   It sets the ticket status to "open".
    *   It identifies the requester by their email address, which is set to "user@example.com".  **Important:** This should be replaced with an actual email address for proper functionality.

### Services:

*   Freshdesk

### Hashtags:

#n8n #freshdesk #automation #ticketing
