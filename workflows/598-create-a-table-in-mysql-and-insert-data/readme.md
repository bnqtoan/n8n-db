# MySQL Table Creation and Data Insertion Workflow

## Use Cases:

*   **Database Setup:** Automate the initial setup of a MySQL database table with a predefined schema and initial data.
*   **Testing Environment Initialization:** Quickly create a consistent testing environment by automatically creating tables with specific columns and inserting default values.
*   **Demo Data Population:** Populate newly created database tables with sample data for demonstration or training purposes.

## How it Works:

This workflow automates the process of creating a MySQL table and inserting a row of data.

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered within n8n.
2.  **Table Creation:** The "MySQL" node executes a CREATE TABLE query to create a table named "test" with columns "id" (INT) and "name" (VARCHAR(255)), with "id" as the primary key.
3.  **Data Preparation:** The "Set" node defines the data to be inserted. It sets the "name" field to "n8n" and expects an "id" number that will be passed on from a previous node (although the workflow doesn't explicitly pass this value).
4.  **Data Insertion:** The "MySQL1" node attempts to insert the prepared data into the "test" table, specifying the "id" and "name" columns.

## Services:

*   MySQL

## Hashtags:

#n8n #MySQL #DatabaseAutomation #DataInsertion #WorkflowAutomation
