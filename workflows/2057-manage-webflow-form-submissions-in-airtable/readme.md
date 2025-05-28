# Dynamically create tables in Airtable for your Webflow form submissions

## Use cases:

- **Automatic Data Organization:** When you have multiple forms on your Webflow website and want to automatically organize submissions into separate Airtable tables for better management.
- **Lead Management:** Capture leads from different forms (e.g., contact form, signup form) and store them in individual Airtable tables for targeted follow-ups.
- **Event Registration:** Dynamically create tables for each event registration form on your Webflow site, making it easy to track attendees and related information.

## How it works:

1.  **Webflow Submission Trigger:** The workflow starts when a new form is submitted on your Webflow site.
2.  **Prepare form submission for workflow:** The data from the Webflow form submission is extracted and prepared for use in subsequent steps, including extracting the form ID, form name, and submission data.
3.  **[AIRTABLE] Get Base Schema from list:** Retrieves the schema of the specified Airtable base to check for the existence of a "Form Index" table.
4.  **Get Form Index Reference Table ID:** Checks if a "Form Index" table already exists in the Airtable base. If not, it prepares to create one.
5.  **Does Index Reference Table Exist?:** Evaluates whether the "Form Index" table exists based on the presence of its ID.
6.  **[AIRTABLE] Create Index Reference Table:** If the "Form Index" table doesn't exist, it creates a new table in Airtable with columns for "FormId", "FormName", "TableId", and "TableName".
7.  **[AIRTABLE] Find Webflow Form Record In Form Index Reference Table:** Searches the "Form Index" table for an existing record with the current Webflow form's ID.
8.  **Set Webflow Form Table ID:** Sets the Airtable Table ID if it already exist on "Form Index"
9.  **Does This Webflow Form Table Exist?:** Evaluates whether the Webflow form table exists based on the presence of its ID.
10. **[AIRTABLE] Create Webflow Form Table:** If a table for the specific Webflow form doesn't exist, it creates a new table in Airtable named after the form, with predefined columns like "Id", "FormId", "FormName", "FormCreationDate", and "FormContent".
11. **Set New Webflow Form Table ID:** Retrieves the newly created Airtable table ID and stores it for future use.
12. **[AIRTABLE] Insert Record In Form Index Reference Table:** Inserts a new record in the "Form Index" table, mapping the Webflow form ID to the newly created Airtable table ID.
13. **[AIRTABLE] Insert Record In Webflow Form Table:** Finally, inserts a new record in the newly created Airtable table for the Webflow form, containing the actual form submission data.

## Services:

-   Webflow
-   Airtable

## Hashtags:

#n8n #Webflow #Airtable #Automation #FormSubmissions
