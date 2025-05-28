# Create a table and insert data into it

## Use cases:

- Automatically set up database tables with predefined schemas when deploying new applications or services.
- Initialize database tables with default values for testing or demonstration environments.
- Automate database schema creation as part of a larger data pipeline or ETL process.

## How it works:

This workflow automates the process of creating a table in a QuestDB database and then inserting data into it.

1.  **On clicking 'execute'**: This node triggers the workflow execution manually.
2.  **QuestDB**: Executes a SQL query to create a table named `test` with two columns: `id` (INT) and `name` (STRING).
3.  **Set**: This node sets the values that will be inserted into the `test` table. It sets the `name` column to "Tanay" and initializes the `id` column (though without a specific value).
4.  **QuestDB1**: This node then inserts data into the `test` table (created in step 2) using the values provided in the "Set" node. It maps the n8n data to the `id` and `name` columns of the `test` table.

## Services:

-   QuestDB

## Hashtags:

#n8n #QuestDB #database #automation #SQL
