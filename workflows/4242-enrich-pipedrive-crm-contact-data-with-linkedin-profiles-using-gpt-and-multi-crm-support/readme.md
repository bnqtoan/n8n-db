# HDW CRM Enrichment

## Use cases:

- **Lead Enrichment:** Automatically enrich new leads in Pipedrive or HubSpot with LinkedIn profile data to gain insights into their professional background and interests.
- **Contact Updates:** Keep existing contact data up-to-date by periodically enriching it with the latest information from LinkedIn, such as job changes or new skills.
- **Personalized Outreach:** Use the enriched LinkedIn data to personalize sales and marketing efforts, improving engagement and conversion rates.

## How it works:

This workflow automates the process of enriching CRM contact data with information from LinkedIn profiles. It has three main trigger points and enrichment flows.

1.  **Pipedrive New Contact Trigger:**
    -   A new contact is created in Pipedrive.
    -   The workflow uses an AI agent to find the contact's LinkedIn profile by searching for the contact's email, company, name and other details.
    -   It collects LinkedIn profile details and recent posts.
    -   The collected data is used to update the contact's record in Pipedrive with a profile summary, LinkedIn URL, and a summary of their recent posts.

2.  **Pipedrive Contact Update Trigger:**
    -   A contact is updated in Pipedrive, and an "enrichment flag" is set to true.
    -   Similar to the new contact flow, the workflow finds the LinkedIn profile, collects details and posts, and updates the Pipedrive contact record.

3.  **HubSpot Contact Trigger:**
    -   A contact is created or updated in HubSpot, specifically when the `need_enrichment` property is set to `true`.
    -   The workflow uses an AI agent to find the contact's LinkedIn profile by searching for the contact's email, company, name and other details.
    -   It collects LinkedIn profile details and recent posts.
    -   The HubSpot contact is updated with LinkedIn profile URL, a professional summary, and a summary of their recent LinkedIn activity.

Key nodes include:

-   **Pipedrive Trigger/HubSpot Trigger:** Activates the workflow upon contact creation/update in Pipedrive/HubSpot.
-   **Data Enrichment AI Agent:** Uses OpenAI to find and extract relevant information from LinkedIn profiles.
-   **HDW LinkedIn Tool:** Searches and retrieves LinkedIn profile information using the HDW LinkedIn API.
-   **Pipedrive Tool/HubSpot Tool:** Updates the contact's record in Pipedrive/HubSpot with the enriched LinkedIn data.

## Services:

-   Pipedrive
-   HubSpot
-   OpenAI
-   HDW LinkedIn API

## Hashtags:

#n8n #automation #CRM #LinkedIn #dataEnrichment
