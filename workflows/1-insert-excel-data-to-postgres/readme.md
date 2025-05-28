# Workflow Readme

## Use cases:

1.  **Data Migration:** This workflow can be used to migrate data from a spreadsheet file (specifically in .xls format) into a PostgreSQL database table. This is useful when consolidating data from legacy systems or manually created spreadsheets.
2.  **Automated Data Import:** The workflow can be scheduled to automatically import data from a .xls file on a regular basis. For instance, import a product list received daily/weekly in .xls format into a product database.

## How it works:

1.  The workflow starts with the "Read Binary File" node, which reads the content of the "spreadsheet.xls" file from the n8n instance disk (or mounted volume).
2.  The "Spreadsheet File1" node parses the binary data from the .xls file into a structured format that n8n can work with.
3.  The "Insert Rows1" node takes the data extracted from the spreadsheet and inserts it as new rows into the "product" table in a PostgreSQL database. The node is configured to populate the "name" and "ean" columns of the "product" table using the corresponding data from the spreadsheet. The PostgreSQL connection is established using the "postgres" credentials.

## Services:

*   **PostgreSQL:** The workflow interacts with a PostgreSQL database to insert the data.

## Hashtags:

#n8n #automation #database #postgres #spreadsheet #dataimport
