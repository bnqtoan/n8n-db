# Enrich HubSpot Contacts with Clearbit Data

## Use cases:

*   **Lead Enrichment:** Automatically enrich new contacts in HubSpot with additional data (job title, company, location) from Clearbit, giving sales and marketing teams more context.
*   **Data Accuracy:** Keep HubSpot contact data up-to-date by automatically pulling in the latest information from Clearbit when a contact is created or updated.
*   **Targeted Marketing:** Use Clearbit data in HubSpot to create more targeted marketing campaigns based on job title, industry, or location.

## How it works:

1.  **HubSpot Trigger:** The workflow starts when a contact is created or updated in HubSpot, triggering the workflow. The node is configured to trigger based on events related to contact changes.
2.  **Get Contact:** The workflow retrieves the details of the contact that triggered the workflow from HubSpot using the contact ID provided in the trigger event.
3.  **Clearbit:** The workflow uses the contact's email address to query Clearbit's API and retrieve additional information about the person, such as their job title, company, and location.
4.  **Update Contact:** The workflow updates the contact's record in HubSpot with the data retrieved from Clearbit, including city, job title, and company name.

## Services:

*   HubSpot
*   Clearbit

## Hashtags:

#n8n #HubSpot #Clearbit #DataEnrichment #Automation
