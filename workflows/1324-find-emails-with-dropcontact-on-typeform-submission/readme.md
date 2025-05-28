# Lead Capture and Contact Management Workflow

## Use cases:

- Automatically capture leads from a Typeform survey and enrich their data using Dropcontact.
- Update or create contact information in Airtable, ensuring your contact list is always up-to-date.
- Send Slack notifications when a new lead subscribes or an existing lead updates their information.

## How it works:

1.  **Typeform Trigger:**  The workflow starts when a new submission is received from a specified Typeform.
2.  **Dropcontact:** The data from Typeform, including email, company name, and website, is sent to Dropcontact to enrich the lead's information (e.g., first name, last name, LinkedIn profile, phone number, etc.).
3.  **Airtable - Contact List:** It searches for the contact in Airtable using the full name obtained from the Typeform trigger.
4.  **Contact ID empty?:** This step checks if a contact with the same full name already exists in Airtable.
5.  **If Contact Doesn't Exist (Create):**
    *   **Set - Contacts to update:** If the contact is not found (the ID is empty), this node prepares the enriched contact data for creating a new record in Airtable, including data such as first name, last name, LinkedIn profile, email, phone, website, LinkedIn company, industry, and address.
    *   **Airtable - Create Contacts:** Creates a new contact in the "Contacts" table with the enriched data from Dropcontact.
    *   **Slack:** A Slack message is sent to a specified channel, notifying that a new lead has subscribed.
6.  **If Contact Exists (Update):**
    *   **Set - Contacts to create:** If the contact is found, this node prepares the enriched contact data for updating the existing record in Airtable, including data such as first name, last name, LinkedIn profile, email, phone, website, LinkedIn company, industry, and address.
    *   **Airtable - Update Contacts1:** Updates the existing contact record in Airtable with the enriched data from Dropcontact.
    *   **Slack1:** A Slack message is sent to a specified channel, notifying that an existing lead has subscribed and updated their information.

## Services:

-   Typeform
-   Dropcontact
-   Airtable
-   Slack

## Hashtags:

#n8n #automation #leadgeneration #crm #airtable #slack
