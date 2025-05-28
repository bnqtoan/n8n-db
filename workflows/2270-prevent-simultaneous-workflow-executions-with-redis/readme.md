# My Workflow

## Use cases:
- Prevents concurrent executions of a specified workflow, ensuring that it only runs when the previous execution has completed, which is useful for workflows that shouldn't overlap (e.g., data synchronization, report generation).
- Schedules a workflow to run at a defined interval (e.g., every 5 seconds), while making sure that it doesn't start a new execution if the previous one is still running.
- Acts as a safeguard against resource contention or data inconsistencies by avoiding multiple instances of the same workflow running simultaneously.

## How it works:

1.  **Schedule Trigger:** The workflow is initiated by a Schedule Trigger, which by default is set to trigger every 5 seconds.
2.  **Get Status:** It retrieves a status flag from Redis using a dynamic key (`workflowStatus_{{ $workflow.id }}`) which is built from the workflow ID. This flag indicates whether the target workflow is currently running or idle.
3.  **Redis Key exists:** Verifies if the Redis key exists
4.  **Continue if Idle:** If the status is "idle" (meaning the target workflow is not running), the workflow proceeds.
5.  **No Operation:** If the workflow is running, it does nothing
6.  **Set Running:** Sets the status flag in Redis to "running," indicating that the target workflow is now executing.
7.  **Execute Workflow:** Executes another specified workflow (configured by its ID).
8.  **Set Idle:** After the target workflow completes, this sets the status flag in Redis back to "idle," allowing the next scheduled trigger to initiate another execution.

## Services:

-   Redis

## Hashtags:

#n8n #workflow #automation #redis #concurrency
