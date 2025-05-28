# Stackby Table Management Workflow

## Use cases:

*   **Automated Data Entry:** Automatically add new rows to a Stackby table when triggered manually.
*   **Data Synchronization:** Keep a Stackby table updated with predefined values, useful for testing purposes or seeding initial data.
*   **Table Content Verification:** Programmatically verify that data has been correctly written to the Stackby table after an update.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "Execute" button in n8n.
2.  **Set Values:** A "Set" node defines the values for "ID" (set to 1) and "Name" (set to "n8n").
3.  **Add Row to Stackby:** The "Stackby" node adds a new row to the specified Stackby table ("Table 1") within a specified stack (Stackby ID: `stbgReRhlmmAgT2suT`) using the previously defined "ID" and "Name" values. The "ID" column is mapped to the "ID" variable, and the "Name" column is mapped to the "Name" variable.
4.  **List Rows from Stackby:** The "Stackby1" node retrieves all rows from the same Stackby table using an expression that references the table and stack ID set on the "Stackby" node.

## Services:

*   Stackby

## Hashtags:

#n8n #automation #Stackby #dataentry #workflow
