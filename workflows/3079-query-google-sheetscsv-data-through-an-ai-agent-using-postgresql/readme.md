# SHEETS RAG

## Use cases:

-   **Automated Data Import and Management**: Automatically import data from Google Sheets into a PostgreSQL database whenever the sheet is updated. This ensures that the database always reflects the latest information from the spreadsheet.
-   **Natural Language Querying of Spreadsheets**: Enables users to ask questions about the data in their Google Sheets using natural language. The system translates these questions into SQL queries, executes them against the data stored in a PostgreSQL database, and provides the answers back to the user.
-   **Data Analysis and Reporting**: Facilitates data analysis by allowing users to query spreadsheet data stored in a structured database using natural language. This can be used to generate reports, dashboards, or other visualizations based on the data.

## How it works:

1.  **Google Drive Trigger**: The workflow starts when a specific Google Sheet is modified.
2.  **Set Node ("change\_this")**: Stores the URL and name of the Google Sheet that triggered the workflow.
3.  **Check Table Existence**: A PostgreSQL query checks if a table with the sheet name already exists in the database.
4.  **Fetch Sheet Data**: If the table doesn't exist, the data from the Google Sheet is fetched.
5.  **Create/Remove Table**: If table existence check fails, create table, otherwise it deletes and recreates a table if it exists.
6.  **Create Table Query**: A JavaScript code node dynamically generates a `CREATE TABLE` query based on the column names and inferred data types from the Google Sheet data.
7.  **Create Insertion Query**: A JavaScript code node prepares an `INSERT` query to populate the newly created table with data from the Google Sheet.
8.  **Execute Queries**: It execute queries to both create the table in postgres and then execute the insert queries with the right formatting.
9.  **LLM Query Agent**: The other workflow is triggered by a message received, uses `get_postgres_schema` tool to access the database and `query_executer` to execute the queries and respond.

## Services:

-   Google Sheets
-   Google Gemini Chat Model (PaLM Api)
-   PostgreSQL

## Hashtags:

#n8n #automation #GoogleSheets #PostgreSQL #dataIntegration
