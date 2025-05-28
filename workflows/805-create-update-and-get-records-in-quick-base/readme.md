# Create, update and get records in Quick Base

## Use cases:

*   **Data Synchronization:** Keep a Quick Base database synchronized with other systems by automatically creating or updating records based on events in external applications.
*   **Data Enrichment:** Enhance existing Quick Base records with additional information from other sources, ensuring data is always up-to-date and comprehensive.
*   **Data Retrieval and Analysis:** Extract data from Quick Base for reporting, analytics, or integration with other business intelligence tools.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" manual trigger is activated.
2.  **Set Initial Data:** The "Set" node defines the initial data for a new Quick Base record, including the name "n8n" and age 8.
3.  **Create Record in Quick Base:** The "Quick Base" node creates a new record in the specified Quick Base table, using the data from the "Set" node (name and age).
4.  **Set Update Data:** The "Set1" node prepares the data for updating the record, setting a new age (10). Critically, it also captures the newly created "Record ID#" from the "Quick Base" node's response.
5.  **Update Record in Quick Base:** The "Quick Base1" node updates the Quick Base record using the "Record ID#" obtained from the previous "Quick Base" node.  It updates the age of the record to 10.
6.  **Get All Records:** Finally, the "Quick Base2" node retrieves all records from the same Quick Base table.

## Services:

*   Quick Base

## Hashtags:

#n8n #QuickBase #Automation #Database #CRM
