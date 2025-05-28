# Google Sheets Upsert Workflow

## Use cases:

*   **Customer Data Synchronization:** Automatically update customer information in a Google Sheet whenever new customer data is added or modified in a customer datastore.
*   **Lead Management:** Capture lead information from a data source and keep a Google Sheet updated with the latest lead details, including names, emails, and creation timestamps.
*   **Data Transformation and Storage:** Transform data from one format to another and store it in a Google Sheet for analysis or reporting purposes.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Fetch Data:** The "Customer Datastore - Generate some data" node retrieves customer data from a customer datastore.
3.  **Data Transformation:** The "Set - Prepare fields" node transforms the incoming data.
    *   It renames the `name` field to `Full name`.
    *   It extracts the `id`, `email` and adds `Created time` fields.
4.  **Upsert to Google Sheets:** The "Create or Update record in Google Sheet" node upserts (inserts or updates) records in a specified Google Sheet using the transformed data. It uses the "Sheets" OAuth2 credential for authentication and interacts with a sheet identified by `sheetId`.

## Services:

*   Google Sheets
*   Customer Datastore

## Hashtags:

#n8n #googleSheets #automation #dataIntegration #upsert
