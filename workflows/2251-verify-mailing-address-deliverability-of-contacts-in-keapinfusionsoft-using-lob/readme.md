# Keap Address Verification Workflow

## Use Cases

- **Automated Address Validation for New Contacts:** Automatically verify the mailing address of new contacts added to Keap to ensure deliverability and accuracy.
- **Proactive Address Correction:** Identify potentially incorrect or undeliverable addresses, allowing for timely correction and improved communication.
- **Lead Qualification:** Use address deliverability as a factor in lead qualification, prioritizing leads with valid addresses for sales and marketing efforts.

## How it Works

This workflow automates the process of verifying mailing addresses in Keap using the Lob.com API. Here's a step-by-step breakdown:

1.  **CRM Webhook Trigger:** The workflow is triggered when a new contact is added to Keap, receiving contact details including address fields via a webhook.
2.  **Set Address Fields:** Extracts and formats the address components (address, address2, city, state, zip code) from the webhook data.
3.  **Address Verification:** Sends a request to the Lob.com API with the formatted address to verify its deliverability.  The workflow uses Basic Authentication and requires the user to have a Lob.com account and API key.
4.  **Switch:** Evaluates the `deliverability` status returned by Lob.com.
5.  **Update Keap - Deliverable/NOT Deliverable:** Based on the deliverability status, the workflow updates the contact in Keap:
    *   If the address is deliverable, a tag "Mailing Address Deliverable" is applied.
    *   If the address is not deliverable, a tag "Mailing Address NOT Deliverable" is applied, triggering a follow-up process (e.g., manual verification or contact outreach).

## Services

-   **Keap:** CRM platform for managing contacts and automating sales and marketing processes.
-   **Lob.com:** API for address verification and other mailing-related services.

## Hashtags

#n8n #automation #Keap #CRM #addressVerification
