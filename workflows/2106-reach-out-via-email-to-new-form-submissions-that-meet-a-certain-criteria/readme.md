# Contact Form Auto-Responder with Clearbit Enrichment

## Use cases:

- **Automated Lead Qualification:** Automatically qualify leads from a contact form based on their company size and B2B status, using Clearbit data to enrich the lead information.
- **Personalized Email Response:** Send personalized thank-you emails to leads who meet specific criteria, improving engagement and response rates.
- **Data Enrichment for CRM:** Enrich contact form submissions with Clearbit data and then send the enhanced information to a CRM like Salesforce or HubSpot (requires adding CRM integration node).

## How it works:

1.  **Form Submission:** The workflow starts with an `n8n Form Trigger` node that listens for new submissions on a specified web form.
2.  **Map Email Field:** The `Map email field` node is used to standardize the data by mapping the "What's your business email?" field from the form to a field named "email".
3.  **Filter out personal emails**: The `Filter out personal emails` node filters out submissions with personal emails(@gmail.com, @yahoo.com, @outlook.com,...).
4.  **Clearbit Enrichment:** The `Clearbit` node uses the submitted email address to fetch additional information about the person from Clearbit's API.
5.  **Company Enrichment:** The `Enrich Company` node uses the domain from the Clearbit's person data to get information about the company
6.  **Conditional Check:** The `If B2B and > 499 employees` node checks if the enriched data from Clearbit indicates that the contact works for a B2B company with more than 499 employees.
7.  **Send Email:** If the conditions are met, the `Send Email` node sends a personalized thank-you email via Gmail to the submitter, using the enriched data (e.g., their first name) in the email body. If the conditions are not met, the `Submission does not match criteria, don't do anything` node does nothing.

## Services:

-   Clearbit: Used for enriching contact information and company data.
-   Gmail: Used for sending automated emails.

## Hashtags:

#n8n #automation #leadgeneration #cleardit #emailmarketing
