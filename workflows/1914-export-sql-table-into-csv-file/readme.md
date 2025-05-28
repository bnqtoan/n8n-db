# Save SQL table as a CSV file

## Use cases:

- **Backup SQL data:** Regularly export data from a specific SQL table to CSV format for backup purposes.
- **Data analysis:** Extract data from an SQL table and save it as a CSV file for analysis in spreadsheet software like Excel or Google Sheets.
- **Data migration:** Convert data from an SQL table to CSV format for importing into another system or application.

## How it works:

1.  **Trigger:** The workflow starts when you manually click "Execute Workflow".
2.  **Set Table Name:** The "TableName" node sets the name of the SQL table to be queried (e.g., "SalesLT.ProductCategory").
3.  **Load MSSQL Data:** The "LoadMSSQLData" node executes an SQL query to select all data from the specified table, using the table name defined in the previous node. It uses the "Microsoft SQL account" credential to connect to the database.
4.  **Save CSV:** The "SaveCSV" node takes the data from the SQL query and saves it as a CSV file. The filename is dynamically generated using the table name from the "TableName" node and the file format ("csv").

## Services:

-   Microsoft SQL Server

## Hashtags:

#n8n #SQL #CSV #DataExport #Automation
