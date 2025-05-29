# ↔️ Airtable Batch Processing

## Use cases:

- **CRM Data Synchronization:** Efficiently synchronize large datasets between a CRM system and Airtable, ensuring customer information is always up-to-date by either inserting new records, updating existing ones, or both (upsert).
- **Inventory Management:** Automate the process of updating inventory levels in Airtable from an external database or system, handling bulk updates for multiple products simultaneously, while respecting API rate limits.
- **Event Registration:** Manage a large number of event registrations by importing them into Airtable. This workflow can handle new registrations (insert), update existing ones (update), or handle both scenarios (upsert) based on a unique identifier.

## How it works:

1.  **Trigger:** The workflow is initiated by clicking the "Test workflow" button. The "When clicking ‘Test workflow’" node acts as the starting point.
2.  **Data Preparation:**
    *   **Set Fields**: Sets or modifies data fields to be sent to Airtable.
    *   **Aggregate**: Combines multiple data items into a single "records" array.
3.  **Airtable Batch Processing:**
    *   The **Airtable Batch** node triggers a sub-workflow, passing `baseId`, `tableIdOrName`, `mode`, `fieldsToMergeOn`, and `records` as input.
4.  **Subprocess Execution:**
    *   **Airtable Subprocess**: Receives the parameters from the main workflow and starts the subprocess.
    *   **Split Out**: Splits the "records" array into individual items, making them easier to process.
    *   **Batch 10**: Groups the items into batches of 10 to optimize Airtable API usage.
5.  **Mode Routing (Switch)**: The Switch node routes the data flow based on the "mode" parameter (upsert, insert, or update).
6.  **Airtable Operations (upsert, insert, update):**
    *   Depending on the mode, the workflow uses a corresponding `httpRequest` node (`upsert`, `insert`, or `update`) to perform the respective operation on Airtable.  The API request uses the `baseId`, `tableIdOrName`, and the records to update, insert, or upsert data in Airtable.
    *   `Edit Fields` cleans the record before sending it to Airtable
    *   `Aggregate` aggregates the data before sending to Airtable
7.  **Rate Limit Handling:**
    *   **rate limit?**: An If node checks the HTTP status code. If it's 429 (Too Many Requests), it triggers a wait period.
    *   **Wait**: The Wait node pauses the workflow execution for a specified duration (0.2 or 5 seconds) to avoid exceeding Airtable API rate limits.
    *   **retry request**: The Merge node combines the main output and the waited output to retry the request to Airtable.
8.  **Return Merged output**: The code block merges output results to return the correct result.

## Services:

-   Airtable API

## Hashtags:

#n8n #Airtable #BatchProcessing #Automation #DataSync
