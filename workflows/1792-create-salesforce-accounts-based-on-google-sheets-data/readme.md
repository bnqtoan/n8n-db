# Salesforce Account and Contact Creation from Google Sheets

## Use cases:

- **Automated Lead Generation:** Automatically create new accounts and contacts in Salesforce from a Google Sheet containing lead information.
- **Data Synchronization:** Keep Salesforce accounts and contacts synchronized with a Google Sheet used for data collection or updates.
- **Contact Management:** Streamline the process of adding new contacts to existing Salesforce accounts from a Google Sheet.

## How it works:

1. **Trigger:** The workflow is manually triggered using the "On clicking 'execute'" node.
2. **Read Google Sheet:** The "Read Google Sheet" node fetches data (presumably company and contact information) from a specified Google Sheet.
3. **Search Salesforce accounts:** For each company name retrieved from the Google Sheet, the "Search Salesforce accounts" node queries Salesforce to check if an account with that name already exists.
4. **Keep new companies:**  The "Keep new companies" node filters the Google Sheets data, keeping only the entries where a matching account was NOT found in Salesforce.
5. **Merge existing account data:** The "Merge existing account data" node filters the Google Sheets data, keeping only the entries where a matching account WAS found in Salesforce.
6. **Account found?**: The "Account found?" node checks for results of the "Search Salesforce accounts" node.
7. **Remove duplicate companies:** The "Remove duplicate companies" node eliminates duplicate entries based on the "Company Name" field.
8. **Set Account ID for existing accounts:** The "Set Account ID for existing accounts" node renames the Salesforce Account ID to "Account ID".
9. **Create Salesforce account:** The "Create Salesforce account" node creates a new Salesforce account for each unique company name identified in the previous steps.
10. **Set new account name:** The "Set new account name" node sets the Id and Name for further steps.
11. **Retrieve new company contacts:** The "Retrieve new company contacts" node merges the newly created company data with contact data from the Google sheet.
12. **Create Salesforce contact:** The "Create Salesforce contact" node then creates or updates a contact in Salesforce, linking it to the newly created or existing account. This node uses the email address as an external ID to prevent duplicates.

## Services:

- Google Sheets
- Salesforce

## Hashtags:

#n8n #Salesforce #GoogleSheets #Automation #CRM
