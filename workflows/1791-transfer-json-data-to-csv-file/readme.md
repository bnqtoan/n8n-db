# Append JSON Data to Google Sheets

## Use cases:

*   **Automated Data Logging:** Automatically append data from a JSON file to a Google Sheet for record-keeping and analysis. For example, log user activity data from a JSON file to track website engagement.
*   **Periodic Data Import:** Schedule the workflow to regularly import data stored in JSON format (e.g., configuration settings, report data) into a Google Sheet for centralized access and reporting.

## How it works:

The workflow automates the process of reading a JSON file and appending its data to a Google Sheet.

1.  **Read JSON File:** The "read json file" node reads the contents of the specified JSON file located at `/username/users_spreadsheet.json`. The file is read as binary data.
2.  **Move Binary Data:** The "move binary data 2" node process the binary data content from the previous node and convert to a readable format (JSON data).
3.  **Google Sheets:** The "Google Sheets1" node then takes this converted data and appends it to the specified Google Sheet ("qwertz") within the range "A:C". The authentication is handled via OAuth2 using the `google_sheets_oauth` credential.

## Services:

*   Google Sheets

## Hashtags:

#n8n #GoogleSheets #JSON #Automation #DataImport
