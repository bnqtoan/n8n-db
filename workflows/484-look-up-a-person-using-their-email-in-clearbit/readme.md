## n8n Workflow: Clearbit Person Lookup by Email

This workflow retrieves information about a person from Clearbit using their email address.

### Use cases:

*   **Enrich CRM Data:** Automatically enrich your CRM (e.g., HubSpot, Salesforce) with publicly available information about leads or contacts based on their email addresses.
*   **Lead Qualification:** Qualify leads by fetching details like job title, company, and social profiles from Clearbit, helping your sales team prioritize outreach.
*   **Personalized Outreach:** Gather information about prospects to personalize your outreach efforts with relevant details, increasing engagement.

### How it works:

1.  **Trigger:** The workflow is triggered manually by clicking the "execute" button in n8n.
2.  **Clearbit Lookup:** The "Clearbit" node uses the provided email address to query the Clearbit API.  It retrieves information about the person associated with that email. The email parameter in the Clearbit node needs to be configured with the target email address. Also, a Clearbit API key needs to be provided in the credentials.
3.  **Output:** The workflow returns the data fetched from Clearbit, which can then be used in subsequent nodes for further processing or storage.

### Services:

*   Clearbit API

### Hashtags:

#n8n #Clearbit #LeadEnrichment #DataEnrichment #Automation
