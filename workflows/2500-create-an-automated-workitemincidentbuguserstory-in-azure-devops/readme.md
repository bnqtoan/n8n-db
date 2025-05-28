# Elasticsearch Alert to Azure DevOps Work Item

## Use cases:

*   **Automated Bug Tracking**: Automatically create a work item (e.g., a bug) in Azure DevOps when the number of errors or exceptions logged in Elasticsearch exceeds a predefined threshold.
*   **Performance Monitoring**: Trigger a task in Azure DevOps to investigate performance issues when Elasticsearch indicates a significant increase in response times or resource usage.
*   **Security Incident Response**: Generate a security-related work item in Azure DevOps if Elasticsearch detects a suspicious number of login failures or unauthorized access attempts.

## How it works:

1.  **Cron Trigger**: The workflow starts at a specific time (12:15) defined in the Cron Trigger node.
2.  **Elasticsearch Query**: An Elasticsearch query is executed to retrieve data, likely aggregating and counting events based on certain criteria. The specific query is defined within the Elasticsearch Query node's parameters (not visible in the provided JSON).
3.  **Check for Alerts**: The workflow checks if the total number of "hits" (results from the Elasticsearch query) exceeds a defined threshold.
4.  **Create Work Item**: If the threshold is exceeded, an HTTP request is sent to Azure DevOps to create a new work item of type "Task".  The work item's details (title, description, etc.) are configured in the HTTP Request node (not visible in the provided JSON).  The `Content-Type` header is set to `application/json-patch+json`, indicating that the work item is created using a JSON patch.
5.  **No Operation, do nothing**: If the threshold is not exceeded, the workflow does nothing.

## Services:

*   Elasticsearch
*   Azure DevOps

## Hashtags:

#n8n #elasticsearch #azuredevops #automation #alerting
