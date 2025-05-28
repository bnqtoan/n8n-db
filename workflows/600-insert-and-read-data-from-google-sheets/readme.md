# My Workflow

## Use cases:

- **Data Logging:** Automatically log specific data points (like IDs and a fixed name) to a Google Sheet for tracking and analysis.
- **Simple Data Entry:** Add predefined values along with a sequential ID to a Google Sheet, potentially for building a simple inventory or record-keeping system.
- **Chaining Google Sheets Operations:**  Trigger a second Google Sheets operation (like reading the sheet) after appending data to it.

## How it works:

1.  The workflow starts with a **"On clicking 'execute'"** node, meaning it's manually triggered.
2.  The **"Set"** node creates a dataset with a numeric field called "id" (automatically incremented by n8n) and a string field called "name" with the value "n8n".
3.  The first **"Google Sheets"** node appends the data from the "Set" node (the "id" and "name") to a specified Google Sheet (specified by `sheetId`). The data is added to the A:B range of the sheet.
4.  The second **"Google Sheets1"** node performs an operation on the same google sheet without configuration.

## Services:

-   Google Sheets

## Hashtags:

#n8n #googleSheets #automation #dataLogging #spreadsheet
