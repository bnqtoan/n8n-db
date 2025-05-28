# n8n_mysql_purge_history_greater_than_10_days

## Use cases:

*   **Automated Database Maintenance:** Regularly purge old execution logs from your n8n MySQL database to maintain performance and reduce storage costs.
*   **Compliance and Data Retention:** Enforce data retention policies by automatically deleting historical execution data after a defined period (30 days in this case).

## How it works:

This workflow automates the process of deleting old execution records from the `execution_entity` table in your n8n MySQL database.  It can be triggered in two ways:

1.  **Manual Execution:**  The "On clicking 'execute'" node allows you to manually trigger the workflow to run the cleanup process on demand.
2.  **Scheduled Execution:** The "Cron" node schedules the workflow to run automatically every day at 7:00 AM.

The "MySQL" node executes a SQL `DELETE` statement that removes records from the `execution_entity` table where the `stoppedAt` date is older than 30 days.

## Services:

*   MySQL

## Hashtags:

#n8n #MySQL #DatabaseMaintenance #Automation #DataRetention
