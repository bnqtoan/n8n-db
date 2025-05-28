## n8n Workflow: PayPal Payment Automation

This workflow automates the process of initiating a PayPal payment.

**Use cases:**

*   **Testing PayPal API Integration:** Useful for developers to quickly test their PayPal API credentials and configurations.
*   **Simple Payment Initiation:** Can be adapted to trigger a basic PayPal payment flow directly from n8n for demonstration or testing purposes.
*   **Educational Tool:** Demonstrates a basic integration with the PayPal API, serving as a starting point for more complex workflows.

**How it works:**

1.  The workflow starts with a "Manual Trigger" node, which is activated when you click the "Execute Workflow" button in n8n.
2.  The "PayPal" node then uses your provided PayPal API credentials to initiate a payment request with a specific `senderBatchId`. Additional fields can be configured in the node's settings.

**Services:**

*   PayPal API

**Hashtags:**

*   #n8n
*   #automation
*   #PayPal
*   #payment
*   #API
