# Connect Airtable Contacts to telli for Automated AI Voice Call Scheduling

## Use cases:

- **Lead Qualification:** Automatically schedule calls to new leads as soon as they are added to your Airtable CRM.
- **Appointment Reminders:** Trigger AI voice calls to remind clients of upcoming appointments stored in your Airtable.
- **Customer Feedback:** Schedule automated follow-up calls using telli after a product delivery or service completion is recorded in Airtable.

## How it works:

1.  **Airtable Trigger:** The workflow starts when a new record is created in your specified Airtable table. The trigger monitors the "Created Time" field.
2.  **Add Contact Request:** The data from the new Airtable record is sent to the telli API's `/add-contact` endpoint via an HTTP POST request. This adds the contact to the telli system.  The API key needs to be added in the authorization header.
3.  **Schedule Calls Request:** Immediately after adding the contact, another HTTP POST request is made to the telli API's `/schedule-call` endpoint. This schedules an AI voice call for the newly added contact, using the provided contact ID. The API key needs to be added in the authorization header.

## Services:

-   Airtable
-   telli API ([https://api.telli.com](https://api.telli.com))

## Hashtags:

#n8n #automation #Airtable #telli #AIVoiceAgent
