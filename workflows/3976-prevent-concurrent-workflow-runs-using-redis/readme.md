# Prevent concurrent workflow runs using Redis

## Use cases:

- **Preventing Duplicate Data Entry:** Ensures that a form submission or data import process isn't executed multiple times simultaneously, which could lead to duplicate records or inconsistencies in a database.
- **Limiting Concurrent API Requests:**  When dealing with APIs that have rate limits or charge per request, this workflow can prevent exceeding those limits by ensuring only one request is processed at a time.
- **Managing Critical Resource Access:** In scenarios where multiple workflows might try to modify the same resource (e.g., a file, a database record), this workflow ensures that only one workflow has access at any given time, preventing conflicts.

## How it works:

This workflow prevents concurrent executions of critical processes by using Redis to set and check flags.

1.  **Trigger:** The workflow is triggered either by another workflow (`When Executed by Another Workflow`) or manually (`When clicking ‘Test workflow’`).
2.  **Set Timeout:** A default timeout value (600 seconds) is assigned. This helps to clear a key if a job never finishes to prevent indefinite blocking.
3.  **Action Switch:** The workflow then uses a Switch node to determine the desired action. The action can be `get`, `set`, or `unset`.
4.  **Redis Interactions:**
    *   `get`: Checks if a key exists in Redis. This key represents whether a workflow is currently running.
    *   `set`: Sets a key in Redis, indicating that a workflow has started. An expiration time (`ttl`) is configured, and it receives the `timeout` value.
    *   `unset`: Deletes a key in Redis, indicating that a workflow has finished.
5.  **Concurrent Execution Check:** After attempting to set the Redis key with the `"set"` action, the workflow checks if the key was successfully set. If the "get" action workflow `output` is null, meaning that the key didn't exist before, it proceeds to execute the main workflow logic. Otherwise, it stops and throws an error `"Already Executing"`.
6.  **Workflow Logic Execution:** This section contains the core workflow logic, that can contain a "Wait" node.
7.  **Workflow Completion:** Once the workflow completes its task, it executes the `"unset"` action, removing the Redis key and allowing subsequent workflows to run.
8.  **Status Tracking Example:** The second example includes setting several values for workflow status tracking.

## Services:

-   Redis

## Hashtags:

#n8n #automation #workflow #concurrency #redis
