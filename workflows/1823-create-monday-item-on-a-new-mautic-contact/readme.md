# Mautic Contact to Monday.com Item

## Use cases:

- Automatically create a new item in a Monday.com board when a new contact is created in Mautic, streamlining lead tracking and management.
- Synchronize contact information from Mautic to Monday.com, ensuring that sales and marketing teams have access to the latest lead data in their project management tool.

## How it works:

1.  **Mautic Trigger (On created contact):** The workflow starts when a new contact is created in Mautic. It listens for the `mautic.lead_post_save_new` event.
2.  **Create Item (Monday.com):** When a new contact is created, this node takes the first name, last name, and email from the Mautic contact data. It then creates a new item on the specified Monday.com board (`boardId`) within the `topics` group, populating the item's name with the contact's full name and the email column with the contact's email address.

## Services:

-   Mautic
-   Monday.com

## Hashtags:

#n8n #automation #mautic #mondaycom #crm
