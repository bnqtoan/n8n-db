# My Workflow

## Use cases:

- **Automated Data Logging**: Automatically log data from CSV files uploaded to a specific OneDrive folder into an Excel sheet.
- **Real-time Data Integration**: Integrate data from OneDrive CSV files into an Excel table for live reporting and analysis.
- **Streamlined Data Processing**: Automatically process and clean data from newly added CSV files in OneDrive, ensuring data consistency in an Excel sheet.

## How it works:

1.  **Trigger**: The workflow starts when a new file is added to a watched folder in Microsoft OneDrive (`Triggers if new file in watched folder`).
2.  **Logging**: The workflow logs the update to a specified Excel sheet (`Logs the update on sheet`).
3.  **File Information**: It retrieves information about the new file from OneDrive (`Gets the new file infos`).
4.  **File Download**: The workflow downloads the newly added file from OneDrive (`Downloads the new file`).
5.  **Format Check**: It checks if the downloaded file is in CSV format (`Checks if it's CSV format`).
6.  **CSV Extraction**: If the file is CSV, the workflow extracts the data from it (`Extracts data from csv`).
7.  **Data Cleaning**: The extracted data is then cleaned and formatted (`Cleans the output`).
8.  **Field Preparation**: The cleaned data is prepared into fields suitable for insertion into an Excel table (`Prepares the fields to put in the excel table`).
9.  **Excel Update**: The workflow updates the specified Excel table with the prepared data (`Updates the excel table`).
10. **OneDrive Upload**: Finally, it uploads the updated excel table to Microsoft OneDrive (`Microsoft OneDrive2`).
11. **No Operation**: A "No Operation" node is used for cases when the Microsoft OneDrive node outputs something but no operation is needed.
12. **Error Handling**: If the file isn't CSV, the workflow stops and throws an error (`Not CSV`).

## Services:

-   Microsoft OneDrive
-   Microsoft Excel

## Hashtags:

#n8n #automation #OneDrive #Excel #CSV
