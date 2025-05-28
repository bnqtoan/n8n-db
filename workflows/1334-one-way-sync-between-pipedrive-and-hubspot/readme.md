# Contact Sync: Pipedrive to HubSpot

## Use cases:

- **Lead Enrichment:** Automatically creates or updates contact information in HubSpot with data from Pipedrive, ensuring your marketing and sales teams have the most up-to-date lead details.
- **Data Consolidation:** Centralizes contact data from different CRM systems into HubSpot, providing a single source of truth for customer information.
- **Sales and Marketing Alignment:** Keeps contact information consistent between your sales (Pipedrive) and marketing (HubSpot) platforms, improving communication and collaboration.

## How it works:

1.  **Trigger:** The workflow starts with a `Cron` node, configured to run every minute, initiating the data synchronization process.
2.  **Fetch Contacts from Pipedrive:** The `Pipedrive` node retrieves all contact (person) records from Pipedrive using the Pipedrive API.
3.  **Fetch Contacts from HubSpot:** The `Hubspot` node retrieves all contact records from HubSpot using the HubSpot API.
4.  **Merge and Deduplicate:** The `Merge` node compares contacts from Pipedrive and HubSpot based on email addresses. It removes matching entries, in this case comparing `email[0].value` from pipedrive and `identity-profiles[0].identities[0].value` from hubspot, ensuring only new or updated contacts are processed.
5.  **Create/Update Contacts in HubSpot:** The `HubSpot2` node creates or updates contacts in HubSpot using data from Pipedrive. It uses the email address from Pipedrive and creates a contact or if it already exists updates the contact in HubSpot with the first name from Pipedrive.

## Services:

-   Pipedrive API
-   HubSpot API

## Hashtags:

#n8n #automation #CRM #Pipedrive #HubSpot #ContactSync
