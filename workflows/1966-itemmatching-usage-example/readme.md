# itemMatching() example

## Use cases:

- **Data Enrichment:** Retrieve customer information from a database and enrich it with additional details based on matching criteria (e.g., matching customer IDs or names).
- **Data Restoration:** In scenarios where data fields are temporarily removed or altered for processing, this workflow demonstrates how to restore specific data points (like email addresses) by referencing the original dataset.
- **Cross-referencing and Merging Data:** Combining data from different sources by matching entries based on a common identifier and merging relevant information.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it ("When clicking "Execute Workflow" node).
2.  **Fetch Customer Data:** The "Customer Datastore (n8n training)" node retrieves all customer records from a hypothetical datastore using the `getAllPeople` operation. This represents fetching initial data.
3.  **Reduce Data:** The "Edit Fields" node removes all fields except the `name` field from each customer record. This simulates a scenario where you're working with a reduced dataset.
4.  **Restore Email Addresses:** The "Code" node, using a Python script, iterates through the reduced dataset. For each record, it uses the `.itemMatching(i)` function to retrieve the corresponding original record from the "Customer Datastore (n8n training)" node. It then restores the `email` address from the original record to a new field called `restoreEmail` in the current, reduced record.
5.  **Output:** The workflow outputs the modified customer records, where the `restoreEmail` field now contains the original email addresses.

## Services:

-   n8n Training Customer Datastore (simulated datastore)

## Hashtags:

#n8n #automation #itemMatching #dataEnrichment #dataRestoration
