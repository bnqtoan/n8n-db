# Lonescale to Lemlist & HubSpot

## Use cases:

*   **Automated Lead Enrichment and Outreach:** When a new job intent signal is detected by Lonescale, automatically enrich the lead's contact information using Dropcontact, add the lead to a Lemlist campaign for outreach, and create/update the contact in HubSpot.
*   **Sales Team Notification for High-Intent Leads:** When a company is actively hiring (identified via Lonescale), notify the sales team via Slack with details about the hiring opportunity and a link to the HubSpot record.
*   **Customer Success Upselling Opportunity:** If a customer is hiring for roles relevant to upselling opportunities, notify the customer success team via Slack.

## How it works:

1.  **Webhook Trigger (Lonescale - New Job Intent):** The workflow starts when a new job intent is detected by Lonescale and sends a webhook to n8n.
2.  **Enrich Contact Data (Dropcontact):** Uses Dropcontact to enrich the contact information (email, company details, etc.) based on the data received from Lonescale.
3.  **Search for Company in HubSpot (HubSpot - Search company):** Searches HubSpot for an existing company record based on the company domain from Lonescale.
4.  **Check if Account Exists (Is Account in Hubspot):** Checks if the company already exists in HubSpot.
    *   If the account does not exist in Hubspot, create it.
    *   If the account exists in Hubspot, update it.
5.  **Search for or Create/Update Contact (HubSpot):** Searches for a contact in HubSpot based on the email address.
6.  **Create or Update Contact (HubSpot - Create/Update Contact):** Creates a new contact or updates an existing one in HubSpot with the enriched information.
7.  **Conditional Routing (New Company?, Attempted to contact?, Open Deal?, Is Customer?):** Routes the workflow based on the company's status in HubSpot (e.g., new company, attempted to contact, open deal, or customer).
8.  **Lemlist Integration (Lemlist - Add lead to campaign):** Adds the new lead to a specific Lemlist campaign.
9.  **HubSpot Task Creation:** Based on company and lead status, create a follow up task, or a linkedIn outreach task on Hubspot.
10. **Slack Notifications (Slack - Notify sales team on Slack, Slack - Notify CS team on Slack1):** Sends notifications to the sales and/or customer success team via Slack based on the company's status and hiring activity.

## Services:

*   Lonescale
*   Dropcontact
*   HubSpot
*   Lemlist
*   Slack

## Hashtags:

#n8n #automation #leadgeneration #sales #crm
