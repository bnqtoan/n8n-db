# Salesforce Account and Contact Creation from Excel

## Use cases:

- Automatically create new Salesforce accounts and related contacts from a list of companies and contact details stored in a Microsoft Excel spreadsheet.
- Update existing Salesforce accounts with new information from an Excel spreadsheet and create contacts associated with those accounts.
- Efficiently manage and migrate company and contact data from Excel to Salesforce, ensuring data accuracy and reducing manual data entry.

## How it works:

1.  **Trigger**: The workflow is initiated manually using the "On clicking 'execute'" node.
2.  **Read Excel Data**: The "Microsoft Excel" node retrieves company and contact information from a specified Excel file.
3.  **Search Salesforce Accounts**: For each company in the Excel data, the "Search Salesforce accounts" node queries Salesforce to check if the account already exists.
4.  **Identify New Companies**: The "Keep new companies" node compares company names from Excel with existing Salesforce accounts and filters out the companies that are not already in Salesforce.
5.  **Remove Duplicate Companies**: The "Remove duplicate companies" node ensures that the companies that will be created are not duplicated.
6.  **Create Salesforce Account**: The "Create Salesforce account" node creates new account records in Salesforce for the companies identified as new.
7.  **Set new Account ID**: The "Set new account name" node retrieves the id of the just created account.
8.  **Merge Existing Account Data**: The "Merge existing account data" node merges the Excel data with the data of the existing account in Salesforce.
9. **Account Found?**: This "IF" node checks if an account was found in Salesforce.
10. **Set Account ID for existing accounts**: This "Set Account ID for existing accounts" node renames the `Id` field in the existing account data to `Account ID`.
11. **Retrieve New Company Contacts**: The "Retrieve new company contacts" node merges contact information to new accounts.
12. **Create Salesforce Contact**: The "Create Salesforce contact" node creates or updates contact records in Salesforce, linking them to the appropriate accounts (either newly created or existing ones).

## Services:

-   Salesforce
-   Microsoft Excel

## Hashtags:

#n8n #salesforce #excel #automation #crm
