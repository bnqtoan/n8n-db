# GetResponse to Airtable Contact Sync

## Use cases:

*   Automatically add new GetResponse subscribers to an Airtable database for contact management and analysis.
*   Create a backup of GetResponse subscriber data in Airtable for data redundancy.
*   Use Airtable as a central repository for contacts collected from various sources, including GetResponse.

## How it works:

This workflow starts with a "GetResponse Trigger" node, which listens for new subscriber events in a specified GetResponse list. When a new subscriber joins the list, the trigger activates the workflow. The "Set" node then extracts the "contact\_name" and "contact\_email" fields from the webhook data received from GetResponse. Finally, the "Airtable" node appends a new record to the specified Airtable table ("Table 1") using the extracted name and email.

## Services:

*   GetResponse
*   Airtable

## Hashtags:

#n8n #GetResponse #Airtable #Automation #ContactManagement
