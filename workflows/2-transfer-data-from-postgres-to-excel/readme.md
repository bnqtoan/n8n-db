# n8n Workflow: Export PostgreSQL Query to Spreadsheet

This workflow automates the process of extracting data from a PostgreSQL database, converting it into a spreadsheet file (XLS), and saving it to a file.

## Use cases:

*   **Scheduled Data Export:** Automate daily/weekly exports of product data from a database for reporting or analysis.
*   **Data Backup:** Create regular backups of specific database tables in a spreadsheet format for archival purposes.
*   **Simplified Data Sharing:** Provide non-technical users with easy access to database data by exporting it to a familiar spreadsheet format.

## How it works:

1.  **Run Query (PostgreSQL Node):** This node executes a SQL query (`SELECT name, ean FROM product`) against a PostgreSQL database. It retrieves the `name` and `ean` columns from the `product` table. The PostgreSQL connection is defined by the credentials named "postgres".
2.  **Spreadsheet File Node:** This node takes the data from the previous node (the query results) and converts it into a spreadsheet format, specifically an XLS file.  The `toFile` operation parameter specifies that it should prepare the data for file output.
3.  **Write Binary File Node:** This node takes the binary spreadsheet data from the `Spreadsheet File` node and writes it to a file named `spreadsheet.xls`. The file will be saved in the n8n's configured data directory.

## Services:

*   PostgreSQL Database
*   Spreadsheet (XLS format)

## Hashtags:

#n8n #PostgreSQL #Spreadsheet #DataExport #Automation
