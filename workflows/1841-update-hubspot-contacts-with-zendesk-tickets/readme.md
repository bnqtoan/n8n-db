# Zendesk & HubSpot Ticket Sync

## Use cases:

*   **Real-time Ticket Synchronization:** Automatically sync new or updated tickets between Zendesk and HubSpot to keep support and sales teams aligned.
*   **Contact Enrichment:** When a Zendesk ticket is updated, automatically update the corresponding contact in HubSpot with relevant information.
*   **Centralized Ticket Management:** Use HubSpot as a central hub for managing tickets originating from Zendesk, ensuring a unified view of customer interactions.

## How it works:

1.  **Trigger:** The workflow is triggered every 5 minutes by the "Every 5 minutes" node (Cron node).
2.  **Get Last Execution Timestamp:** The "Get last execution timestamp" Function Item node retrieves the timestamp of the last workflow execution from the static workflow data.
3.  **Get Updated Tickets:** The "Get tickets updated after last execution" Zendesk node fetches tickets that have been updated since the last execution timestamp.
4.  **Get User Data:** The "Get user data of Ticket requester" Zendesk node retrieves the user data of the ticket requester
5.  **Extract Relevant Data:** The "Only keep needed data" Set node extracts relevant data from the Zendesk ticket, such as ticket ID, contact email, and contact name.
6.  **Add User Data** The "Add user data" Merge node adds the user data to the ticket data.
7.  **Check if Ticket Exists:** The "Ticket Exists" If node checks if an external ID exists in the ticket data.
8.  **HubSpot Actions:**
    *   **Update Existing Ticket:** If the ticket external ID already exists, the "Update existing ticket" HubSpot node updates the existing ticket in HubSpot with the latest information from Zendesk (raw subject and description).
    *   **Create or Update Contact:** If the ticket external ID does not exists, the "Create or update contact" HubSpot node creates a new contact or updates an existing contact in HubSpot using the email address from the Zendesk ticket.
    *   **Update External ID:** The "Update External Id in Zendesk for contact" Zendesk node then updates the Zendesk contact with the HubSpot contact ID.
    *   **Create New Ticket:** The "Create new Ticket" HubSpot node then creates a new ticket in HubSpot and link the contact to the ticket.
    *   **Update Zendesk ticket with External Id** The "Update Zendesk ticket with External Id" Zendesk node updates the zendesk ticket with the new object ID.
9.  **Update Timestamp:** The "Set new last execution timestamp" Function Item node updates the static workflow data with the latest execution timestamp, ensuring that only new or updated tickets are processed in the next run.

## Services:

*   Zendesk
*   HubSpot

## Hashtags:

#n8n #automation #Zendesk #HubSpot #TicketSync
