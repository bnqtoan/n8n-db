# My Workflow

## Use cases:

*   **Automated Data Processing in Google Sheets:** Automatically process new rows in a Google Sheet, triggering actions only for unprocessed data.
*   **Time-Based Task Automation:** Execute tasks periodically based on the presence of new, unprocessed data in a Google Sheet.
*   **Real-time data management:** The data is automatically processed when is created, instead of doing it manually

## How it works:

1.  The workflow is triggered either manually (On clicking 'execute') or automatically every 5 minutes (Run every 5 minutes).
2.  It reads data from a specified Google Sheet (Read sheet).
3.  For each row, it checks if the "Processed" column is empty (Is new?).
4.  If the "Processed" column is empty, it executes a "Do something here" (NoOp node as a placeholder, the user should specify what it does) and sets the "Processed" column with the current timestamp (Set processed value).
5.  Finally, it updates the corresponding row in the Google Sheet to mark it as processed (Mark Row as processed).

## Services:

*   Google Sheets

## Hashtags:

#n8n #GoogleSheets #automation #dataProcessing #workflow
