# Property Lead Contact Enrichment from CRM

## Use cases:
- Automatically identify distressed properties in a specific location (e.g., Austin, TX) that meet certain criteria (e.g., value range, equity percentage).
- Enrich property data with owner contact information (phone, email) to facilitate targeted marketing campaigns.
- Generate a daily report of high-potential property leads and push them into a CRM (e.g. Hubspot) for sales follow-up.

## How it works:
This workflow automates the process of finding and enriching property leads. It starts with either a manual trigger or a daily schedule.
1.  **Configure Search Parameters:** Sets the search criteria for properties, including location, property type, value range, equity, and status.
2.  **Search Properties API:** Uses the BatchData API to search for properties matching the configured parameters.
3.  **Filter Property Results:** Filters the results based on criteria like absentee ownership, years of ownership, and recent sales activity. It also calculates a lead score based on equity, ownership duration, and tax delinquency.
4.  **Get Owner Contact Info:** Uses the BatchData API again to perform skip tracing on the filtered properties, retrieving owner contact information.
5.  **Format Lead Data:** Formats the combined property and contact data into a structured format, including property details, owner information, and contact details.
6.  **Create Excel Spreadsheet:** Generates an Excel file containing the formatted lead data.
7.  **Push to CRM:** Pushes the lead data to a CRM system (HubSpot in this case).
8.  **Summarize Results:** Creates a summary of the execution results, including total leads and highest lead score.
9.  **Email Notification:** Sends an email notification with the summary results and the Excel file attached.

## Services:
-   BatchData API: Used for property search and skip tracing.
-   HubSpot: CRM platform for lead management.
-   Email (SMTP): For sending email notifications.

## Hashtags:
#n8n #automation #realestate #leadgeneration #CRM
