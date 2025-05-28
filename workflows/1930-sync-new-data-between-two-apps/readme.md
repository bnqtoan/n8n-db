# Syncing Qualified Leads to Google Sheets

## Use cases:

- **Lead Qualification and Management:** Automatically add qualified leads from a database (Postgres) to a Google Sheet for further action by the sales team.
- **Data Synchronization:** Keep a Google Sheet updated with the latest user information from a Postgres database, filtering out internal email addresses.
- **Real-time Reporting:** Use Google Sheets as a live reporting dashboard, populated with filtered data from a database based on updates.

## How it works:

1.  **Trigger (Postgres Trigger OR Manual Execution):** The workflow starts either when a record is updated in a Postgres database table ("users" table) or manually when the "Execute Node" button is clicked. The Postgres Trigger node is configured to listen for updates on a specified table. The Manual Execution is used for testing purposes, generating Mock Data.
2.  **Data Generation (Code):** The `Code` node is executed only with the manual trigger. It generates a mock user data for testing purposes, including `id`, `username`, `email`, `company_size`, `role` and `users`.
3.  **Filtering (Filter):** The `Filter` node checks the email address of the updated user. If the email address does *not* contain "n8n.io", the data is passed to the next node. This ensures that only external leads are processed.
4.  **Data Storage (Google Sheets):** The `Google Sheets` node appends or updates the user data (id, email, username) to a specified Google Sheet. The node uses the "id" column to match and update existing records, or append the data as a new row if the ID doesn't exist.

## Services:

-   Postgres: Relational database for user data.
-   Google Sheets: Spreadsheet service for storing and managing qualified leads.

## Hashtags:

#n8n #automation #leadgeneration #googlesheets #postgres
