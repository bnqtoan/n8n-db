# CSV to JSON Converter

## Use cases:

*   **Data Transformation:** Convert CSV files to JSON format for compatibility with applications or APIs that require JSON input.
*   **Data Migration:** Migrate data stored in CSV format to JSON-based databases or systems.
*   **Automated Data Processing:** Automatically convert CSV files received via email or other sources into JSON for further processing in automated workflows.

## How it works:

This workflow automates the conversion of a CSV file to a JSON file. Here's a step-by-step breakdown:

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "On clicking 'execute'" node.
2.  **Read Binary File:** The "Read Binary File" node reads the contents of the CSV file located at `/username/n8n_spreadsheet.csv`. The file is read as binary data.
3.  **Spreadsheet File:** The "Spreadsheet File" node parses the binary CSV data and converts it into a structured data format that n8n can understand (JSON-like).
4.  **Move Binary Data:** The "Move Binary Data" node then converts the structured data into JSON binary data.
5.  **Write Binary File:** Finally, the "Write Binary File" node writes the JSON binary data to a file named `/username/n8n_spreadsheet.json`.

## Services:

*   None (This workflow primarily uses n8n's built-in nodes to handle file operations and data transformation.)

## Hashtags:

#n8n #automation #CSV #JSON #fileconversion
