# Receive updates when a subscriber is added to a group and store the information in Airtable

## Use cases:

- Automatically record new subscribers added to a specific group in MailerLite to an Airtable database for tracking and analysis.
- Create a backup of subscriber group additions in Airtable to prevent data loss or facilitate reporting.
- Trigger further actions based on new subscriber additions, such as sending welcome emails or updating customer segments.

## How it works:

1.  The workflow starts with a "MailerLite Trigger" node that listens for the `subscriber.add_to_group` event in MailerLite. This node is triggered whenever a subscriber is added to a group.
2.  When the trigger activates, the "Set" node extracts the subscriber's "name" and "email" from the data received from MailerLite.
3.  Finally, the "Airtable" node appends a new record to the "Data" table in your specified Airtable base using the extracted subscriber information.

## Services:

-   MailerLite
-   Airtable

## Hashtags:

#n8n #automation #mailerlite #airtable #subscribermanagement
