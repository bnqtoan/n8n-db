# Create and Update Person in Copper CRM

## Use cases:

*   **Lead Enrichment:** Automatically create a new person record in Copper CRM when a new lead is identified, and then update it with additional information like phone numbers.
*   **Contact Information Management:** Allow users to manually trigger the creation of a new contact and update its details, ensuring contact information in Copper CRM is always up-to-date.

## How it works:

1.  **Manual Trigger:** The workflow starts when a user manually triggers it using the "On clicking 'execute'" node.
2.  **Create Person in Copper:** A new person record is created in Copper CRM using the "Copper" node. The node uses the Copper API, and the name is set to "Harshil", with email "harshil@n8n.io".
3.  **Update Person's Phone Number:** The "Copper1" node updates the phone number of the person record created in the previous step.  It retrieves the `id` from the previous node and updates the phone number to "1234567890".
4.  **Get Person Details:** Finally, the "Copper2" node fetches and returns the updated person's details from Copper CRM using the Copper API, using the `id` from previous nodes.

## Services:

*   Copper CRM

## Hashtags:

#n8n #automation #crm #copper #contactmanagement
