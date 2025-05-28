# Create, update and get a contact using the SendGrid node

## Use cases:

- Automatically create a new contact in SendGrid when a form is submitted on a website.
- Update contact information in SendGrid based on new data received from a CRM system.
- Retrieve contact details from SendGrid to populate a customer service application.

## How it works:

1.  The workflow is triggered manually by the "On clicking 'execute'" node.
2.  The "SendGrid" node creates a new contact in SendGrid, using a defined email and an optional first name.
3.  The "SendGrid1" node updates the previously created contact in SendGrid, adding a last name using the email from the first SendGrid node.
4.  The "SendGrid2" node retrieves the contact from SendGrid using the email from the first SendGrid node.

## Services:

-   SendGrid

## Hashtags:

#n8n #SendGrid #Automation #Contacts #EmailMarketing
