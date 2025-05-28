# Create, update and get a contact in Google Contacts

## Use cases

*   Automatically create a new contact in Google Contacts with basic information when a specific event occurs in another system (e.g., a new user signs up on a website).
*   Update an existing contact's information in Google Contacts, such as their company details or job title, based on data changes in a CRM or database.
*   Retrieve specific details (e.g., organization) of a contact from Google Contacts and use that information in another workflow or system.

## How it works

1.  The workflow is manually triggered by the "On clicking 'execute'" node.
2.  The "Google Contacts" node creates a new contact in Google Contacts with the given name and family name set to "n8n".
3.  The "Google Contacts1" node updates the contact created in the previous step. It uses the `contactId` returned by the first "Google Contacts" node and updates the contact's organization information to `n8n`.
4.  The "Google Contacts2" node retrieves the contact using the `contactId` and returns the organizations information.

## Services

*   Google Contacts

## Hashtags

#n8n #googlecontacts #automation #contacts #crm
