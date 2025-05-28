# My Workflow

## Use cases:
- **Dynamic Form Generation:** Automatically create n8n forms based on the schema of Airtable or Baserow tables. This eliminates the need to manually design forms and keeps them in sync with database changes.
- **Data Collection:** Use the generated forms to collect data and automatically store it in Airtable or Baserow, streamlining data entry and reducing errors.
- **File Upload Automation:** Handle file uploads to Airtable or Baserow through the forms. The workflow manages the upload process and associates the files with the corresponding records.

## How it works:
1. **Form Submission Trigger:** The workflow starts with a form submission trigger for either Airtable or Baserow, allowing users to select the specific base/table they want to work with dynamically.
2. **Schema Retrieval:** Based on the selected option, the workflow retrieves the schema of the selected Airtable base/table or Baserow table.
3. **Schema Transformation:** The schema is transformed into a format compatible with n8n's form JSON definition.  This involves mapping field types and options to n8n form field properties.
4. **Form Rendering:** An n8n form is dynamically generated using the transformed schema.
5. **Data Processing:** Upon form submission, the data is prepared for insertion into Airtable or Baserow. This includes filtering out file/attachment fields, type casting boolean values, and converting data into the appropriate format.
6. **Row Creation:**  A new row is created in the Airtable or Baserow table using the processed data.
7. **File Uploads:** The workflow processes file uploads separately. For Baserow, this involves uploading the file to Baserow's file storage, retrieving a reference, and then updating the row with the file reference. For Airtable, the file is uploaded to a specific URL for attachment.
8. **Completion Message:** Finally, a completion message is displayed to the user.

## Services:
- Airtable
- Baserow

## Hashtags:
#n8n #automation #form #airtable #baserow #dynamicform
