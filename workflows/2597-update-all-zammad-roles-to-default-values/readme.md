# Update all Zammad Roles to default values

## Use cases:

- **Role Compliance:** Ensures that all active users in Zammad have the correct default roles assigned, maintaining compliance and security.
- **User Onboarding:** Automatically assigns default roles to new users upon creation in Zammad, streamlining the onboarding process.
- **Role Reset:** Resets user roles to the default configuration after temporary role changes or audits.

## How it works:

1.  **Trigger:** The workflow starts manually with the "When clicking ‘Test workflow’" node.
2.  **Define Variables:** The "Basic Variables" node sets up crucial variables such as the Zammad base URL, API key, default role IDs, and user IDs to exclude.
3.  **Fetch Roles:** The "Get all Roles" node retrieves all roles from Zammad using an HTTP request to the Zammad API.
4.  **Fetch Users:** The "Get all Users" node fetches all users from Zammad.
5.  **Create Role Object:** The "Zammad Univeral Role Object" node extracts specific information (role ID, name) from each role for later use or filtering.
6.  **Filter Roles (Optional):** The "Filter Roles if needed" node checks for a specific condition and filters the roles based on whether a role exists.
7.  **Convert to Excel Roles:** The "Convert to Excel Roles" node transforms the role data into an Excel file.
8.  **Create User Object:** The "Zammad Univeral User Object" node extracts specific information (user ID, email, firstname, lastname, role_ids, groups, active) from each user.
9.  **Conditional Check:** The "If" node evaluates conditions, including:
    *   Whether the user ID is in the exclusion list.
    *   Whether the user is active.
10. **Update Roles:** The "Update Users to default Role(s)" node sends a PUT request to the Zammad API to update the user's role IDs to the defined default roles. The request includes the Zammad base URL, user ID, API key, and the default role IDs in the request body.

## Services:

-   **Zammad:** The workflow interacts with a Zammad instance via its API to retrieve user and role data and to update user roles.

## Hashtags:

#n8n #Zammad #automation #userManagement #roleManagement
