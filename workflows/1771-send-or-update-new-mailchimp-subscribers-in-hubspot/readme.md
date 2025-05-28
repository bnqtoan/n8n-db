# Mailchimp to HubSpot Contact Sync

## Use cases:

- **Automatic Contact Synchronization:** Keep your HubSpot contact list up-to-date with the latest changes in your Mailchimp audience, ensuring consistent data across platforms.
- **Targeted Marketing Campaigns:** Utilize synchronized contact data in HubSpot to create more effective and personalized marketing campaigns based on Mailchimp subscription information.
- **Sales and Marketing Alignment:** Provide sales teams with the most current contact information from Mailchimp within HubSpot, improving lead qualification and outreach efforts.

## How it works:

1.  **Schedule Trigger:** The workflow starts every day at 7:00 AM using a "Cron" node.
2.  **Get Last Execution Timestamp:** A "Function Item" node retrieves the timestamp of the last workflow execution from static data. If it's the first run, it initializes the timestamp to the current date. This timestamp is used to fetch only the members who have changed since the last execution.
3.  **Get Changed Members from Mailchimp:** The "Mailchimp" node retrieves a list of Mailchimp members who have been updated since the "lastExecution" timestamp. It uses the Mailchimp API to get the list of changed members from a specified Mailchimp list.
4.  **Create/Update Contact in HubSpot:** For each changed member, the "HubSpot" node either creates a new contact or updates an existing contact in HubSpot. It uses the member's email address to identify the contact and updates the first name and last name.
5.  **Set New Last Execution Timestamp:** After processing all changed members, a "Function Item" node updates the static data with the current timestamp, ensuring that the next workflow execution only fetches changes made since this run. This node executes only once at the end of the process.

## Services:

-   Mailchimp: For fetching updated member information.
-   HubSpot: For creating and updating contacts.

## Hashtags:

#n8n #automation #mailchimp #hubspot #contactsync
