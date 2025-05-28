# Create Onfleet tasks from Spreadsheets

## Use cases:

- **Automated Task Creation:** Automatically create tasks in Onfleet from data in a spreadsheet, eliminating manual entry.
- **Bulk Task Import:** Quickly import a batch of tasks into Onfleet from a spreadsheet, useful for initial setup or large-scale operations.
- **Error Reduction:** Reduce the risk of human error by automating the task creation process, ensuring consistent and accurate data transfer from spreadsheets to Onfleet.

## How it works:

1.  **Read Binary File:** The workflow starts by reading an Excel file from the specified file path (`/Users/jamesli/Downloads/Onfleet Import Google Sheet.xlsx`).
2.  **Spreadsheet File:** The binary file is then processed by the "Spreadsheet File" node, which extracts the data from the Excel file.
3.  **Onfleet:** The extracted data is used to create new tasks in Onfleet. The node maps columns from the spreadsheet to Onfleet task properties like address, notes, recipient name, and recipient phone number.

## Services:

-   Onfleet
-   Spreadsheet (Excel File)

## Hashtags:

#n8n #automation #Onfleet #spreadsheet #taskmanagement
