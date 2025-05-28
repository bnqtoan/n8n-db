# Insert and update data in Airtable

## Use cases:

*   **Data Synchronization:** Automatically add new records to Airtable and update existing ones when changes occur in another system or data source.
*   **CRM Management:** Use this workflow to create new contacts in Airtable and update their information based on interactions or updates from other platforms.
*   **Inventory Tracking:** Insert new inventory items into Airtable and update their quantities as orders are processed or stock levels change.

## How it works:

1.  **On clicking 'execute':** The workflow starts manually when you click the "Execute" button in n8n.
2.  **Set:** This node sets two variables: "ID" with a numeric value of 3 and "Name" with a string value of "n8n".
3.  **Airtable:** This node appends a new record to a specified Airtable table (Table 1) using the data from the previous "Set" node.
4.  **Airtable1:** This node retrieves record(s) from the same Airtable table (Table 1) filtering by the formula `Name='n8n'`.
5.  **Set1:** This node sets the value of "Name" to "nodemation". This data will be use to update the record retrieved in the previous step
6.  **Airtable2:** This node updates an existing record in Airtable (Table 1) using the Airtable record ID obtained from the "Airtable1" node and setting the Name with the value from the "Set1" node.

## Services:

*   Airtable

## Hashtags:

#n8n #Airtable #automation #CRM #database
