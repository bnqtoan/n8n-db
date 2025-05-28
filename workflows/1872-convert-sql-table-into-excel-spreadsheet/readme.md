# Export MySQL Table to XLSX

## Use cases:

- **Data Backup:** Regularly export data from a MySQL table to an XLSX file for backup purposes. This ensures that you have a local copy of your data in a readily accessible format.
- **Reporting and Analysis:** Extract data from a MySQL database and save it as an XLSX file for further analysis and reporting in spreadsheet software like Microsoft Excel or Google Sheets.
- **Data Sharing:** Easily share a snapshot of your MySQL data with stakeholders who may not have direct access to the database. The XLSX format is universally compatible and easy to distribute.

## How it works:

The workflow starts with a manual trigger. When you click "Execute Workflow" in n8n:

1. **Set Table Name:** The "TableName" node sets the name of the MySQL table you want to export. In this example, it's set to "concerts2".
2. **Load MySQL Data:** The "LoadMySQLData" node executes a SQL query to select all data from the table specified in the previous step.  It uses the MySQL credentials defined in n8n.
3. **Save to Spreadsheet:** The "SaveSpreadsheet" node takes the data retrieved from MySQL and saves it as an XLSX file. The filename and sheet name are dynamically set to the table name.

## Services:

- MySQL
- Spreadsheet (XLSX)

## Hashtags:

#n8n #MySQL #XLSX #DataExport #Automation
