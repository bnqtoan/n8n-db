# Loading data into a spreadsheet

## Use cases:

- **CRM Contact Sync:** Automatically extract contact information from a CRM system (like HubSpot) and load it into a spreadsheet for reporting or analysis.
- **Lead Management:**  Capture new lead data and append it to a spreadsheet to track leads and their progress.
- **Data Backup/Archiving:** Regularly export data from a CRM or other system into a spreadsheet for backup or archival purposes.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Fetch CRM Data:** The "Mock data (CRM Contacts)" Function node simulates fetching contact data from a CRM system (HubSpot in this case). It contains hardcoded contact data for Maria Johnson and Brian Halligan.
3.  **Set Name and Email:** The "Set" node extracts the `firstname`, `lastname`, and `email` properties from the CRM data. It creates new data items with only the "Name" (concatenation of firstname and lastname) and "Email" fields.
4.  **Append to Spreadsheet:**  The "Replace me" No-Op node is a placeholder for a node that would connect to a spreadsheet service (like Google Sheets or Airtable) or a database.  It represents the action of appending or adding the extracted data as a new row to the spreadsheet/database.

## Services:

-   (Placeholder) Google Sheets / Airtable / Database with an "append" or "Add row" operation. The workflow is designed to integrate with a service that can append rows to a spreadsheet or database table.

## Hashtags:

#n8n #automation #spreadsheet #CRM #dataimport
