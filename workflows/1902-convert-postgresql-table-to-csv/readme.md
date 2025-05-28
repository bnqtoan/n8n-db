# PostgreSQL export to CSV

## Use cases:

- **Data Backup:** Regularly export data from a PostgreSQL table to CSV files for backup purposes, ensuring data safety and enabling restoration if needed.
- **Reporting:** Extract data from a PostgreSQL database and convert it to CSV format for easy integration with reporting tools or for sharing with stakeholders who may not have direct database access.
- **Data Migration:** Facilitate data migration from a PostgreSQL database to other systems or applications that support CSV import.

## How it works:

1.  The workflow starts with a "When clicking "Execute Workflow"" node, which triggers the workflow execution manually.
2.  The "TableName" node sets the name of the table.
3.  The "Postgres" node executes a SQL query to select all data from the table. The table name is dynamically injected using an expression that references the value set in the "TableName" node.  A PostgreSQL credential is used to authenticate.
4.  The "Spreadsheet File" node converts the data received from the "Postgres" node into a CSV file.

## Services:

-   PostgreSQL

## Hashtags:

#n8n #PostgreSQL #CSV #DataExport #Database
