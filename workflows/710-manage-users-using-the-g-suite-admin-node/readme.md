# Create, update, and get a user using the G Suite Admin node

## Use cases:

*   **Automated User Management:** Automatically create, update, and retrieve user information in your G Suite domain when a new employee is added to a database or HR system.
*   **Profile Synchronization:** Keep user profiles consistent across different systems by updating G Suite profiles whenever information changes in another system, such as a CRM.
*   **Onboarding/Offboarding Automation:** Streamline the user onboarding process by automatically creating new G Suite accounts and setting initial profiles, or deprovisioning accounts during offboarding.

## How it works:

1.  The workflow is initiated manually by clicking the "execute" button (`On clicking 'execute'` node).
2.  A new user is created in the specified G Suite domain (`n8n.io`) using the `G Suite Admin` node. The node sets the first name to "Nathan", last name to "Nat", username to "nat", and a password. The Google Workspace Admin API is used for authentication.
3.  The workflow then updates the user's last name to "Nate" using the `G Suite Admin1` node, referencing the user ID from the previous step.
4.  Finally, the workflow retrieves the updated user information using the `G Suite Admin2` node, again using the user ID obtained from the creation step.

## Services:

*   Google Workspace Admin API (via the n8n G Suite Admin node)

## Hashtags:

#n8n #GSuite #Automation #UserManagement #GoogleWorkspace
