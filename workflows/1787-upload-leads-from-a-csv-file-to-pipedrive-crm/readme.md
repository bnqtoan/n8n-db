# Google Drive to Pipedrive Lead Creation

## Use cases:

- **Automatic Lead Capture from Spreadsheets:** Automatically create leads in Pipedrive whenever a new spreadsheet containing lead information is uploaded to a specific Google Drive folder.
- **Streamlined Sales Process:** Populate Pipedrive with potential customer data, including company details, contact information, and company size, directly from uploaded spreadsheets.
- **LinkedIn Ad Integration:** Capture leads from LinkedIn Ads by downloading a spreadsheet from Google Drive and automatically create organization, person, leads and note in Pipedrive.

## How it works:

1.  **Google Drive Trigger:** The workflow starts when a new file is created in a specified Google Drive folder ("1uQ0YnGnQNzIaWGdTt2UBT58tTy8xDlpW").
2.  **Google Drive:** Downloads the newly created file from Google Drive using the file ID obtained from the trigger.
3.  **Spreadsheet File:** Reads the downloaded file as a spreadsheet, making the data available for subsequent nodes.
4.  **Pipedrive:** Retrieves all leads from Pipedrive.
5.  **IF:** Checks if the lead's person_id exists in Pipedrive using a number comparison.
6. **Pipedrive1:** Retrieves a person from Pipedrive using a person_id
7.  **Merge:** Removes matching data between data from Spreadsheet File and Person on Pipedrive, focusing on the "Email address" field.
8.  **Set:** Formats and structures the data extracted from the spreadsheet, creating fields for "company", "name", "email", and "employees".
9.  **Create Organization:** Creates a new organization in Pipedrive using the "company" name from the "Set" node.
10. **Create Person:** Creates a new person in Pipedrive, including email, organization ID (linked to the newly created organization), and marks the lead as sourced from "LinkedIn_Ad".
11. **Create Lead:** Creates a new lead in Pipedrive using the company name as the lead title, associating it with the newly created organization and person.
12. **Create Note:** Adds a note to the lead in Pipedrive, including the company size information.

## Services:

-   Google Drive
-   Pipedrive

## Hashtags:

#n8n #automation #Pipedrive #GoogleDrive #LeadGeneration
