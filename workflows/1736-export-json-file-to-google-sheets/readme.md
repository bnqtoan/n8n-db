# Append JSON Data to Google Sheets

## Use cases:

-   **Automated Data Logging:** Automatically append data from a JSON file (e.g., application logs, sensor readings) to a Google Sheet for monitoring and analysis.
-   **Data Integration:** Integrate data from external systems that provide JSON output with Google Sheets for reporting or further processing.
-   **Simple Data Backup:** Create a simple backup solution by appending data from JSON files to a Google Sheet on a regular basis.

## How it works:

1.  **Read JSON File:** The "read json file" node reads the content of a JSON file located at `/username/users_spreadsheet.json`.
2.  **Move Binary Data:** The "move binary data 2" node takes the binary data read from the JSON file and prepares it for the Google Sheets node.  This node likely converts the binary data into a format suitable for appending to the sheet.
3.  **Append to Google Sheets:** The "Google Sheets1" node appends the data to a specified Google Sheet. It uses OAuth2 authentication to access the sheet with ID "qwertz" and appends the data to the "A:C" range. The `usePathForKeyRow` option likely uses the JSON keys as the header row in the Google Sheet.

## Services:

-   Google Sheets

## Hashtags:

#n8n #googleSheets #automation #dataIntegration #JSON
