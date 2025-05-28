# Create, update and get a subscriber using the MailerLite node

## Use cases

- **Automated Subscriber Management:** Automatically create a new subscriber in MailerLite when a new user registers on your website or application.
- **Contact Information Update:** Keep subscriber information in MailerLite up-to-date by automatically updating their details (e.g., city) based on actions they perform on your platform.
- **Data Retrieval for Personalization:** Retrieve subscriber information from MailerLite to personalize emails or other communications based on their profile.

## How it works

This workflow automates the process of creating, updating, and retrieving subscriber information in MailerLite.

1.  **Trigger:** The workflow starts manually when you click the "execute" button (On clicking 'execute' node).
2.  **Create Subscriber:** The "MailerLite" node creates a new subscriber in MailerLite with the email `harshil@n8n.io` and name "Harshil."
3.  **Update Subscriber:** The "MailerLite1" node updates the subscriber created in the previous step. It uses the email of the created subscriber as the `subscriberId` and sets the custom field "city" to "Berlin."
4.  **Get Subscriber:** The "MailerLite2" node retrieves the subscriber's information from MailerLite using the same email.

## Services

-   MailerLite

## Hashtags

#n8n #automation #MailerLite #subscribermanagement #emailmarketing
