# Contact Sync: Pipedrive & HubSpot

## Use cases:
- **Keep contact information synchronized between Pipedrive and HubSpot:** Automatically update contact details in one platform whenever changes occur in the other, ensuring data consistency across sales and marketing tools.
- **Enrich contact data:** By merging data from both platforms, create a more complete view of each contact with information from sales and marketing touchpoints.
- **Automate contact management:** Reduce manual data entry and minimize the risk of errors by automating the synchronization process.

## How it works:
1.  **Schedule:** The workflow starts with a `Cron` node, which triggers the workflow execution based on a defined schedule.
2.  **Fetch Contacts from Pipedrive:** The `Pipedrive` node retrieves all person records from Pipedrive using the Pipedrive API.
3.  **Fetch Contacts from HubSpot:** Simultaneously, the `HubSpot` node fetches all contact records from HubSpot using the HubSpot API.
4.  **Merge Records (Remove Duplicates):** The `Merge1` and `Merge2` nodes prepare the data to avoid infinite loops, removing the matched emails and identities to prevent the workflow from updating existing contact details indefinitely.
5.  **Update Pipedrive:** The `Update Pipedrive` node updates contact details in Pipedrive based on the information retrieved from HubSpot. The workflow updates the person's first name and email.
6.  **Update HubSpot:** The `Update HubSpot` node updates contact details in HubSpot based on the information retrieved from Pipedrive. The workflow updates the contact's first name and email.

## Services:
-   Pipedrive
-   HubSpot

## Hashtags:
#n8n #Pipedrive #HubSpot #ContactSync #Automation
