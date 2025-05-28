# Create Email Campaign From LinkedIn Post Interactions

## Use cases:

*   **Lead Generation:** Automatically identify and collect contact information of individuals who interact with your LinkedIn posts (likers and commenters).
*   **CRM Enrichment:** Enrich existing CRM data in HubSpot with up-to-date information (email, phone, company details) obtained from Dropcontact.
*   **Automated Outreach:** Add qualified leads to Lemlist email campaigns for targeted outreach and engagement.

## How it works:

1.  **Trigger:** The workflow starts with a Cron node, triggering the process hourly to check for new interactions on LinkedIn posts.
2.  **LinkedIn Data Extraction:** The "LinkedIn Post Commenters" and "LinkedIn Post Liker" nodes (using PhantomBuster) extract lists of users who have commented on or liked a specified LinkedIn post.
3.  **Wait Period:** A "Wait" node pauses the workflow for 30 seconds before proceeding to avoid rate limits or throttling.
4.  **Contact Information Retrieval:** "Get Comments" and "Get Likers" nodes (using PhantomBuster) get the output of the PhantomBuster extractors from the previous steps.
5.  **Data Enrichment with Dropcontact:** The "Dropcontact" node uses the extracted names and, optionally, company names to find verified email addresses, phone numbers, and other professional information.
6.  **Airtable Integration (Check if Contact Exists):** The "Airtable - List" node searches an Airtable base (table: Contacts) to determine if the extracted contact already exists.
7.  **Conditional Branching:** The "Exists?" node checks if the email found by Dropcontact is present in Airtable.
8.  **Airtable Update/Create:**
    *   If the contact exists ("Exists?" - True branch), the "Set - Update" node combines the existing Airtable record ID with the new information from Dropcontact, and the "Airtable - Update" node updates the record.
    *   If the contact doesn't exist ("Exists?" - False branch), the "Set - New" node formats the Dropcontact data, and the "Airtable - Create" node creates a new record in the "Contacts" table.
9.  **Lemlist Campaign Addition:** The "Lemlist" node adds the contact to a specific Lemlist campaign, using the enriched email address and other details.
10. **HubSpot Contact Creation/Update:** The "Hubspot" node creates or updates a contact in HubSpot with the enriched data, setting the original source to "SOCIAL\_MEDIA."

## Services:

*   Airtable
*   Dropcontact
*   Lemlist
*   HubSpot
*   PhantomBuster
*   LinkedIn

## Hashtags:

#n8n #automation #linkedin #leadgeneration #crm #emailcampaign
