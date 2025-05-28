# Create, update and get a user from Iterable

## Use cases:

- **User Data Synchronization:** Automatically create or update user profiles in Iterable whenever new users are added to a system or their information changes.
- **Targeted Marketing Campaigns:** Ensure Iterable user data is always up-to-date to enable precise targeting for marketing campaigns, based on the most recent user attributes.
- **Data Validation and Retrieval:** Verify the existence and details of a user in Iterable as part of a larger data validation or user management process.

## How it works:

This workflow automates the process of creating, updating, and retrieving user data in Iterable. Here's a breakdown:

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "On clicking 'execute'" node.
2.  **Create User (Iterable Node):** The "Iterable" node creates a new user in Iterable based on the provided email.
3.  **Update User (Iterable1 Node):** The "Iterable1" node updates the user created in the previous step. It references the email from the previous node and allows adding or modifying additional data fields, such as user name.
4.  **Get User (Iterable2 Node):** The "Iterable2" node retrieves the user's data from Iterable using the email from the previous node.

## Services:

*   Iterable

## Hashtags:

#n8n #Iterable #Automation #UserManagement #CRM
