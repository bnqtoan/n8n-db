# Salesforce Lead Creation and Update Workflow

## Use cases:

*   **New Lead Capture and Enrichment:** Automatically create a new lead in Salesforce when triggered manually, then update their city and add a note indicating a deal win.
*   **Manual Salesforce Record Update with Notes:** Triggered manually by a user, this workflow facilitates the quick creation of leads with a predefined company and last name, immediately followed by updating the lead's city and adding a deal-won notification.

## How it works:

1.  **Manual Trigger:** The workflow starts when a user manually triggers the "On clicking 'execute'" node.
2.  **Salesforce Lead Creation:** A new lead is created in Salesforce using the "Salesforce" node, setting the `company` to "CompanyInc" and the `lastname` to "DudeOne." The OAuth2 credentials named `salesforce_creds` are used to authenticate with Salesforce.
3.  **Salesforce Lead Update:** The "Salesforce1" node updates the lead created in the previous step. It retrieves the Lead ID from the previous node's output and sets the `city` to "Berlin."
4.  **Add Note to Salesforce Lead:** The "Salesforce2" node adds a note to the same Salesforce lead. It also retrieves the Lead ID from the "Salesforce" node and adds a note with the title "Deal Won!".

## Services:

*   Salesforce

## Hashtags:

#n8n #Salesforce #LeadManagement #Automation #CRM
