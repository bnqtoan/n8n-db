## n8n Workflow: Create a Client in Harvest

This workflow automates the creation of new clients in Harvest, a time tracking and invoicing software.

**Use cases:**

*   **Streamline Client Onboarding:** Automatically create new client entries in Harvest whenever a new client is added to your CRM or project management system.
*   **Quick Client Creation:**  Manually trigger the workflow to quickly add a new client in Harvest without navigating through the Harvest interface.
*   **Automated Task Assignment (with expansion):**  Expand the workflow to automatically assign tasks or projects to the newly created client.

**How it works:**

1.  The workflow is manually triggered by the "On clicking 'execute'" node.
2.  The "Harvest" node then uses the Harvest API to create a new client with the defined parameters (currently set to use default values which will result in using the values set up in Harvest). You need to configure the Harvest API credentials for this node to work.

**Services:**

*   Harvest

**Hashtags:**

#n8n #harvest #automation #crm #clientmanagement
