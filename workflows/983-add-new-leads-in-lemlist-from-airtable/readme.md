# Airtable to Lemlist Lead Enrichment

## Use Cases:

- **Automated Lead Onboarding:** Automatically add new leads from Airtable to Lemlist campaigns, streamlining the lead generation process.
- **Contact Enrichment:** Enrich existing Lemlist leads with data from Airtable, ensuring accurate and up-to-date contact information in Lemlist.
- **Targeted Outreach:** Based on Airtable data, trigger specific Lemlist campaigns for leads, enabling personalized and effective outreach strategies.

## How it works:

1.  **Airtable Node:** The workflow starts by fetching a list of records from a specified Airtable base. The `Airtable` node retrieves the fields of each record.
2.  **Lemlist Node:** The data retrieved from Airtable is then used to add leads to Lemlist. The `Lemlist` node takes the email and Name from the Airtable record's `fields` and adds the lead to a specified campaign.
3.  **Lemlist1 Node:** (Note: there seems to be an issue with email field)The `Lemlist1` node uses the email fetched from Airtable node `fields` to get the information of a specific lead from Lemlist.

## Services:

*   Airtable
*   Lemlist

## Hashtags:

#n8n #Airtable #Lemlist #LeadGeneration #Automation
