## n8n Workflow: AWS SNS Message Sender

This workflow sends a message to an AWS Simple Notification Service (SNS) topic when manually triggered.

**Use cases:**

*   **Alerting and Notifications:** Send alerts or notifications to subscribers when a specific event occurs, such as a system error or a new user signup.
*   **Testing SNS Configuration:** Quickly test your AWS SNS setup by manually sending messages to ensure proper configuration.
*   **Manual Triggered Messages:** Send custom messages on demand, triggered by a manual execution.

**How it works:**

1.  The workflow starts with a "Manual Trigger" node, which initiates the workflow when you click the "Execute Workflow" button in n8n.
2.  The "AWS SNS" node then sends a message to the specified SNS topic. The message content and subject are pre-configured within the node.  The AWS credentials are used to authenticate with AWS.

**Services:**

*   AWS SNS (Simple Notification Service)

**Hashtags:**

*   #n8n
*   #automation
*   #AWS
*   #SNS
*   #notifications
