# Update Airtable CRM with telli Call Event Data and Appointment Status

## Use cases:

- **Automated CRM Updates:** Automatically update contact records in Airtable based on call events from the telli AI voice agent platform, ensuring that your CRM is always up-to-date with the latest call status and outcomes.
- **Real-time Follow-up Actions:** Trigger follow-up actions based on call outcomes. For example, if a call is marked as "NOT_REACHED," automatically flag the contact for follow-up.
- **Appointment Booking Management:** Streamline appointment booking by automatically updating Airtable records with appointment details when a call results in a scheduled appointment.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node that listens for POST requests from the telli API when a `call_ended` event occurs.
2.  **Route based on call_status:** The workflow uses a Switch node to route the execution flow based on the `call_status` received in the webhook payload. It checks if the status is "COMPLETED" or "NOT_REACHED."
3.  **Update Airtable (COMPLETED):** If the `call_status` is "COMPLETED", the workflow updates the corresponding contact record in Airtable, setting the `Call Status` to "COMPLETED" and updating the `Appointment booked` field with the scheduled appointment date and time.
4.  **Update Airtable (NOT_REACHED):** If the `call_status` is "NOT_REACHED", the workflow updates the Airtable contact record, setting the `Call Status` to "NOT_REACHED" and flagging the `Follow-up required` field to "true".

## Services:

-   **telli:** An AI-powered voice agent platform that sends call event data.
-   **Airtable:** A cloud-based service used as a CRM to store and manage contact information.

## Hashtags:

#n8n #automation #Airtable #CRM #telli
