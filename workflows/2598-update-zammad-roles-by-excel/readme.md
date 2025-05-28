# Update Roles by Excel

## Use cases:

- **Automated User Role Updates:** Automatically update user roles in Zammad based on data in an Excel file, ensuring consistent access control.
- **Scheduled Role Synchronization:** Regularly synchronize user roles between an Excel file (acting as a source of truth) and the Zammad helpdesk system.
- **Bulk Role Modification:** Efficiently modify roles for multiple users at once, eliminating the need for manual updates within Zammad.

## How it works:

1.  **Trigger:** The workflow starts when you manually execute it using the "When clicking 'Execute Workflow'" node.
2.  **Define Variables:** The "Basic Variables" node sets the Zammad base URL and the URL for the Excel file containing user data.
3.  **Download Excel:** The "Download Excel" node retrieves the Excel file from the specified URL.
4.  **Extract Data from Excel:** The "Extract from File" node parses the downloaded Excel file and extracts the user data (presumably including email and desired role IDs).
5.  **Create Zammad User Object:** The "Zammad Univeral User Object" node formats the extracted data into a structure suitable for updating user roles in Zammad, focusing on email and role_ids.
6.  **Find Zammad User:** The "Find Zammad User by email" node queries the Zammad API to find the user ID associated with the email address from the Excel data.
7.  **Merge Data:** The "Merge" node combines data from the Excel file and the "Find Zammad User by email" output, matching users by email.
8.  **Update User Roles:** The "Update User Roles" node sends a PUT request to the Zammad API to update the user's roles with the specified role IDs. The Zammad user id is added to the url.
9.  **Error Handling:** If updating user roles fails, the workflow continues without stopping, ensuring that other users are processed.

## Services:

-   **Zammad:** The workflow interacts with the Zammad helpdesk system to update user roles via its API.
-   **HTTP Request:** Used to download the excel file and interact with the Zammad API.

## Hashtags:

#n8n #Zammad #automation #Excel #UserManagement
