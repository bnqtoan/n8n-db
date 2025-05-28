# Autopilot to Airtable Contact Sync

## Use cases:

*   **Automatic Contact Backup:** Automatically backs up new contacts added in Autopilot to an Airtable base, ensuring data redundancy and availability for reporting or other purposes.
*   **Centralized Contact Management:** Consolidates contact information from Autopilot into Airtable, providing a single source of truth for customer data management.
*   **Enhanced Data Analysis:** Leverages Airtable's features to analyze and segment contact data collected via Autopilot, enabling targeted marketing campaigns.

## How it works:

This workflow automates the process of transferring contact information from Autopilot to Airtable whenever a new contact is added to Autopilot.

1.  **Autopilot Trigger:** The workflow starts when the "Autopilot Trigger" node detects a new contact added event in Autopilot.
2.  **Set:** The "Set" node extracts the "FirstName", "LastName", and "Email" from the contact information received from Autopilot.
3.  **Airtable:** The "Airtable" node then appends a new record to the specified table ("Table 1") in your Airtable base ("appflT9EkWRGsSFM2"), using the extracted contact information.

## Services:

*   Autopilot
*   Airtable

## Hashtags:

#n8n #automation #Airtable #Autopilot #contacts
