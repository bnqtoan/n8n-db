## Workflow: HubSpot Contact Retrieval

This workflow retrieves all contacts from HubSpot.

### Use cases:

*   **Data Synchronization:** Regularly fetch all contacts from HubSpot to synchronize with other CRM or marketing platforms.
*   **Reporting and Analysis:** Extract contact data for reporting purposes, such as analyzing contact demographics or engagement metrics.
*   **Data Backup:** Create a backup of all contact information stored in HubSpot.

### How it works:

1.  The workflow is manually triggered by clicking the "Execute" button in n8n.
2.  The "HubSpot" node then uses the HubSpot API to retrieve all contacts from your HubSpot account. The `getAll` operation with `returnAll` set to `true` ensures that all contacts, rather than just a subset, are retrieved.

### Services:

*   HubSpot

### Hashtags:

#n8n #automation #HubSpot #CRM #contacts
