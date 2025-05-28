# GoogleSheets MySQL Integration

## Use cases:

- **Automated Data Synchronization:** This workflow automatically synchronizes data between a Google Sheet (used as a form response repository) and a MySQL database, ensuring data consistency across platforms.
- **Lead Management:** Efficiently manage leads captured via Google Forms by automatically storing and updating their information in a MySQL database.
- **Real-time Notifications:** Configure notifications for leads that haven't received a reply within a specific time frame, ensuring timely follow-up.

## How it works:

1.  **Trigger:** The workflow can be triggered either manually or on a schedule (every 30 minutes between 6 AM and 10 PM on weekdays).
2.  **Data Retrieval:** It fetches data from a specified Google Sheet and retrieves corresponding data from a MySQL database table.
3.  **Data Transformation:** The data retrieved from the Google Sheet undergoes transformation by renaming the columns with proper name to be used in the further nodes.
4.  **Data Comparison:** The datasets from Google Sheets and MySQL are compared, identifying new or modified entries based on `timestamp` and `source_name`.
5.  **Database Updates:** New records from Google Sheets are added to the MySQL database, ensuring both systems are in sync.
6.  **Conditional Actions:**
    *   If no reply has been sent after 4 hours, a notification is triggered.
    *   If there is a "DB Status" update, it updates the Google Sheet.
    *   If the DB Status is in sync, update the MySQL data.
7. **Status Sync:** If the "DB Status" in the Google Sheet has been updated, this change is reflected back in the MySQL database.

## Services:

-   Google Sheets
-   MySQL

## Hashtags:

#n8n #googleSheets #mysql #automation #dataintegration
