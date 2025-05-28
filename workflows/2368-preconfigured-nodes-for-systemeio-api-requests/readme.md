# My Workflow

## Use cases:

- **Contact Management:** Retrieve comprehensive contact lists, filtered by specific tags, from Systeme.io for reporting, analysis, or synchronization with other systems.
- **Tag-Based Segmentation:** Automatically fetch and segment contacts based on their assigned tags in Systeme.io, enabling targeted marketing campaigns.
- **Data Migration/Backup:** Extract all contacts and tags from Systeme.io as a backup or for migrating data to another platform.

## How it works:

This workflow automates the retrieval of contacts and tags from Systeme.io, a marketing platform. It uses the Systeme.io API to fetch all contacts, all tags, and contacts filtered by specific tags.

1.  **Get All Contacts:** The "Systeme | Get all contacts" node retrieves all contacts from Systeme.io using the API's pagination feature to handle large datasets. It sends a request to the `/api/contacts` endpoint, using the `startingAfter` parameter to iterate through all pages of contacts.
2.  **Split Out Contacts:** The "Split Out2" node takes the array of contacts received from the previous node and splits it into individual contact items, processing them one by one.
3.  **Get All Tags:** Similarly, the "Systeme | Get All tags" node fetches all tags from Systeme.io using the `/api/tags` endpoint and the same pagination strategy.
4.  **Split Out Tags:** The "Split Out" node splits the array of tags into individual tag items.
5.  **Get Contacts with Tag:** The "Systeme | Get contacts with tag" node retrieves contacts that have a specific tag (in this case, tag ID "1012751"). It uses the `/api/contacts` endpoint with the `tags` query parameter.
6.  **Split Out Contacts with Tag:** The "Split Out3" node splits the array of contacts with the specified tag into individual contact items.
7. **Add Contact**: The "Systeme | Add contact" node, add contact to Systeme.io
8. **Sticky Notes**: The "Sticky Note" nodes are used for documentation.

## Services:

-   Systeme.io: The workflow interacts with the Systeme.io marketing platform via its API.

## Hashtags:

#n8n #automation #systemeio #contacts #tags
