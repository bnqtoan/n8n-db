# Send SMS to numbers stored in Airtable with Twilio

## Use cases:

- Send personalized SMS notifications to customers based on data stored in Airtable (e.g., appointment reminders, special offers).
- Automate SMS alerts to team members when a new record is added to an Airtable database (e.g., task assignments, lead notifications).
- Bulk SMS messaging for marketing campaigns or announcements using Airtable as the contact list and message customization source.

## How it works:

1.  The workflow is manually triggered by clicking the "execute" button in n8n.
2.  The "Airtable" node retrieves a list of records from a specified table in Airtable.  It expects the table to contain fields such as "Name" and "Number". *Note: The specific Airtable table and application must be configured in the Airtable node's settings.*
3.  For each record retrieved from Airtable, the "Twilio" node sends an SMS message.  The message is personalized using data from the "Name" field of the Airtable record.  The recipient's phone number is retrieved from the "Number" field of the Airtable record.  The Twilio node requires valid credentials to connect to your Twilio account, and a valid "from" number.

## Services:

-   Airtable
-   Twilio

## Hashtags:

#n8n #automation #SMS #Airtable #Twilio
