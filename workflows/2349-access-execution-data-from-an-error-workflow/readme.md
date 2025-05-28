# Error Handling Workflow

## Use cases:

- **Centralized Error Logging:** Capture errors occurring in any n8n workflow and extract relevant data for debugging and analysis.
- **Webhook Payload Inspection:** When a workflow fails after receiving a webhook, this workflow can extract the webhook data for inspection, helping to identify issues related to the incoming data.
- **Dynamic Error Analysis:** Identify the specific webhook node that triggered the error and extract the associated payload for targeted troubleshooting.

## How it works:

1.  **Error Trigger:** The workflow starts when an error occurs in another workflow. The `Error Trigger` node automatically activates upon an error event within n8n.
2.  **Get execution data:** The `Get execution data` node uses the `execution.id` from the error trigger to fetch detailed information about the failed workflow execution.  This includes node execution data, workflow configuration, and other metadata.
3.  **Extract webhook data:** The `Extract webhook data` node uses a JavaScript code node to:
    *   Identify all webhook nodes within the failed workflow using the workflow data.
    *   Extract the payload data from the webhook node, in case of a webhook triggered execution.
    *   The result contains an array of webhook node names and the extracted payload.

## Services:

-   n8n API (for fetching execution data)

## Hashtags:

#n8n #errorhandling #automation #webhook #debugging
