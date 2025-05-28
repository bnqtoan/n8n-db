# Entra User to Zammad User Sync

## Use cases:

- **Automated User Provisioning:** Automatically create or update user accounts in Zammad based on user data from Entra ID (Azure Active Directory), ensuring consistency between systems.
- **Real-time User Data Synchronization:** Keep user information like name, phone number, and email synchronized between Entra ID and Zammad, reducing manual data entry and potential errors.
- **Automated User Deactivation:** When a user is removed or deactivated in Entra ID, automatically deactivate the corresponding user account in Zammad.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Fetch Zammad Users:** The workflow fetches all users from Zammad using the "Get Zammad Users" node.
3.  **Fetch Entra Groups:** The workflow retrieves all groups from Entra ID using the "Get Groups from Entra" node.
4.  **Select Target Entra Group:** Filters the groups to select the Entra ID group containing the users to be synced to Zammad (node name: "Select Entra Zammad default Group"). The group is filtered by `displayName` **"ENTRA"**. *Make sure to change it to your Entra Group Name.*
5.  **Get Group Members:** It retrieves members of the specified Entra ID group using the "Get Members of the default group" node.
6.  **Extract User Data:** The "Remove outer Array from Entra User" and "If" nodes extract relevant user information (email, first name, last name, phone numbers) from the Entra ID user objects.
7.  **Create Zammad User Object:** The "Zammad Univeral User Object" node creates a standardized user object with properties such as `entra_key`, `email`, `lastname`, `firstname`, `mobile`, and `phone`.
8.  **Merge Datasets:** The "Merge" node combines the data from Zammad and Entra ID to have all users in one dataset and to allow lookup for exising users.
9.  **Find New Zammad Users:** The "Find new Zammad Users" node compares the Entra ID user list with the Zammad user list based on the email addresses. If a user exists in Entra ID but not in Zammad, the workflow creates a new user in Zammad using the "Create Zammad User" node.
10. **Update Existing Zammad Users:** For users that exist in both Entra ID and Zammad, the workflow updates the user's information in Zammad (phone, mobile, firstname, lastname, and a custom field `entra_key`) using the "Update Zammad User" node.
11. **Find Removed Users:** The "Find removed Users" node compares the Zammad user list with the Entra ID user list based on the `entra_key`. If a user exists in Zammad but not in Entra ID, the workflow deactivates the user in Zammad using the "Deactivate Zammad User" node.

## Services:

-   Microsoft Entra ID (Azure Active Directory) via Microsoft Graph API
-   Zammad

## Hashtags:

#n8n #automation #EntraID #Zammad #userSync
