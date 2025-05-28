# Create a table, and insert and update data in the table in Snowflake

## Use cases:
- **Database Initialization:** Automatically set up a Snowflake database table with a predefined schema for new projects or applications.
- **Data Synchronization:** Keep data consistent between n8n and a Snowflake database by updating records based on changes detected in n8n.
- **Data Transformation and Loading:** Create tables and load transformed data into Snowflake from various data sources, such as CSV files or other APIs.

## How it works:
1. **Trigger:** The workflow starts manually by clicking the "On clicking 'execute'" trigger node.
2. **Create Table:** The "Snowflake" node executes a SQL query to create a table named `docs` with `id` (INT) and `name` (STRING) columns.
3. **Set Initial Data:** The "Set" node defines initial data with `id = 1` and `name = 'n8n'`.
4. **Insert Data:** The "Snowflake1" node inserts the data defined in the previous set node into the `docs` table.
5. **Set Updated Data:** The "Set1" node defines updated data with `id = 1` and `name = 'nodemation'`.
6. **Update Data:** The "Snowflake2" node updates the `name` column in the `docs` table where the `id` is 1 using the data defined in the "Set1" node.

## Services:
- Snowflake

## Hashtags:
#n8n #snowflake #automation #database #data
