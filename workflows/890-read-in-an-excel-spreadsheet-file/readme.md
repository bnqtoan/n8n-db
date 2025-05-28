# My Workflow

## Use cases:

*   **Data Extraction from CSV:** This workflow automates the process of reading data from a CSV file. It can be used to extract information from locally stored spreadsheets for further processing or analysis.
*   **Spreadsheet Conversion:** The workflow can be adapted to convert CSV files into other spreadsheet formats supported by the "Spreadsheet File" node, enabling automated data format transformations.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which initiates the workflow execution when manually triggered in n8n.
2.  The "Read Binary File" node reads the binary content of the CSV file located at `/data/sample_spreadsheet.csv`.
3.  The "Spreadsheet File" node then processes the binary data from the CSV file, likely to parse the data into a structured format that can be used by subsequent nodes (though the workflow doesn't currently show any subsequent nodes).

## Services:

*   None. This workflow reads a local file but doesn't interact with external services.

## Hashtags:

#n8n #automation #CSV #spreadsheet #dataextraction
