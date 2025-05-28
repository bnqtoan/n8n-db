# Get All Mautic Contacts

## Use cases:

- **Data Export:** Regularly extract all contacts from Mautic to create backups or analyze the data in external tools.
- **Synchronization:** Retrieve contact information from Mautic to synchronize with other CRM or marketing platforms.
- **Reporting:** Fetch all contacts to generate reports on contact demographics, engagement, and other relevant metrics.

## How it works:

1.  The workflow is triggered manually using the "On clicking 'execute'" node.
2.  The "Mautic" node then uses OAuth2 authentication to connect to your Mautic instance.
3.  It retrieves all contacts using the "getAll" operation.

## Services:

*   Mautic

## Hashtags:

#n8n #mautic #automation #crm #contacts
