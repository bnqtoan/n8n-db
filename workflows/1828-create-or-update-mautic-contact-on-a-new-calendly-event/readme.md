# Calendly to Mautic Contact Sync

## Use cases:

- Automatically add new leads to Mautic when they schedule a meeting through Calendly.
- Keep contact information in Mautic up-to-date with the latest names provided during Calendly scheduling.
- Streamline lead generation and contact management by connecting Calendly scheduling activity with your Mautic CRM.

## How it works:

This workflow automates the process of creating or updating contacts in Mautic whenever a new event is created in Calendly:

1.  **On new event (Calendly Trigger):** The workflow starts when a new event, specifically an "invitee.created" event, occurs in Calendly. It listens for new meeting bookings.
2.  **Create/update contact (Mautic):**  The workflow takes the information from the Calendly event trigger, specifically the invitee's email and name. It then uses this information to either create a new contact in Mautic or update an existing contact if the email address already exists in Mautic.  The contact's first name is updated with the one from Calendly.

## Services:

-   Calendly
-   Mautic

## Hashtags:

#n8n #Calendly #Mautic #CRM #Automation
