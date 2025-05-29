# Paycaptain MCP Server

## Use cases:

- **Employee Information Retrieval via MCP Client:** Enables users to query employee details (e.g., start date, work schedule) directly from their MCP client (like Claude Desktop) using natural language.
- **Employee Data Updates via MCP Client:** Allows authorized users to update specific employee information (e.g., NI number, address) through a user-friendly MCP interface.
- **Centralized Employee Management:** Provides a single point of access for employee management tasks, streamlining workflows and improving efficiency.

## How it works:

1.  **MCP Server Trigger:** The workflow starts with an MCP Server Trigger node, which listens for requests from an MCP client. The trigger is configured with inputs for `operation`, `query`, `employeeId`, and `values`.
2.  **Operation Router:** The "Operation" Switch node routes the request to different branches based on the `operation` parameter ("searchEmployees", "getEmployeeById", or "updateEmployee").
3.  **Tool Workflows:** Each branch calls the Tool Workflows which uses calls to the Paycaptain API to get or modify data.
    -   **Search Employees:** If the operation is "searchEmployees", the "Search Employees" Tool Workflow is executed. This workflow uses the Paycaptain API to search for employees based on a given query. The results are filtered to only expose a defined set of information, and strips sensitive fields before aggregation.
    -   **Get Employee by ID:** If the operation is "getEmployeeById", the "Get Employee" Tool Workflow retrieves employee details using the provided `employeeId`.
    -   **Update Employee:** For "updateEmployee", the "Update Employee" Tool Workflow updates employee data in PayCaptain. This workflow includes validation to ensure that only updatable fields are modified. The "Has Valid Request?" node makes sure request includes fields which can be updated. Editable fields are limited to firstname, middlename, lastname, mailingStreet, mailingCity, mailingStateProvince, mailingPostalCode, mailingCountry, email, phone, niNumber, location, department, team, jobGrade, and jobTitle.
4.  **PayCaptain API Interactions:** The "Get Employees" nodes (for search and get operations) and "Update Employee1" interacts with the PayCaptain API to retrieve and update employee information.
5.  **Data Transformation and Filtering:**
    -   The "Filter Matches" node filters search results based on how well it matches with the request.
    -   The "Strip Sensitive Fields" nodes remove sensitive data from the API responses, returning a clean and controlled set of information.
6.  **Google Sheets Logging:** The "Log Call" node logs all operations, including timestamp, operation type, query, employee ID, and updated values, to a Google Sheet for auditing purposes.
7.  **Aggregation:** The "Aggregate Search Results" and "Aggregate Get Response" nodes aggregate the retrieved and update Employee data into a single "response" field.

## Services:

-   PayCaptain API: Cloud-based payroll software API (developer.paycaptain.com)
-   Google Sheets: For logging and auditing MCP operations.

## Hashtags:

#n8n #automation #workflow #MCP #PayCaptain
