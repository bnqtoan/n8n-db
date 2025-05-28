# Perform an email search with Icypeas (single)

## Use cases:

*   **Lead Generation:** Automatically search for email addresses of potential leads based on their first name, last name, and company/domain.
*   **Contact Enrichment:** Enhance existing contact lists by finding email addresses for individuals when you only have partial information (e.g., name and company).
*   **Recruitment:** Identify email addresses of potential candidates based on their name and the company they work for.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "When clicking 'Execute Workflow'" node.
2.  **Authentication:** The "Authenticates to your Icypeas account" Code node generates the necessary authentication headers for the Icypeas API. It uses your API Key, API Secret, and User ID to create a signature, including timestemp, to secure the request. **Important:** You need to replace the placeholder values ("PUT\_API\_KEY\_HERE", "PUT\_API\_SECRET\_HERE", "PUT\_USER\_ID\_HERE") with your actual Icypeas credentials.
3.  **Email Search Request:** The "Run email search (single)" HTTP Request node sends a POST request to the Icypeas API endpoint, including the authentication headers and the search parameters (firstname, lastname, domainOrCompany) in the body.
4.  **Result:** The Icypeas API performs the email search. You can view the results on the Icypeas platform: https://app.icypeas.com/bo/singlesearch?task=email-search

## Services:

*   Icypeas ([https://icypeas.com](https://icypeas.com)): Email search service.

## Hashtags:

#n8n #automation #emailsearch #icypeas #leadgeneration
