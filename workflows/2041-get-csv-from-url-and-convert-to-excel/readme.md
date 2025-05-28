# Import CSV from URL to Excel

## Use cases:

- **Data Archiving:** Automatically download a CSV file from a URL and convert it to Excel format for long-term storage and easier access.
- **Reporting:** Transform data from a CSV source into Excel for generating reports or performing further analysis.
- **Data Migration:** Convert CSV data obtained from a web source into Excel spreadsheets for import into other systems or applications.

## How it works:

1.  **Trigger:** The workflow starts when you manually click the "Execute Workflow" button.
2.  **Download CSV:** The "Download CSV" node retrieves a CSV file from the specified URL (`https://opendata.potsdam.de/api/v2/catalog/datasets/veranstaltungsplaetze-potsdam/exports/csv`). The response is configured to be saved as a file in n8n.
3.  **Import CSV:** The "Import CSV" node read the data, set the delimiter to `;` and consider the first row as header.
4.  **Convert to Excel:** The "Convert to Excel" node converts the imported CSV data into an Excel (.xlsx) file. The file is named `converted_csv.xlsx`, with a sheet name `csv_page`

## Services:

*   Potsdam Open Data Portal: The workflow retrieves a CSV file from `https://opendata.potsdam.de/api/v2/catalog/datasets/veranstaltungsplaetze-potsdam/exports/csv`.

## Hashtags:

#n8n #automation #CSVtoExcel #dataConversion #workflow
