# Verify Company LinkedIn Page by Domain

## Use cases:

- **Lead Qualification:** Automatically verify the LinkedIn page of a potential lead to ensure it matches their claimed company domain, improving the quality of sales leads.
- **Data Enrichment:** Validate LinkedIn URLs during data enrichment processes to prevent inaccurate information from being added to databases or CRM systems.
- **CRM Hygiene:** Regularly check existing LinkedIn links in a CRM to confirm they still belong to the correct company, maintaining data integrity.

## How it works:

1.  **Trigger:** The workflow is triggered either by a form submission ("On form submission" node) or when executed by another workflow ("When Executed by Another Workflow" node). Both triggers accept the Company LinkedIn URL, Company Domain, and Airtop Profile as input.
2.  **Unify Parameters:** The "Unify Params" node stores the input parameters (LinkedIn URL, company domain, and Airtop Profile name) into variables for easier access.
3.  **Get company website from LinkedIn profile:** The "Get company website from LinkedIn profile" node uses the Airtop service to extract the website URL from the provided LinkedIn company page, using the provided Airtop profile for authentication.
4.  **Filter:** The "Filter" node checks if the extracted website URL contains the provided company domain.
5.  **Map Response:** If the domain is found within the extracted website URL, the "Map response" node creates an output with the verified LinkedIn URL.
6. The workflow completes returning the company LinkedIn URL.

## Services:

*   **Airtop:** Used to extract the website URL from the LinkedIn profile page.

## Hashtags:

#n8n #LinkedIn #DataVerification #Automation #LeadQualification
