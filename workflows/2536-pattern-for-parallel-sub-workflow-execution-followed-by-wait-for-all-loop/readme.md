# Parallel Sub-Workflows

This workflow demonstrates how to initiate multiple sub-workflows in parallel and wait for their completion before proceeding in the main workflow.

## Use cases

*   **Processing large datasets in parallel:** Divide a large dataset into smaller chunks and process each chunk in a separate sub-workflow to improve processing time.
*   **Orchestrating complex tasks:** Break down a complex task into smaller, independent sub-tasks that can be executed concurrently.
*   **Integrating with multiple external services:** Interact with different services simultaneously, such as fetching data from multiple APIs or updating records in multiple databases.

## How it works

This workflow consists of a main workflow and a sub-workflow.

**Main Workflow:**

1.  **Trigger:** The workflow starts with a "When clicking ‘Test workflow’" node, simulating a manual trigger.
2.  **Simulate Multi-Item:** A "Code" node simulates the generation of multiple items, each representing a task to be processed in a sub-workflow. In this example, it creates three items with unique `requestId` values.
3.  **Loop Over Items:** The "Loop Over Items" node iterates through the items created in the previous step.
4.  **Initialize finishedSet:** An "Set" node initializes an empty array called `finishedSet`. This array will store the `requestId` values of the sub-workflows as they complete. This node only executes once.
5.  **Start Sub-Workflow via Webhook:** An "HTTP Request" node sends a POST request to a sub-workflow via a webhook. The request includes the `requestId` and a callback URL (`$execution.resumeUrl`) that the sub-workflow will use to notify the main workflow when it's finished.  The `WEBHOOK_URL` environment variable needs to be set for this to work.
6.  **If All Finished:** An "If" node checks if all sub-workflows have completed by comparing the length of the `finishedSet` array to the total number of sub-workflows started.
    *   If all sub-workflows are finished, it continues to the "Continue Workflow (noop)" node.
    *   If not all sub-workflows are finished, it proceeds to the "Webhook Callback Wait" node.
7.  **Webhook Callback Wait:** A "Wait" node configured as a webhook waits for a callback from the sub-workflows. The `webhookId` must match in the sub-workflow node "Call Resume on Parent Workflow".
8.  **Update finishedSet:** A "Code" node adds the `finishedItemId` (which contains the original `requestId` sent to the sub-workflow) received from the sub-workflow to the `finishedSet` array.
9.  **Acknowledge Finished:** A "Respond to Webhook" node sends a response to the sub-workflow acknowledging the callback.
10. **Continue Workflow (noop):** A "No Op" node that will signify the end of the parent workflow.

**Sub-Workflow:**

1.  **Webhook:** A "Webhook" node receives the POST request from the main workflow. The `path` should match the path configured in the parent workflow's "Start Sub-Workflow via Webhook" node.
2.  **Respond to Webhook:** A "Respond to Webhook" node immediately acknowledges the webhook request.
3.  **Wait:** A "Wait" node simulates processing time.
4.  **Call Resume on Parent Workflow:** An "HTTP Request" node sends a POST request to the callback URL provided by the main workflow, including the `requestItemId` (original `requestId`). This informs the main workflow that the sub-workflow has completed. The `retryOnFail` option helps mitigate potential race conditions where the parent workflow might not be ready to receive the callback immediately.

## Services

*   None, but requires that `WEBHOOK_URL` be set in n8n to access the sub-workflow.

## Hashtags

#n8n #automation #workflow #parallelProcessing #subworkflow
