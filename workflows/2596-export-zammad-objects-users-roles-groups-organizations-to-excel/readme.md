# Export Zammad Objects Users, Roles, Groups and Organizations to Excel

## Use cases:

- **Data Backup and Archiving:** Periodically export user, role, group, and organization data from Zammad to Excel files for backup purposes, ensuring data is preserved even if the Zammad instance is unavailable or undergoing maintenance.
- **Reporting and Analysis:** Extract Zammad data into Excel for creating custom reports and performing in-depth analysis on user demographics, role assignments, group memberships, and organizational structures, which may not be readily available within Zammad's native reporting tools.
- **Auditing and Compliance:** Regularly export Zammad configuration data to Excel for auditing purposes, allowing administrators to track changes in user roles, group memberships, and organizational structures over time, ensuring compliance with internal policies or external regulations.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Define Variables:** The "Basic Variables" node sets the Zammad base URL and API key.  **Note:**  These need to be manually configured.
3.  **Fetch Data:** The workflow retrieves data from Zammad using the following nodes:
    *   "Get all Users": Retrieves all user data from Zammad via the Zammad API.
    *   "Get all Organizations": Retrieves all organization data from Zammad via the Zammad API.
    *   "Get all Roles": Retrieves all role data from Zammad via an HTTP request to the Zammad API.
    *   "Get all Groups": Retrieves all group data from Zammad via an HTTP request to the Zammad API.
4.  **Transform Data:** The workflow transforms the data retrieved from the Zammad API into a universal Object:
    *   "Zammad Univeral User Object": Takes user information from Zammad to set the ID, organization_id, email, firstname, lastname, role_ids, and groups.
    *   "Zammad Univeral Organization Object": Takes organization information from Zammad to set the ID, name.
    *   "Zammad Univeral Role Object": Takes role information from Zammad to set the ID, name.
    *   "Zammad Univeral Group Object": Takes group information from Zammad to set the ID, name.
5.  **Filter Data:** Filters if needed
    *   "Filter Users if needed": Filters the user's data.
    *   "Filter Organizations if needed": Filters the organizations's data.
    *   "Filter Roles if needed": Filters the roles's data.
    *   "Filter Groups if needed": Filters the groups's data.
6.  **Convert to Excel:** The workflow converts the data into Excel files using the following nodes:
    *   "Convert to Excel Users": Converts the user data to an XLSX file named "Zammad\_Users.xslx".
    *   "Convert to Excel Organizations": Converts the organization data to an XLSX file named "Zammad\_Organizations.xlsx".
    *   "Convert to Excel Roles": Converts the role data to an XLSX file named "Zammad\_Roles.xlsx".
    *   "Convert to Excel Groups": Converts the group data to an XLSX file named "Zammad\_Groups.xlsx".

## Services:

-   Zammad API

## Hashtags:

#n8n #Zammad #Automation #Excel #DataExport
