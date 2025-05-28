## n8n Workflow: ActiveCampaign Contact Management

This workflow automates the creation or updating of contacts in ActiveCampaign.

**Use cases:**

*   **Lead Capture Integration:** Automatically add new leads from various sources (e.g., web forms) to ActiveCampaign.
*   **Contact Information Synchronization:** Keep ActiveCampaign contact details up-to-date by syncing with other systems (e.g., CRM, databases).
*   **Manual Contact Management:** Quickly create or update a contact in ActiveCampaign using the "execute" button.

**How it works:**

1.  The workflow is triggered manually by clicking the "execute" button in n8n.
2.  The `ActiveCampaign` node then creates or updates a contact in ActiveCampaign based on the configured email and other optional fields like first name and last name. The `updateIfExists` option is set to `true`, ensuring that if a contact with the specified email already exists, their information will be updated instead of creating a duplicate.

**Services:**

*   ActiveCampaign

**Hashtags:**

*   #n8n
*   #ActiveCampaign
*   #CRM
*   #Automation
*   #ContactManagement
