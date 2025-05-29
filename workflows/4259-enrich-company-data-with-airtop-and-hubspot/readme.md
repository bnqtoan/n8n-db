# Enrich Company Data

## Use cases:
- **CRM Enrichment:** Automatically populate company information in your CRM (e.g., HubSpot) when a new lead signs up, saving time and improving data quality.
- **Lead Qualification:** Calculate an ICP (Ideal Customer Profile) score to prioritize leads based on company attributes like size, industry, and technology usage.
- **Data Standardization:** Ensure consistent and accurate company data across different platforms by automatically enriching and standardizing information.

## How it works:
1. **Trigger:** The workflow starts either when a new form is submitted (e.g., on a website) or when triggered by another n8n workflow.  The trigger captures the company domain and (optionally) a LinkedIn profile URL.
2. **Unify Params:** Takes the input parameters and assigns them to variables for further usage in the workflow.
3. **Corporate Email Check:** The "Is corporate email?" node filters out submissions with non-corporate email domains (e.g., gmail.com, hotmail.com) and domains ending with `.edu`.
4. **Company Info Retrieval:** The "Company info" node executes a sub-workflow ("AIRTOP — Extract company data and calculate ICP") to retrieve company information using Airtop based on the provided domain and LinkedIn profile. This sub-workflow likely extracts data like company name, location, employee count, and calculates an ICP score.
5. **Aggregate:** The output from the Company Info Retrieval node is aggregated.
6. **Map Information:** The "Map information" node extracts specific fields from the aggregated Airtop data (company profile, city, company domain, etc.) and assigns them to new variables.
7. **HubSpot Update:** The "Save company Hubspot" node executes another sub-workflow ("AIRTOP — Upsert company in Hubspot") to create or update a company record in HubSpot with the enriched data and calculated ICP score.

## Services:
- Airtop: Used to extract company data and calculate the ICP score.
- HubSpot: Used to store and manage the enriched company data.

## Hashtags:
#n8n #automation #CRM #dataenrichment #hubspot
