# Calendly-Hubspot Company & Contact Creation

## Use cases:

- Automatically create or update company information in HubSpot when a Calendly meeting is booked, ensuring your CRM is always up-to-date with the latest company details.
- Enrich contact information in HubSpot based on the email address of the Calendly invitee, capturing valuable data from Clearbit to improve lead quality.
- Streamline lead management by creating new contacts or leads in HubSpot from Calendly bookings, even if the person's company isn't yet in your CRM.

## How it works:

1.  **Calendly Trigger:** The workflow starts when a new Calendly invitee is created (meeting booked).
2.  **Filter out personal emails:** Checks if the email provided by calendly is not a personal email such as gmail, yahoo, outlook, etc.
3.  **Enrich email:** Use the Clearbit to get person information based on its email.
4.  **If person has a company:** Checks if the invitee has a company domain associated with their email.
5.  **Enrich company:** Use Clearbit to get company information, based on the invitee's email domain.
6.  **Search company:** Searches HubSpot for the company using the domain obtained from Clearbit.
7.  **if company does not exist on CRM:** Checks if the company from "Search company" node exists or not.
8.  **Create company:** If the company doesn't exist, it creates a new company in HubSpot.
9.  **Update company:** if company exists, it updates the company information.
10. **Upsert contact:** Create the contact on Hubspot with the companyId field.
11. **Upsert lead:** If the person does not have a company, a lead will be created on Hubspot.

## Services:

-   Calendly
-   Clearbit
-   HubSpot

## Hashtags:

#n8n #automation #CRM #HubSpot #Calendly #leadgeneration
