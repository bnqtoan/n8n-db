# My Workflow

## Use cases:

*   **Rate Limiting:** Avoid overwhelming a service by processing requests in batches with a delay, preventing potential service disruptions or API rate limits being hit. For example, sending bulk emails or SMS messages.
*   **External Approval Workflow:** Automate processes that require human intervention. The workflow can pause and wait for an action (e.g., approval via a URL click) before proceeding with subsequent steps. Useful for purchase approvals, content moderation, or any process needing sign-off.
*   **Personalized Customer Communication:** Send individualized messages to customers based on data retrieved from a datastore, ensuring relevant and timely communication.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Fetch Customer Data:** The "Customer Datastore" node retrieves a list of customers from a simulated datastore.
3.  **Batch Processing:** The "SplitInBatches" node divides the customer data into individual batches of one customer each. This allows for rate limiting and personalized processing.
4.  **Rate Limiting (Delay):** The "Wait for time interval" node introduces a 2-second delay between processing each customer, preventing the workflow from overwhelming the "Customer Messenger" node.
5.  **Send Customer Message:** The "Customer Messenger - Send message to client" node sends a personalized message to each customer using data from the "Customer Datastore" node. The message includes the customer's name and the timestamp of the message.
6.  **Check for Completion:** The "If - Are we Finished?" node checks if all customer batches have been processed.
    *   **If Not Finished:** The workflow loops back to the "SplitInBatches" node to continue processing remaining customers.
    *   **If Finished:** The workflow proceeds to the external approval section.
7.  **Create Approval URL:** The "Create approval URL" node generates a unique URL containing a webhook ID. This URL is used for external approval.
8.  **Send Approval URL to Merchant:** The "Customer Messenger - Send URL to merchant" node sends the approval URL to a simulated merchant.
9.  **Wait for External Approval:** The "Wait for external approval" node pauses the workflow until the merchant clicks the approval URL, triggering the associated webhook.
10. **Complete Workflow:** Once the external approval is received, the workflow continues with the "Rest of the workflow placeholder" node.

## Services:

*   n8nTrainingCustomerDatastore (Simulated Customer Datastore)
*   n8nTrainingCustomerMessenger (Simulated Customer Messaging Service)

## Hashtags:

#n8n #automation #workflow #ratelimiting #approvalworkflow
