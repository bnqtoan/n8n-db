# My Workflow

## Use cases:

- **Orchestrating tasks that require external processing:** Imagine a scenario where you need to send a document for translation via a third-party service. This workflow can initiate the translation, wait for the translated document, and then continue with further processing or delivery.
- **Handling asynchronous events:**  This workflow is designed to handle scenarios where an initial action triggers an external process (e.g., sending a message to a Telegram bot), and the workflow needs to resume when the external process completes and sends back relevant data.
- **Integrating with systems that use webhooks for callbacks:** When interacting with services that use webhooks to notify you of events, this workflow can start a process, pause execution while waiting for the webhook, and then resume processing the data received from the webhook.

## How it works:

This workflow demonstrates how to initiate an independent process and then rejoin it to the original execution flow using `resumeUrl` from the `Wait` node.

1.  **Primary Trigger**: The workflow starts with a manual trigger ("When clicking ‘Test workflow’").
2.  **Set Primary Execution Context**: Sets some context variables for the primary execution, including a simulated external process workflow ID.
3.  **Initiate Independent Process**: An HTTP Request node sends a POST request to a simulated external process (another n8n workflow in this example), passing the `resumeUrl` from the current execution.
4.  **Wait Node**: The workflow pauses at the "Wait" node, which is configured to resume via a webhook call to its `resumeUrl`.
5.  **Secondary Trigger (Simulated External Process)**: This part simulates an external process (e.g., a separate workflow triggered by a webhook). A Webhook node (`Receive Input from External, Independent Process`) listens for incoming data.
6.  **Resume Primary Execution**: The simulated external process uses the `resumeUrl` to send a POST request back to the "Wait" node, including data generated in the external process (e.g., a joke).
7.  **Resume Other Workflow Execution**:  The `resumeUrl` is used to trigger the `Wait` node and include the joke data in the main execution.
8. **Final Node:** A set node access data from both Primary and Secondary executions to be used later in the workflow

## Services:

-   HTTP Request (for initiating and resuming the external process)
-   Webhook (for receiving data from the external process - simulated)

## Hashtags:

#n8n #automation #workflow #asynchronous #webhook
