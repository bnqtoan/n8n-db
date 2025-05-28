# INSEE Enrichment for Agile CRM

## Use cases:

- **Automatic CRM Data Enrichment:** Automatically update company information in Agile CRM with official data from the French INSEE database, ensuring accuracy and completeness.
- **Compliance and Data Validation:** Use INSEE data to validate company addresses and SIREN numbers, aiding in compliance and reducing data entry errors.
- **Targeted Marketing and Sales:** Improve targeting by leveraging enriched company data for more effective marketing campaigns and sales strategies.

## How it works:

1.  **Trigger:** The workflow can be triggered manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger").
2.  **Fetch Companies from Agile CRM:** Retrieves all company entries from your Agile CRM account, using the "Get all Compagnies from Agile CRM" node.
3.  **Filter Read-Only Entries:** Filters out companies that have the "RO" (Read Only) custom field set to "1," preventing accidental overwrites.
4.  **Find Company in SIREN database:** Use company name to query INSEE's SIREN database using the INSEE API to retrieve the official SIREN identifier.
5.  **Request all data from SIREN database:** Retrieves comprehensive company data from the INSEE SIREN database based on the SIREN identifier and location.
6.  **Merge CRM and INSEE Data:** Combines the original Agile CRM data with the enriched data from INSEE, using the company name for matching.
7.  **Enrich CRM with INSEE Data:** Updates the company record in Agile CRM with the official address and SIREN number obtained from INSEE.

## Services:

-   **Agile CRM:** Your CRM platform where company data is stored and updated.
-   **INSEE API:** The French National Institute of Statistics and Economic Studies API, providing official company data.

## Hashtags:

#n8n #automation #CRM #dataenrichment #INSEE
