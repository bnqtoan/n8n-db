# My Workflow

## Use cases

*   **Daily Data Backup to Google Sheets:** Automatically back up data from a MySQL database to a Google Sheet every week.
*   **Reporting:** Generate weekly reports in Google Sheets based on data retrieved from a MySQL database, allowing for easy analysis and sharing.
*   **Data Synchronization:** Keep a Google Sheet synchronized with a MySQL database table for real-time data access and collaboration.

## How it works

1.  **Cron Trigger:** The workflow starts with a Cron node, configured to trigger every week at 5 AM.
2.  **MySQL Query:** The "MySQL - select" node executes a query (`SELECT * FROM books;`) against a specified MySQL database to retrieve all data from the `books` table. The connection to the database is established using the provided MySQL credentials.
3.  **Google Sheets Append:** The "Google Sheets - write" node appends the data retrieved from MySQL to a Google Sheet with the ID "qwertz." The connection to Google Sheets is authenticated using OAuth2 credentials.

## Services

*   MySQL
*   Google Sheets

## Hashtags

#n8n #MySQL #GoogleSheets #Automation #DataBackup
