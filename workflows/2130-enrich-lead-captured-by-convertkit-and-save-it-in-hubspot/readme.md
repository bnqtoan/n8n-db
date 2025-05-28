# Lead Enrichment and CRM Update Workflow

## Use cases:

- **Automatically update CRM with enriched lead and company data:** When a new lead subscribes through a ConvertKit form (or similar email marketing tool), this workflow enriches the lead's information using Clearbit, checks for the company in HubSpot, and creates or updates the company and contact records accordingly.
- **Improve lead qualification:** By enriching lead data, sales teams can better qualify leads based on company size, industry, and other relevant information pulled from Clearbit.
- **Streamline data entry:** Avoid manual data entry by automatically populating HubSpot with enriched data when new leads are captured.

## How it works:

1.  **Trigger:** The workflow starts when a new subscriber is added to a specific form in ConvertKit, `ConvertKit Trigger` node.
2.  **Filter Personal Emails:** Excludes personal emails from the workflow by checking email addresses against common domains like `@gmail.com`, `@yahoo.com`, etc., using the `Filter out personal emails1` node.
3.  **Enrich Email:** Uses the Clearbit API to enrich the lead's information based on their email address (`Enrich email` node). The `onError` parameter is set to `continueErrorOutput` which prevents the workflow from stopping in case of errors.
4.  **Check if Person has Company:** Checks if the enriched lead data contains company information, using the `If person has company` node. If no company information is found, it stops the workflow and nothing is done.
5.  **Enrich Company:** Uses Clearbit to gather information about the lead's company based on the domain found in the Clearbit person data (`Enrich company` node).
6.  **Search Company:** Searches for the company in HubSpot using the domain. (`Search company` node)
7.  **Conditional Branching:** An `if` node (`if company does not exist on CRM`) determines whether the company already exists in HubSpot.
    *   **If company does not exist:**
        *   A new company is created in HubSpot using data from Clearbit (`Create company` node).
        *   A contact is created associated to the created company (`Upsert contact` node).
    *   **If company exists:**
        *   The existing company record is updated in HubSpot with the Clearbit data (`Update company` node).
8.  **Upsert Lead:** Upserts the lead in HubSpot (`Upsert lead` node).

## Services:

-   ConvertKit
-   Clearbit
-   HubSpot

## Hashtags:

#n8n #automation #leadEnrichment #CRM #HubSpot
