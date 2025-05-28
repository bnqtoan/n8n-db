# Bulk Upload Contacts Through CSV | Airtable Interface & Airtable Grid

## Use cases:

- **Automated Lead Capture:** Automatically import leads from CSV files uploaded via an Airtable interface, streamlining the lead generation process.
- **Data Migration:** Migrate contact data from various CSV sources into an Airtable base for centralized management.
- **Campaign-Specific Contact Upload:** Upload lists of contacts for specific marketing campaigns, ensuring all leads are added to Airtable and properly tagged.

## How it works:

1.  **Airtable Trigger (New Upload):** The workflow starts when a new file is uploaded to a designated Airtable table ("Upload Table").
2.  **Get File ID:** Retrieves the specific record ID of the newly uploaded file from Airtable.
3.  **Airtable Base IDs:** This node contains the IDs for your Airtable Base, Upload Table, and Lead Table.
4.  **Status Processing:** Updates the "Status" field in the Airtable "Upload Table" to "Processing" for the uploaded file.
5.  **Download File:** Downloads the CSV file from the URL provided in the Airtable record.
6.  **Read File:** Reads the downloaded CSV file.
7.  **Campaign is Not Empty:** Checks if the "Campaign" field in the Airtable record is not empty.
8.  **Campaign Not Empty / Campaign Not Empty1:** Sets the 'Campaign' field for create records based on if the campaign field in Airtable record is empty or not.
9.  **Create Records:** Creates new contact records in the "Lead Table" of Airtable, mapping columns from the CSV file to corresponding fields in the Leads table.
10. **Status Uploaded / Status Failed:** Updates the "Status" field in the Airtable "Upload Table" to "Uploaded" if the lead creation is successful or to "Failed" if there are errors.

## Services:

-   Airtable

## Hashtags:

#n8n #Airtable #CSV #Automation #LeadManagement
