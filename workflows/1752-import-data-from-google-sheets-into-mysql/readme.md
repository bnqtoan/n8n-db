# Google Sheets to MySQL

## Use cases:

*   **Scheduled Data Backup:** Automatically back up data from a Google Sheet to a MySQL database on a weekly basis for data redundancy and disaster recovery.
*   **Data Synchronization:** Keep a local MySQL database synchronized with data stored in a Google Sheet, enabling offline access or integration with other systems.
*   **Reporting and Analysis:** Import data from a Google Sheet into a MySQL database for advanced reporting and analysis using SQL queries and database tools.

## How it works:

1.  **Cron Trigger:** The workflow starts with a "Cron" node that triggers the workflow every week at 5 AM.
2.  **Read Google Sheets:** The "Google Sheets - read" node reads data from a specific Google Sheet (identified by the ID "qwertz") using OAuth2 authentication.
3.  **Insert into MySQL:** The "MySQL - insert" node receives the data from the Google Sheets node and inserts it into the "books" table in the MySQL database.  It inserts data into the "title" and "price" columns. The "ignore" option is enabled, preventing errors if the row already exists (duplicate key), and "LOW_PRIORITY" is enabled, slowing down the insert if other queries are waiting.

## Services:

*   Google Sheets
*   MySQL

## Hashtags:

#n8n #googleSheets #mysql #automation #dataSync
