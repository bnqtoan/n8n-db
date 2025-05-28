# Icypeas Domain Scan (Bulk Search) Workflow

## Use cases:

*   **Lead Generation:** Automatically scan a list of companies from a Google Sheet to identify potential leads and gather relevant domain information for sales and marketing efforts.
*   **Market Research:** Conduct bulk domain analysis to understand the online presence and digital footprint of companies within a specific market segment.
*   **Competitive Analysis:** Analyze the domains of competitor companies to gain insights into their online strategies and identify potential opportunities or threats.

## How it works:

1.  The workflow is triggered manually using the "When clicking 'Execute Workflow'" node.
2.  The "Reads lastname,firstname and company from your sheet" node retrieves a list of companies from a specified Google Sheet, expecting a column named "company".
3.  The "Authenticates to your Icypeas account" node prepares the data and authenticates with the Icypeas API using a generated signature. It requires the user to input their API Key, API Secret, and User ID, retrieved from their Icypeas profile. The signature is generated using the crypto module, ensure it is enabled in your n8n settings.
4.  The "Run bulk search (domain-search)" node then sends a POST request to the Icypeas API to initiate the domain scan. The API key and signature are passed in the header for authentication.
5.  The scan results will be available for download in the Icypeas application, and the user will receive the scan results via email from no-reply@icypeas.com.

## Services:

*   Google Sheets
*   Icypeas API ([https://icypeas.com](https://icypeas.com))

## Hashtags:

#n8n #automation #workflow #domainscan #leadgeneration
