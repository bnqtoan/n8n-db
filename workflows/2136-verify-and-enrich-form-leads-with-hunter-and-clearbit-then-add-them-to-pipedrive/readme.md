# Lead Collection and Enrichment Workflow

## Use cases:

- **Automated Lead Capture and Enrichment:** Capture leads from a form, verify their email addresses, enrich the lead data with company information, and create leads and organizations in Pipedrive.
- **Streamlined Sales Process:** Automatically create leads in Pipedrive, ensuring that sales teams have access to up-to-date and enriched lead information.
- **Improved Lead Quality:** By verifying email addresses and enriching lead data, this workflow ensures only valid and informative leads are added to Pipedrive.

## How it works:

1.  **Form Submission:** The workflow starts with an **n8n Form Trigger** node, which listens for submissions to a specified form.
2.  **Email Verification:** The **Verify email with Hunter** node verifies the submitted email address using the Hunter.io API.
3.  **Email Validation Check:** The **Check if the email is valid** node checks the status returned by Hunter.io. If the email is not valid, the workflow stops at the **Email is not valid, do nothing** node.
4.  **Clearbit Enrichment:** If the email is valid, the **Clearbit** node enriches the lead data using the Clearbit API, retrieving company and person information.
5.  **Pipedrive Person Search:** The **Search for person in Pipedrive** node searches for an existing person in Pipedrive using the email address.
6.  **New Person Check:** The **Is this a new person?** node checks if a person with the same email already exists in Pipedrive. If so, the workflow stops at the **Person already exists in Pipedrive, do nothing** node.
7.  **Pipedrive Organization Search:** The **Search for organization in Pipedrive** node searches for an existing organization in Pipedrive using the company name from Clearbit.
8.  **New Organization Check:** The **Is this a new organization?** node checks if an organization with the same name already exists in Pipedrive.
9.  **Create Organization (if needed):** If the organization does not exist, the **Create Organization** node creates a new organization in Pipedrive.
10. **Create Person:** The **Create Person** node creates a new person in Pipedrive, linking it to the organization (existing or newly created).
11. **Create Lead:** The **Create lead** node creates a new lead in Pipedrive, associating it with the person and organization.

## Services:

-   Hunter.io
-   Clearbit
-   Pipedrive

## Hashtags:

#n8n #automation #leadgeneration #sales #pipedrive
