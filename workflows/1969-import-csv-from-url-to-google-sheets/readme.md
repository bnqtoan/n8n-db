# Import CSV from URL to GoogleSheet

## Use cases:

- Automatically update a Google Sheet with the latest COVID-19 testing data from the ECDC website, specifically for Germany, Austria, and Switzerland (DACH region) in 2023.
- Create a historical record of COVID-19 testing data in a Google Sheet, allowing for trend analysis and reporting.
- Streamline the process of collecting and organizing COVID-19 testing data for specific regions and time periods, eliminating manual data entry.

## How it works:

1.  **When clicking "Execute Workflow"**: This node triggers the workflow execution manually.
2.  **Download CSV**: Downloads the CSV file from the specified URL (`https://opendata.ecdc.europa.eu/covid19/testing/csv/data.csv`) provided by the European Centre for Disease Prevention and Control (ECDC).
3.  **Import CSV**: Parses the downloaded CSV file into a structured data format that n8n can work with. The `headerRow` option ensures that the first row of the CSV is treated as column headers.
4.  **Add unique field**: Creates a new field called `unique_key` by combining the `country_code` and `year_week` fields. This helps in identifying and preventing duplicate entries in the Google Sheet.
5.  **Keep only DACH in 2023**: Filters the data to include only records where the `year_week` starts with "2023" and the `country_code` is either "DE", "AT", or "CH" (Germany, Austria, Switzerland). This limits the amount of data sent to Google Sheets, which helps to prevent hitting rate limits of the Google API.
6.  **Upload to spreadsheet**: Appends or updates rows in a specified Google Sheet (`COVID-weekly` sheet in the `https://docs.google.com/spreadsheets/d/13YYuEJ1cDf-t8P2MSTFWnnNHCreQ6Zo8oPSp7WeNnbY` document) with the filtered data. It uses the `unique_key` column to match existing rows and update them if necessary, or append new rows if they don't exist.

## Services:

-   European Centre for Disease Prevention and Control (ECDC) Open Data Portal
-   Google Sheets API

## Hashtags:

#n8n #automation #googleSheets #covid19 #dataImport
