# Create entry in Mailchimp from Airtable

## Use cases

*   **Automated Newsletter Subscription:** Automatically subscribe new users from an Airtable database to a Mailchimp newsletter list.
*   **CRM Synchronization:** Keep your Mailchimp audience synchronized with customer data stored in Airtable, ensuring accurate contact information.
*   **Targeted Marketing Campaigns:**  Use Airtable fields (like "Interest") to automatically tag subscribers in Mailchimp, enabling targeted marketing campaigns based on customer preferences.

## How it works

This workflow automates the process of adding new contacts from an Airtable database to a Mailchimp audience.

1.  **Cron:** The workflow starts with a Cron node, which acts as a trigger. It can be configured to run on a schedule (e.g., daily, weekly) to periodically check for new entries in Airtable.
2.  **Airtable:** The Airtable node retrieves records from a specified table (named "Users") within a defined Airtable base ("apprZs8g4tIGDUtqQ").  It fetches the "Name," "Email," and "Interest" fields from each record.
3.  **Mailchimp:** For each record retrieved from Airtable, the Mailchimp node adds the contact to a specified Mailchimp list ("777b2643d4").  The email address, extracted from the Airtable "Email" field, is used to subscribe the contact. The "Name" field is mapped to the "FNAME" merge field in Mailchimp. The "Interest" field from Airtable adds tags to the subscriber in Mailchimp.

## Services

*   Airtable
*   Mailchimp

## Hashtags

#n8n #Airtable #Mailchimp #Automation #CRM
