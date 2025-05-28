# Zendesk-Pipedrive Ticket Assignment

## Use cases:

*   **Automatic Ticket Assignment:** Automatically assigns Zendesk tickets to the Pipedrive contact owner, ensuring that the right person handles the request.
*   **Improved Customer Service:** By connecting Zendesk and Pipedrive, customer service agents can have immediate access to relevant contact information, leading to more personalized and efficient support.
*   **Data Enrichment:** Enriches Zendesk tickets with information from Pipedrive, providing a holistic view of the customer and their history.

## How it works:

1.  **Trigger:** The workflow starts every 5 minutes, triggered by the "Every 5 minutes" node.
2.  **Get Last Execution Timestamp:** Retrieves the timestamp of the last workflow execution using a Function Item node, storing it for later use.
3.  **Get Tickets Created After Last Execution:** Fetches all Zendesk tickets created since the last execution timestamp.
4.  **Get Requester Information:** For each ticket, retrieves the requester's information from Zendesk using their user ID.
5.  **Keep Only Needed Requester Information:** Extracts and retains only the requester's ID and email from the Zendesk user data.
6.  **Add Requester Information to Ticket Data:** Merges the requester information (ID and email) into the original ticket data.
7.  **Search Requester in Pipedrive:** Searches for the requester in Pipedrive using their email address.
8.  **Get Owner Information of Pipedrive Contact:** If a contact is found in Pipedrive, retrieves the owner's information from Pipedrive using the Pipedrive API.
9.  **Get Agents and Admins:** Get all agents and admins from Zendesk
10. **Keep only email and Id:** Keep only the email and id from the Zendesk agents and admins
11. **Keep Only Requester Owner Email:** Extracts and retains only the owner's email from the Pipedrive user data.
12. **Add Pipedrive agent data to pipedrive contact information:** Add agent data to pipedrive contact information.
13. **Add Contact Owner to Ticket Data:** Merges the Pipedrive contact owner's email into the ticket data.
14. **Contact exists in Pipedrive:** Checks if the contact exists in Pipedrive
15. **Change Assignee to Pipedrive contact owner:** If a Pipedrive contact is found, updates the Zendesk ticket to assign it to the Pipedrive contact owner.
16. **Add a note requester not found:** If the contact is not found in Pipedrive, it adds a note to the ticket
17. **Set new last execution timestamp:** Set a new last execution timestamp

## Services:

*   Zendesk
*   Pipedrive

## Hashtags:

#n8n #automation #zendesk #pipedrive #ticketmanagement
