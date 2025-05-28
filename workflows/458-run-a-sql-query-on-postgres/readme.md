## n8n Workflow: Querying a PostgreSQL Database

This workflow automates the process of querying a PostgreSQL database and retrieving data.

**Use cases:**

*   **Data Extraction:** Regularly extract data from a PostgreSQL database for reporting or analysis purposes.
*   **Data Backup:** Schedule data backups from specific tables in your database.
*   **Monitoring:** Periodically check the contents of a table for specific conditions or changes.

**How it works:**

1.  The workflow is triggered manually by clicking the "Execute" button in n8n. (On clicking 'execute' node).
2.  The "Postgres" node connects to a PostgreSQL database using the provided credentials (`postgres-creds`).
3.  It executes a SQL query (`SELECT * from sometable;`) to retrieve all data from the `sometable` table.
4.  The retrieved data can then be used in subsequent nodes for further processing, transformation, or integration with other services (not included in this basic workflow).

**Services:**

*   PostgreSQL

**Hashtags:**

#n8n #PostgreSQL #database #automation #SQL
