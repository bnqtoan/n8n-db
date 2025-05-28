# My Workflow

## Use cases

*   **Data extraction from local CSV files:** This workflow can be used to automatically extract data from CSV files stored locally on a server or computer.
*   **Spreadsheet conversion and processing:** The workflow provides a starting point for workflows that need to process CSV data into spreadsheet format for further analysis or manipulation within n8n.

## How it works

1.  The workflow is initiated manually via the "On clicking 'execute'" node.
2.  The "Read Binary File" node reads the CSV file located at `/data/sample_spreadsheet.csv`.
3.  The "Spreadsheet File" node converts the binary data from the CSV file into a spreadsheet format that can be further processed by other n8n nodes.

## Services

*   No external services are used directly in this workflow. It interacts with local files on the system where n8n is running.

## Hashtags

#n8n #automation #CSV #spreadsheet #localfile
