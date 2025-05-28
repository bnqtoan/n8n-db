# Automated Work Attendance with Location Triggers

## Use cases:

- **Automated Work Hour Tracking:** Accurately record employee check-in and check-out times based on their location, reducing manual entry and potential errors.
- **Time Spent at Client Sites:** Track the duration of visits to specific client locations for billing or performance analysis purposes.
- **Personal Time Management:** Monitor time spent at various locations (e.g., gym, home, office) to gain insights into daily routines and improve time allocation.

## How it works:

1.  **Webhook Trigger:** The workflow is initiated by a `Webhook` node, listening for incoming HTTP requests at the `/time-track` endpoint. These requests are sent from shortcuts.
2.  **Check if Worksheet Exists:**
    *   The workflow uses `Google Drive` node to list files and folders in Google Drive, filtering for the spreadsheet named "WorkTimeTracking."
    *   `Return if Null` node uses a code node to check if Google sheet exist with that name.
    *   `Doesn't exist?` node uses an "If" node to verifies if the "WorkTimeTracking" spreadsheet exists.
3.  **Create Worksheet:** If the spreadsheet doesn't exist (as determined by the `Doesn't exist?` node), a `Create Worksheet` node creates a new Google Sheet named "WorkTimeTracking" with a "Worklog" sheet.
4.  **Log Check-In or Check-Out:**
    *   The `Set Logging Details` node sets the current date, time, and direction (Check-In/Check-Out) based on the webhook headers into a JSON format.
    *   The `Create Log` node appends a new row to the "Worklog" sheet in the "WorkTimeTracking" spreadsheet, recording the date, time, and direction.  It uses the spreadsheet ID obtained earlier from the `Google Drive` node or by creating the spreadsheet.

## Services:

-   **Google Sheets:** Used for storing and managing the time tracking data.
-   **Google Drive:** Used to find if a google sheet exist with a specific name.
-   **iPhone Shortcuts app:** Is used to trigger the webhook.

## Hashtags:

#n8n #automation #workflow #timetracking #googlesheets
