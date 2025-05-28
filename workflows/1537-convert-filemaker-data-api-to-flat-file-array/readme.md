# FileMaker Data API Contacts Workflow

## Use Cases:

- **Contact List Extraction:** Extract contact details (name, company, address, phone, email) from a FileMaker database for use in other applications or services.
- **Data Transformation:** Transform FileMaker contact data into a format suitable for import into a CRM or marketing automation platform.
- **Simple Data Retrieval:** Quickly retrieve and display contact information from FileMaker for testing or debugging purposes.

## How it works:

1.  **FileMaker Data API Contacts:** This node simulates a FileMaker Data API response, containing contact data.  It is defined by a large JSON structure within a Function node.
2.  **FileMaker response.data:** This `Item Lists` node takes the `response.data` array from the simulated FileMaker API response and splits it into individual items.  Each item represents a single contact record.
3.  **Return item.fieldData:** This `Function Item` node extracts the `fieldData` property from each contact record, which contains the actual contact details like first name, last name, company name, etc.

## Services:

-   FileMaker (simulated via JSON data; requires actual FileMaker API integration for live data)

## Hashtags:

#n8n #filemaker #dataextraction #contactdata #automation
