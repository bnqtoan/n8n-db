# Entra Contacts to Zammad User Sync

## Use cases:

- **Automated User Management:** Keep Zammad user accounts synchronized with Entra ID (Azure Active Directory) contacts, ensuring that new contacts in Entra automatically become users in Zammad.
- **Contact Information Synchronization:** Automatically update user information (e.g., phone numbers, names) in Zammad whenever contact details are modified in Entra, maintaining data consistency across systems.
- **User Deactivation:** Automatically deactivate Zammad user accounts when corresponding contacts are removed from Entra, improving security and resource management.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Get Data:**
    *   **Get Zammad Users:** Retrieves all existing users from Zammad.
    *   **Get Contacts from Entra:** Fetches contacts from Entra ID using the Microsoft Graph API.
3.  **Process Entra Contacts:**
    *   **Entra Contacts:** Splits the array of contacts retrieved from Entra into individual items.
    *   **Filter contacts if needed:** Filters the contacts based on certain criteria (currently set to allow all contacts that exist).
    *   **Zammad Univeral User Object:** Transforms the Entra contact data into a format compatible with Zammad's user object, mapping fields like email, name, and phone numbers.  It also adds a custom field `entra_key` to store the Entra contact ID.
4.  **Merge & Compare:**
    *   **Merge:** Combines the existing Zammad users and transformed Entra contacts based on the `email` field.
    *   **Find new Zammad Users:** Compares the merged dataset to identify contacts present in Entra but not in Zammad, thus finding new users to be created.
    *   **Find removed Users:** Compares the merged dataset to identify users present in Zammad but not in Entra, thus finding users to be deactivated.
5.  **Zammad Actions:**
    *   **Update Zammad User:** Updates existing Zammad users with the latest information from Entra.
    *   **Create Zammad User:** Creates new Zammad user accounts for contacts found in Entra but not in Zammad.
    *   **Deactivate Zammad User:** Deactivates Zammad user accounts if the corresponding contact has been removed from Entra.
6. **Filter if needed:** Filters Zammad users from previous steps based on `entra_object_type` and `active` status.

## Services:

-   **Entra ID (Azure Active Directory):** Used to retrieve contact information via Microsoft Graph API.
-   **Zammad:** The helpdesk system where user accounts are created, updated, and deactivated.
-   **Microsoft Graph API:** Used to connect to Entra ID.

## Hashtags:

#n8n #automation #Zammad #EntraID #UserSync
