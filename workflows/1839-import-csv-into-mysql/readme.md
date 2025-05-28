# My Workflow

## Use cases

*   **Import data from CSV files into a MySQL database:**  Automatically transfer data from local CSV files into a structured database for analysis or reporting.
*   **Scheduled data ingestion:**  Set up the workflow to be triggered on a schedule to regularly import updated CSV files into the database.

## How it works

1.  **On clicking 'execute'**: The workflow is initiated manually.
2.  **Read From File:** Reads the content of the specified CSV file located at `/home/node/.n8n/concerts-2023.csv`.
3.  **Convert To Spreadsheet:** Converts the binary file data from the 'Read From File' node into a spreadsheet format, making the data accessible as structured data. `rawData` and `readAsString` options are enabled
4.  **Insert into MySQL:** Inserts the converted data into a MySQL database table named `concerts_2023_csv`. The workflow specifies which columns from the CSV data map to the corresponding columns in the database table: `Date, Band, ConcertName, Country, City, Location, LocationAddress`. It uses the credentials specified in `MySQL n8n articles` to access the database.

## Services

*   MySQL Database

## Hashtags

#n8n #automation #MySQL #CSV #DataImport
