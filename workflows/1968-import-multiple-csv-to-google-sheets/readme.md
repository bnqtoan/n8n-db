# Import multiple CSV to GoogleSheet

## Use cases:

- **Consolidating subscriber data from multiple sources:** Automatically merges subscriber lists from different CSV files (e.g., exported from different marketing platforms) into a single Google Sheet.
- **Aggregating data from different departments:** Collects data from multiple departments (each providing a CSV file) and combines it into a central Google Sheet for analysis and reporting.
- **Regularly updating a Google Sheet with new data:** Appends data from newly generated CSV files to an existing Google Sheet, keeping the data current.

## How it works:

1.  **Trigger:** The workflow starts when the "Execute Workflow" button is clicked.
2.  **Read Binary Files:** Reads all CSV files from the `.n8n` directory.
3.  **Split In Batches:** Processes each CSV file individually to avoid memory issues.
4.  **Read CSV:** Reads the data from each CSV file, parsing it into a structured format with headers.
5.  **Assign source file name:** Retrieves name of source file to identify from where the data is coming from.
6.  **Remove duplicates:** Removes duplicate entries based on the `user_name` field.
7.  **Keep only subscribers:** Filters the data to include only records where the `subscribed` field is "TRUE".
8.  **Sort by date:** Sorts the filtered data by the `date_subscribed` field.
9.  **Upload to spreadsheet:** Appends the processed data to a specified Google Sheet, mapping the fields from the CSV to the corresponding columns in the sheet.

## Services:

-   Google Sheets

## Hashtags:

#n8n #automation #googleSheets #csv #dataIntegration
