# Keap Contact Retrieval Workflow

## Use cases:

*   **Contact List Export:** Automatically extract a complete list of contacts from Keap (formerly Infusionsoft) for backup or analysis in other tools.
*   **Data Synchronization:** Retrieve contact data from Keap to synchronize it with other CRM or marketing platforms.
*   **Auditing and Reporting:** Regularly fetch contact information to monitor data quality, identify duplicate entries, or generate reports on customer demographics.

## How it works:

This workflow is triggered manually. Once initiated, it connects to Keap and retrieves all contact records available in the Keap account. The workflow consists of two nodes:

1.  **On clicking 'execute' (Manual Trigger):** This node initiates the workflow execution when manually triggered within n8n.
2.  **Keap:** This node authenticates with Keap using OAuth2 credentials and performs a `getAll` operation on the `contact` resource, fetching all contact data.

## Services:

*   Keap (formerly Infusionsoft)

## Hashtags:

#n8n #automation #keap #crm #contacts
