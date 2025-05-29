# Redis-Based Locking Workflow

## Use cases:

- **Preventing Concurrent Order Processing:** Ensures that only one instance of an order processing workflow runs at a time, preventing duplicate orders or inventory discrepancies.
- **Avoiding Race Conditions in Data Updates:** When multiple users or systems try to update the same data simultaneously, this workflow can serialize the updates and prevent data corruption.
- **Rate Limiting Resource-Intensive Tasks:** If a workflow triggers a resource-intensive task (e.g., generating a complex report), this workflow can prevent it from being executed concurrently, avoiding performance issues.

## How it works:

1.  **Incoming Webhook Data:** Receives data via a webhook, triggering the workflow.
2.  **Fetch Webhook Data & Declare lockValue:** Parses the webhook payload (assumed to be a Slack payload), extracts relevant data (var1, var2, var3), and creates a `lockValue` by concatenating these variables. The `lockValue` serves as a unique identifier for the lock.
3.  **Check Redis Lock:** Attempts to retrieve a value from Redis using the key "xyz-lock".
4.  **redisLock existence boolean:** Checks if the Redis key "xyz-lock" exists. If the key doesn't exist, the workflow proceeds to attempt to acquire the lock.
5.  **redisLock acquired booleans:** Checks if an element exists.  If it doesn't, the workflow proceeds to attempt to acquire the lock.
6.  **Acquire Redis Lock:** Attempts to set the "xyz-lock" key in Redis with a Time-To-Live (TTL) of 180 seconds. The value associated with the key is the `lockValue` generated earlier. This effectively acquires the lock.
7.  **Poll for lock:** Waits indefinitely.
8.  **duplicateWebhook boolean:** Checks if the current request is a duplicate by comparing the `lockValue` from the incoming webhook data with the existing value in Redis. If the values are identical, it indicates a duplicate request. If not, the workflow continues, rechecking for the Redis lock.
9.  **Workflow Switch:** Routes the execution to one of three workflows (Workflow 1, Workflow 2, or Workflow 3).  The routing logic is based on conditions that are currently empty, meaning all three workflows will be triggered.
10. **Workflow 1, 2, 3:** Placeholders for actual workflows that are to be executed.
11. **Discard Redis Lock:** Deletes the "n8n-rca-lock" key from Redis, releasing the lock.
12. **END:** Terminates the workflow if it is a duplicate

## Services:

-   **Redis:** Used for distributed locking.
-   **Slack (assumed):** The workflow appears to be designed to handle data coming from Slack.

## Hashtags:

#n8n #automation #redis #locking #workflow
