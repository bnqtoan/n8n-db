# Receive messages from a queue via RabbitMQ and send an SMS

## Use cases:

*   **Threshold Alerting:** Monitor a queue for messages containing sensor readings (e.g., temperature). When a reading exceeds a predefined threshold, send an SMS alert to a designated recipient.
*   **Critical Event Notification:** Receive notifications about critical system events from a message queue and immediately forward them as SMS messages to on-call personnel.
*   **Real-time Anomaly Detection:** Process data from a queue for anomalies. Trigger an SMS alert when an unusual pattern is detected, enabling prompt investigation.

## How it works:

1.  **RabbitMQ Trigger:** The workflow starts with the "RabbitMQ" node, which listens for messages in the "temp" queue.  It's configured to extract the message body as JSON.
2.  **IF Condition:** The "IF" node evaluates a condition: whether the value of the `temp` field in the JSON received from RabbitMQ is greater than 50.
3.  **Vonage SMS:** If the condition in the "IF" node is true (the `temp` value is greater than 50), the "Vonage" node sends an SMS. The message includes an alert and the actual `temp` value.
4.  **NoOp (Do Nothing):** If the condition in the "IF" node is false (the `temp` value is not greater than 50), the workflow does nothing and ends on NoOp node.

## Services:

*   RabbitMQ
*   Vonage (formerly Nexmo)

## Hashtags:

#n8n #RabbitMQ #SMS #Alerting #Automation
