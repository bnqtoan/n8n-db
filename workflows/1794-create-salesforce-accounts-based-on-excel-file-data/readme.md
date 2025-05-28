# Excel to Salesforce Workflow

## Use cases

- **Automated Contact Creation/Update:** Automatically creates new contact records in Salesforce or updates existing ones based on data from an Excel file. This is useful for marketing teams managing leads or sales teams importing new customer information.
- **Account Data Synchronization:** Keeps Salesforce account data synchronized with an external Excel sheet, ensuring that the sales team always has the latest company information. This is useful for automatically updating salesforce with changes in excel files.
- **Data Migration/Import:** Migrates or imports account and contact data from an Excel file into Salesforce. Ideal when switching systems or consolidating data sources.

## How it works

1.  **Trigger:** The workflow is manually triggered by clicking 'execute'.
2.  **Download File:** An Excel file containing account and contact data is downloaded from a specified URL.
3.  **Spreadsheet Processing:** The downloaded file is parsed, extracting account and contact information from the spreadsheet.
4.  **Search Salesforce Accounts:** For each company in the Excel file, the workflow searches for existing accounts in Salesforce based on the company name.
5.  **New vs. Existing Accounts:**
    *   **For New Accounts:**
        *   The workflow identifies new companies by comparing company names from the Excel file to the search results from Salesforce.
        *   Duplicate companies are removed based on the company name.
        *   A new account is created in Salesforce for each unique company.
        *   The newly created Account ID is retrieved.
    *   **For Existing Accounts:**
        *   The workflow merges the data from the Excel file with the existing Salesforce account data.
        *   It checks if an account was found in Salesforce.
        *   If found, it renames the "Id" field to "Account ID."
6.  **Contact Creation/Update:** For both new and existing accounts, the workflow merges the Company Name to retrieve the new company contacts before creating/updating the contact in Salesforce, using the "Account ID" to associate the contact with the correct account. It then attempts to upsert (update or insert) contacts in Salesforce based on the email address. If a contact with the same email exists, it updates the record; otherwise, it creates a new contact.

## Services

*   Salesforce
*   Excel

## Hashtags

#n8n #salesforce #automation #excel #crm
