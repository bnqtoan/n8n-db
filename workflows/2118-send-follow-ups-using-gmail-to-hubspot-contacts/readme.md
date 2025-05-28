# HubSpot Contact Follow-up via Gmail

## Use cases:

- **Automated Sales Follow-up:** Automatically send follow-up emails to HubSpot contacts who haven't responded to the initial outreach email after a certain period (e.g., 30 days).
- **Re-engagement Campaign:** Re-engage with cold leads by sending personalized emails based on the information from Hubspot
- **Nurturing Leads:** Implement a lead nurturing strategy by automatically sending a sequence of emails to contacts based on their last engagement date.

## How it works:

1.  **Schedule Trigger:** The workflow starts every day at 9 am using a **Schedule Trigger** node.
2.  **Get HubSpot Contacts:** The **Get previously HubSpot contacts** node retrieves contacts from HubSpot that have a `notes_last_contacted` property, sorted ascending by the last contact date.
3.  **Check Last Contact Date:** The **if last contacted before a month** node checks if the contact was last contacted more than 30 days ago.
4.  **Get Hubspot Contact to engagement:** The **Get Hubspot Contact to engagement** node retrieves the number of engagement activities with the contact
5.  **Check number of engagements:** The **if there has been only one engagement** node checks if there has only been one previous email engagement.
6.  **Set Email Keys:** The **Set email keys** node defines the email content (subject, body, recipient) using data retrieved from HubSpot, populating fields like `firstname` and `email`.
7.  **Send Outreach Email:** The **Send outreach email** node uses Gmail to send the email to the contact.
8.  **Record Engagement in HubSpot:** The **Record engagement in HubSpot** node logs the email interaction in HubSpot to update the `notes_last_contacted` property.

## Services:

-   HubSpot
-   Gmail

## Hashtags:

#n8n #automation #hubspot #gmail #salesautomation
