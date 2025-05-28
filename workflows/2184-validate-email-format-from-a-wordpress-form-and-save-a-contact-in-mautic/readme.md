# Wordpress Form to Mautic

## Use cases:

- Automatically create new contacts in Mautic when a user submits a form on a WordPress website.
- Enrich existing Mautic contact data with information submitted through WordPress forms.
- Prevent invalid emails from being added to Mautic, improving data quality and email deliverability.

## How it works:

1.  **WordpressForm:** The workflow starts when a form is submitted on a WordPress website. The webhook listens for POST requests to a specific path (`/917366ee-14a8-4fef-9f0b-6638cdc35fad`).
2.  **LeadData:** The data received from the WordPress form is then processed to extract and normalize relevant information such as name, email, phone number (WhatsApp), and form ID. n8n expressions are used to format the data and validate the email.
3.  **CreateContactMautic:** A new contact is created in Mautic, using the extracted data. The workflow maps the "name", "email", and "mobile" fields from the form to the corresponding contact properties in Mautic.
4.  **CheckEmailValid:** The workflow checks if the email address provided in the form is valid.
5.  **LeadMauticDNC:** If the email address is not valid, the contact is added to the "Do Not Contact" list in Mautic with the reason "Did not pass basic email validation".
6.  **End:** The workflow ends.

## Services:

-   WordPress
-   Mautic

## Hashtags:

#n8n #automation #wordpress #mautic #crm
