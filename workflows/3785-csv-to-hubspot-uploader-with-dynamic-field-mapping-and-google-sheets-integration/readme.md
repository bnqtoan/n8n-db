# Hubspot Data Importer and Property Updater

## Use cases:

- **Importing data from CSV files into HubSpot:** Streamline the process of migrating or updating contact, company, deal, lead, or ticket information in HubSpot using CSV files.
- **Ensuring data integrity:** Validate that all fields from the CSV file exist in HubSpot's property list. If fields are missing, the workflow allows you to define the corresponding HubSpot field for each input field, ensuring no data is lost during the import process.
- **Automated HubSpot Property Management:** Automatically fetch the latest HubSpot properties for specified CRM objects (companies, contacts, deals, etc.) and update a Google Sheet for reference or auditing purposes.

## How it works:

The workflow is divided into two main functionalities: importing data to Hubspot and updating the properties.

**Importing Data from CSV to Hubspot:**

1.  **Form Trigger:** The workflow starts with a form where the user uploads a CSV file containing the data to import. The form also asks the user to specify the Hubspot object type (Contacts, Companies, Deals, Leads, or Tickets).
2.  **Extract file contents:** The content of the file are extracted to be used later
3.  **Field Validation:** It retrieves the first line of the CSV file to obtain the field names and compares them against the current properties of the specified Hubspot object type. The properties are fetched from a Google Sheet (which are updated by the other flow).
4.  **Field Mapping:** If discrepancies are found (fields in the CSV that don't exist as properties in Hubspot), the workflow presents a form asking the user to map the fields manually to Hubspot's properties.
5.  **Data Transformation:** The workflow transforms data from the CSV in a format suitable for uploading to Hubspot.
6.  **Hubspot Upload:** The data is sent to Hubspot to create/update records of the specified type.
7.  **Completion Form:** A message is displayed indicating the successful completion of the data import process.

**Hubspot Properties Updater:**

1.  **Manual Trigger:** Triggered manually to start the property update process.
2.  **Google Sheet Eraser:** Clear the existing data in a specified Google Sheet.
3.  **Object List Definition:** Defines an array of Hubspot object types (companies, contacts, deals, leads, tickets).
4.  **Split by Object:** Iterates through each object type in the defined array.
5.  **Fetch Properties:** For each object type, it fetches the properties from the Hubspot API.
6.  **Define CRM Type:** Adds a `crm_type` field to each property, indicating the object type it belongs to.
7.  **Split Results:** Splits the results into individual property items.
8.  **Filter Properties:** Filters out hidden properties and properties starting with "hs\_".
9.  **Transform Results:** Reformats the property data for compatibility with Google Sheets.
10. **Append to Google Sheet:** Appends the reformatted property data to the specified Google Sheet.

## Services:

-   HubSpot API (for fetching properties and uploading data)
-   Google Sheets (for storing and managing HubSpot property definitions)

## Hashtags:

#n8n #HubSpot #Automation #DataImport #CRM
