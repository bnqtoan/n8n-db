# Clean Up Old n8n Executions

## Use cases:

*   **Automated Cleanup:** Automatically delete n8n executions older than a specified duration (e.g., 10 days) to manage database size and improve performance.
*   **Scheduled Maintenance:** Regularly clear out execution logs to maintain a clean and efficient n8n instance.
*   **Compliance & Security:**  Remove sensitive execution data after a retention period to comply with data privacy regulations.

## How it works:

1.  **Trigger:** The workflow starts either manually ("When clicking ‘Test workflow’" node) or on a schedule ("Schedule Trigger" node). The schedule is set to run every day at 4:44 AM.
2.  **List Executions:** The "n8n list execution" node retrieves a list of all n8n executions using the n8n API.
3.  **Filter by Age:** The "If" node filters the executions based on their "startedAt" timestamp.  It checks if the execution started before a date calculated as 10 days prior to the current date.
4.  **Delete Old Executions:** If an execution is older than 10 days, the "delete execution" node uses the n8n API to delete the execution based on its ID.
5.  **Do Nothing:** If the executions is more recent, the "No Operation, do nothing" node does nothing.

## Services:

*   n8n API

## Hashtags:

#n8n #automation #workflow #cleanup #maintenance
