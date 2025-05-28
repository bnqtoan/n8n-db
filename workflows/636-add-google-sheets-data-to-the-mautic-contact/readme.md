# Google Sheets to Mautic Contact Sync

## Use cases:

*   **Automated Lead Capture**: Automatically add new leads captured in a Google Sheet to your Mautic instance.
*   **Contact Enrichment**: Keep Mautic contact data synchronized with information stored and updated in a Google Sheet, ensuring your marketing efforts are based on the most current information.
*   **Streamlined Marketing Automation**: By automatically creating or updating contacts in Mautic, this workflow enables more efficient and targeted marketing campaigns.

## How it works:

1.  **Scheduled Trigger**: The workflow starts with a `Cron` node, which triggers the workflow every 5 minutes.
2.  **Read Google Sheet Data**: The `GS Read Data2` node connects to a specified Google Sheet ("Data!A:P" range from the sheet with ID "1jKYwPE9DMFOYf1AeDuTvQ3GSM2GqaEJhGYNoisxSLpM") and retrieves data from it. The data is formatted as a JSON structure.
3.  **Create/Update Contact in Mautic**: The `Mautic` node uses the data extracted from the Google Sheet to create or update a contact in Mautic. Specifically, it uses the "email" and "firstname" fields from the Google Sheet data to populate the corresponding fields in Mautic. It also uses the "mobile" field to populate the mobile number of the contact.

## Services:

*   Google Sheets
*   Mautic

## Hashtags:

#n8n #GoogleSheets #Mautic #Automation #ContactSync
