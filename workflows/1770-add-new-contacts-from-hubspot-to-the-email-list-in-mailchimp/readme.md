# HubSpot Contacts to Mailchimp Subscribers

## Use cases:

*   **Daily Newsletter Subscription:** Automatically subscribe new contacts added to HubSpot to a Mailchimp newsletter at the start of each day.
*   **Marketing Automation:** Add new HubSpot leads to a specific Mailchimp audience for targeted email campaigns.
*   **Contact List Syncing:** Keep Mailchimp subscriber lists up-to-date with new contacts created in HubSpot.

## How it works:

This workflow automates the process of subscribing new HubSpot contacts to a Mailchimp list.

1.  **Trigger:** The workflow starts daily at 7:00 AM using the "Every day at 07:00" Cron node.
2.  **Fetch New Contacts:** The "Get new contacts" HubSpot node searches for contacts created in HubSpot since yesterday. It uses the HubSpot OAuth2 API for authentication. The filter is set to search contacts that `createdate` is Greater than or equals yesterday and Less than Today.
3.  **Create Mailchimp Subscriber:** The "Create member" Mailchimp node then takes each contact found in HubSpot and adds them as a subscribed member to a specified Mailchimp list. It uses the Mailchimp OAuth2 API for authentication. It uses the email, firstname and lastname from the HubSpot contact's properties.

## Services:

*   HubSpot
*   Mailchimp

## Hashtags:

#n8n #HubSpot #Mailchimp #Automation #EmailMarketing
