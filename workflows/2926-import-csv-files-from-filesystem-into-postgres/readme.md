# How to automatically import CSV files into postgres

## Use cases:

- **Automated Data Migration:** Migrate data from CSV files to a PostgreSQL database, useful for consolidating data from various sources.
- **Regular Data Updates:**  Schedule or manually trigger updates to a PostgreSQL database with new data provided in CSV format.
- **Data Analysis Preparation:** Quickly import data from CSV reports into a database for further analysis and reporting.

## How it works:

The workflow automates the process of importing data from a CSV file into a PostgreSQL database.

1.  **On clicking 'execute'**: This node triggers the workflow execution manually.
2.  **Read From File:** Reads the binary data from the specified CSV file located at `/tmp/t1.csv`.
3.  **Convert To Spreadsheet:** Converts the binary CSV data into a spreadsheet format that n8n can work with.
4.  **Postgres:** Inserts the data from the spreadsheet into the `t1` table within the `public` schema of the specified PostgreSQL database. The workflow uses the "Postgres account" credential to connect to the database. It attempts to automatically map input data columns (like 'id' and 'name') to the corresponding database columns.

## Services:

-   PostgreSQL

## Hashtags:

#n8n #automation #PostgreSQL #CSV #database
