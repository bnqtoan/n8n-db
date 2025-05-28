# Email Validation and Airtable Update Workflow

## Use cases:

*   **Automated Data Validation:** Automatically validates email addresses in an Airtable database, ensuring data quality.
*   **CRM Data Cleaning:** Integrates with a CRM system (via Airtable) to maintain accurate contact information by identifying invalid email addresses.
*   **Lead Qualification:** Quickly flags potential leads with invalid email addresses, saving time for sales teams.

## How it works:

1.  **Airtable Node:** Retrieves records from a specified table ("Table 1") in Airtable. It lists all the records in the table.
2.  **Mailcheck Node:** For each record retrieved from Airtable, it extracts the email address from the "Email" field. It then uses the Mailcheck service to validate if the email address is valid and the MX record exists.
3.  **Set Node:** Creates a new JSON structure containing:
    *   The record ID retrieved from Airtable in the first node.
    *   A boolean value ("Valid") indicating whether the email address is valid based on Mailcheck's `mxExists` property.
4.  **Airtable1 Node:** Updates the corresponding record in the Airtable table ("Table 1") with the validation result. Specifically, it updates the "Valid" field to reflect whether the email is valid or not.

## Services:

*   **Airtable:** A cloud-based platform that allows you to create and share relational databases.
*   **Mailcheck:** An email validation service.

## Hashtags:

#n8n #automation #Airtable #emailvalidation #datacleaning
