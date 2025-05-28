# Notion and Google Contacts Sync

## Use cases:

- **Real-time Contact Synchronization:** Keep your Google Contacts and Notion database synchronized in real-time. Whenever a contact is created, updated, or deleted in either system, the changes are automatically reflected in the other.
- **Centralized Contact Management:** Use Notion as a central hub to manage your contacts. Any edits made in Notion will be pushed to Google Contacts, ensuring consistency across platforms.
- **Automated Contact Enrichment:** Automatically add contacts from Notion to specific Google Contact groups, facilitating targeted communication and organization.

## How it works:

1.  **Triggers:** The workflow starts either by:
    *   A Notion trigger that detects when a page (representing a contact) is created, updated, or deleted (`Page Created`, `Page updated`).
    *   A schedule trigger that runs every day at 3:00 AM (`Every day at 3am`).
    *   A schedule trigger that runs every minute (`Every 1min1`).
    *   A manual trigger (`When clicking ‘Test workflow’`).
2.  **Notion to Google Contacts Flow:**
    *   When a page is created or updated in Notion, the information is merged and checked if the contact exists in Google Contacts (`Find contact`). If not (`new contact`), a new contact is created in Google Contacts (`Google | Create Contact`). If the contact exists, it is updated (`Google | Update Contact`).
    *   If a page is deleted in Notion, the corresponding contact is deleted in Google Contacts (`Delete contact`).
3.  **Google Contacts to Notion Flow:**
    *   The workflow retrieves a sync token from Notion (`Retrieve Sync Token`) to get updates from Google Contacts (`Google | Get updates`).
    *   The retrieved contacts are split into individual entries (`Split Contacts`) and filtered by group (`Filter by Group2`).
    *   The workflow searches for the contact in Notion (`Find contacts1`).
    *   If the contact exists in Notion (`Exists in Notion1`) and was edited in Google (`Contact was edited in Google1`), the entry is updated in Notion (`Update contact`). Otherwise a new contact is created in Notion (`Save contact2`).
    *   If the contact no longer exists in Google (`Contact still exists`), the contact is deleted from Notion (`Delete contact2`).
4.  **Contact Enrichment:**
    *   The workflow retrieves all contact groups from Google (`List all groups1`).
    *   The information is then used to add the contact to a specific group in Google Contacts (`Google | Add contact to specific group`).
5.  **Data Handling:**
    *   Several `Set` nodes (`Globals`, `Globals2`, `Globals3`, `Globals4`) define global variables to pass data between nodes.
    *   ETags are saved in Notion to track changes and avoid redundant updates (`Save ETag`, `Save ETag1`, `Update ETag2`, `Update ETag3`).

## Services:

-   Google Contacts API
-   Notion API

## Hashtags:

#n8n #automation #workflow #googlecontacts #notion #contactsync
