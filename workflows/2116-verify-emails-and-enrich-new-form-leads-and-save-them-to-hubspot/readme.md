# Contact Form to Smart Hubspot Lead

## Use cases:

- **Automated Lead Capture and Enrichment:** Automatically capture leads from a contact form, verify their email addresses, and enrich their profiles with company and personal information before adding them to HubSpot.
- **Targeted Lead Qualification:** Use the email verification and data enrichment steps to qualify leads, ensuring that only valid and potentially valuable leads are added to HubSpot.
- **Streamlined Sales and Marketing Processes:** Automate the initial stages of the sales and marketing funnel by automatically capturing, enriching, and adding leads to HubSpot, saving time and improving efficiency.

## How it works:

1.  **n8n Form Trigger:** The workflow starts when a user submits the "Contact us" form. The form captures the user's business email.
2.  **Hunter:** The Hunter node verifies the validity of the submitted email address.
3.  **Check if the email is valid:** This node checks the `status` returned by Hunter. If the status is "valid", the workflow proceeds to enrich the lead. If not, the workflow ends at the "Email is not valid, do nothing" node.
4.  **Enrich person:** The Clearbit node enriches the lead's profile with personal information (e.g., job title, name) based on their email address.
5.  **Enrich company:** This Clearbit node enriches the lead's profile with company information (e.g. company size, domain) based on the enriched person's data.
6.  **Add lead to Hubspot:** Finally, the HubSpot node creates a new contact in HubSpot, populating the contact's fields with the enriched data (job title, last name, first name, company name, company size).

## Services:

-   Hunter.io
-   Clearbit
-   HubSpot

## Hashtags:

#n8n #automation #leadgeneration #hubspot #clearbit
