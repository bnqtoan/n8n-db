# Rental Payment Reconciliation Workflow

## Use Cases:

- **Automated Bank Statement Analysis:** Automatically analyze incoming bank statements to identify rent payment discrepancies, saving time and reducing manual effort.
- **Tenant Account Monitoring:** Proactively monitor tenant accounts for missed payments, incorrect amounts, or lease termination dates.
- **Generate Actionable Reports:** Generate reports with a clear list of actions required such as chasing up payments or contacting tenants regarding end of tenancy.

## How it works:

1.  **Watch For Bank Statements:** The workflow starts by monitoring a specified folder for new CSV files (bank statements) using the "Watch For Bank Statements" node.
2.  **Set Variables:** The "Set Variables" node defines the location of the Excel file containing tenant and property details.
3.  **Get Bank Statement File:** The "Get Bank Statement File" node reads the content of the new CSV file.
4.  **Get CSV Data:** The "Get CSV Data" node extracts the data from the CSV file into a usable format.
5.  **Reconcile Rental Payments:** The "Reconcile Rental Payments" node leverages an AI Agent with a custom prompt that helps to:
    *   Parse the Bank Statement and identify key details.
    *   Get Tenant Details: Querying the Excel spreadsheet, it retrieves details of all tenants.
    *   Get Property Details: It retrieves details of all properties.
    *   OpenAI Chat Model: LLM model used in conjunction with the "Get Tenant Details" and "Get Property Details" tools to provide the AI agent with extra data which the AI agent uses to reconcile the bank statement against all the tenants and properties.
    *   Structured Output Parser: Convert the AI agent's output into a pre-defined JSON format.
6.  **Alert Actions To List:** The "Alert Actions To List" node splits the data into individual alerts for each action required.
7.  **Append To Spreadsheet:** The "Append To Spreadsheet" node adds the generated report of alerts and actions required to the local XLSX spreadsheet.

## Services:

*   **Local File System:** Used to access and monitor bank statement files, as well as store tenant and property data in Excel files.
*   **OpenAI API:** Used by the OpenAI Chat Model node to perform LLM tasks.
*   **Excel (XLSX):** Local Excel file used as a datastore to store a list of tenants, their property details, and any alerts which requires action.

## Hashtags:

#n8n #automation #workflow #rentalmanagement #AIagent
