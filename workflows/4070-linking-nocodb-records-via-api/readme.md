# Linking NocoDB Records via API 🔗

## Use cases:

- **Relating Records in a Database:** Imagine you have a database of products and categories. You can use this workflow to automatically link a product to its corresponding category, establishing relationships between records.
- **Connecting Project Tasks to Resources:** In project management, link tasks to resources or team members involved. This creates a clear relationship between assignments and responsible parties.
- **Building a CRM with Connected Entities:** Connect customer records to their interactions, support tickets, or sales opportunities within a NocoDB-based CRM.

## How it works:

This workflow automates the process of linking records between two tables in a NocoDB database using the NocoDB API. Here's a breakdown of the process:

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" node.
2.  **Set Variables:**  The "Set Variables" node defines key parameters such as the NocoDB URL, target table ID, target table record ID, and source table record ID.  **IMPORTANT:** You need to update this node with your specific NocoDB instance details.
3.  **Grab Target Table Row:** The "Grab Target Table Row" node fetches the specific target table record you want to link to, using the IDs from the "Set Variables" node.
4.  **Get Source Table Row:** The "Get Source Table Row" node retrieves the source table record that will be linked to the target record, again using the IDs defined earlier.
5.  **Get Target Table Meta Data:** The "Get Target Table Meta Data" node retrieves metadata for the target table, which is used to extract the link field ID.
6.  **Link Record from Source to Target:** The "Link Record from Source to Target" node sends a POST request to the NocoDB API, linking the source record to the target record using the table and link field IDs.

## Services:

-   **NocoDB:** This workflow heavily relies on NocoDB, an open-source no-code platform that transforms databases into smart spreadsheets.

## Hashtags:

#n8n #nocodb #automation #database #API
