# Pipedrive Lead Enrichment and Slack Alert Workflow

## Use cases:

- Automatically enrich Pipedrive leads with company data from Clearbit and receive a Slack notification for high-quality leads.
- Streamline lead qualification by automatically filtering leads based on criteria such as company revenue and employee count, and notifying the sales team via Slack.
- Keep Pipedrive leads up-to-date by automatically populating a custom "Enriched at" field after data enrichment.

## How it works:

1.  **Trigger:** The workflow is triggered every 5 minutes using the "Trigger every 5 minutes" node.
2.  **Setup:** The "Setup" node stores configuration details like Slack channel, custom Pipedrive field IDs for domain and enriched at.
3.  **Get all leads:** Fetches all non-archived leads from Pipedrive using the "Get all leads" node.
4.  **Get organization details:** Retrieves organization details for each lead from Pipedrive using the "Get organization details" node using the Organization ID from the lead data.
5.  **Enrich company:** Enriches company data using Clearbit based on the company's domain using the "Enrich company" node.  The domain is retrieved from a custom field in Pipedrive.
6.  **Add Organization ID to data:** The retrieved Organization ID from Pipedrive is added to the Clearbit data, making sure that is availabe later on for the Merge data Node.
7.  **Merge data:** Merges the original lead data from Pipedrive with the enriched company data from Clearbit, using the Organization ID as the matching key.
8.  **Mark lead as enriched in Pipedrive:** Updates the lead in Pipedrive, populating a custom "Enriched at" date field with the current date using the "Mark lead as enriched in Pipedrive" node.
9.  **Keep leads that match the criteria:** Filters the enriched leads based on specified criteria (e.g., company tags including "B2B" and employee count greater than 100) using the "Keep leads that match the criteria" node.
10. **Send alert to Slack:** Sends a message to a specified Slack channel with details of the qualified lead, including company name, website, revenue, and employee count, using the "Send alert to Slack" node.
11. **Get all organization keys/Get all lead keys:** These nodes along with the Split out and Show only custom fields are used to get the ID of the custom fields "Domain" and "Enriched at" in the Pipedrive platform, so they can be used later on.

## Services:

-   Pipedrive
-   Clearbit
-   Slack

## Hashtags:

#n8n #automation #pipedrive #clearbit #leadgeneration
