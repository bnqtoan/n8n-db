# Retry Execution Hourly

## Use cases:

- **Automated Error Recovery:** Automatically retries failed n8n workflow executions to ensure critical processes are completed, reducing manual intervention and improving reliability.
- **Scheduled Task Resilience:** Ensures scheduled tasks are retried even if they fail due to temporary issues like network glitches or API outages.
- **Background Process Management:** Monitors and retries background processes or data synchronization tasks that might fail intermittently.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via "When clicking 'Test workflow'" node or on a schedule (hourly) using the "Schedule Trigger" node.
2.  **Login Details:** The "login_details" Set node stores the n8n instance URL, username, password, and the execution ID (of failed workflow) which are required to authenticate and retry the executions.
3.  **Log into n8n:** The "Log into n8n" HTTP Request node makes a POST request to the n8n instance's login endpoint using the credentials set in the "login_details" node, effectively logging into the n8n instance and retrieving session cookies.
4.  **Get Error Executions:** The "n8n" node queries the n8n API for all executions with a status of "error". This node filters failed executions, with an option to filter out active workflows by using options.
5.  **Check if execution has been retried:** The "If" node checks if the current execution already has a `retrySuccessId`. If it does not, it proceeds to retry it. If it does, it does nothing.
6.  **Retry Executions:** The "Loop Over Items" node splits the incoming items, in batches of 5. The "retry workflow automatically" HTTP Request node makes a POST request to the n8n instance's retry execution endpoint using the execution ID from the "n8n" node and the session cookie obtained from the "Log into n8n" node.  This triggers the retry process for the failed execution.

## Services:

-   n8n API (self)

## Hashtags:

#n8n #automation #workflow #errorhandling #retry
