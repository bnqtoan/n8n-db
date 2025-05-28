## n8n Workflow: Receive Messages from ActiveMQ via AMQP

This workflow listens for messages on an ActiveMQ queue using the AMQP protocol.  It's a fundamental workflow for integrating ActiveMQ with other services via n8n.

**Use Cases:**

*   **Real-time data processing:**  Trigger workflows based on messages published to an ActiveMQ queue, allowing for immediate processing of incoming data, such as sensor readings or financial transactions.
*   **Event-driven architecture:**  Use ActiveMQ as a message broker to decouple services and trigger downstream workflows in response to specific events. For example, when a new order is placed in an e-commerce system, a message can be sent to the ActiveMQ queue to trigger a workflow that updates inventory and notifies the shipping department.
*   **Monitoring and Alerting:** Monitor specific message types or content on an ActiveMQ queue and trigger alerts (e.g., via Slack or email) when critical conditions are met.

**How it works:**

1.  **AMQP Trigger:** The workflow starts with the "AMQP Trigger" node. This node subscribes to a specified ActiveMQ queue via the AMQP protocol. When a new message arrives on the queue, the trigger activates the workflow. The `sink` parameter specifies the queue name on the ActiveMQ broker. The credentials associated with `amqp` provide the necessary authentication information to connect to the ActiveMQ broker.

**Services:**

*   **ActiveMQ:** The workflow relies on an ActiveMQ message broker to receive messages.

**Hashtags:**

*   #n8n
*   #ActiveMQ
*   #AMQP
*   #MessageQueue
*   #Automation
