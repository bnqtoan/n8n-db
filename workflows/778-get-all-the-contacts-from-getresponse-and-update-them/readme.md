# Get all the contacts from GetResponse and update them

## Use cases:

*   **Campaign Management:** Automatically updates contact information in GetResponse, ensuring data consistency across different campaigns.
*   **Contact Segmentation:** Filters contacts based on their campaign association and updates specific segments with new campaign assignments.
*   **Data Synchronization:** Regularly fetches contacts from GetResponse and applies updates based on predefined conditions, keeping the contact database current.

## How it works:

1.  The workflow starts with a **Manual Trigger** node, initiating the process when manually executed.
2.  The **GetResponse** node fetches all contacts from your GetResponse account. It uses the "getAll" operation and retrieves all available contact data.
3.  An **IF** node filters the contacts. It checks if the campaign name of each contact is not equal to "n8n".
4.  For contacts that do not belong to the "n8n" campaign, the **GetResponse1** node updates their information. Specifically, it updates the `campaignId` to "WRVXO" using the "update" operation. The `contactId` for update is taken from the previous IF node.
5.  Contacts belonging to "n8n" campain will go to the **NoOp** node which does nothing.

## Services:

*   GetResponse

## Hashtags:

#n8n #GetResponse #Automation #ContactManagement #CampaignUpdate
