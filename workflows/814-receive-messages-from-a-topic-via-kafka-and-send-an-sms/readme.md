# Receive messages from a topic and send an SMS

## Use cases:

- **Temperature Monitoring Alert:** Receive temperature readings from a Kafka topic and send an SMS alert if the temperature exceeds a certain threshold (e.g., 50 degrees).
- **IoT Device Alerting:** Monitor data streams from IoT devices via Kafka and trigger SMS notifications for critical events or anomalies.

## How it works:

1.  **Kafka Trigger:** The workflow starts with a "Kafka Trigger" node, which listens to messages from a specified Kafka topic named "topic\_test". It's configured to parse incoming messages as JSON.
2.  **IF Condition:** The "IF" node checks if the "temp" value within the JSON message from Kafka is greater than 50.
3.  **Vonage (Send SMS):** If the condition in the "IF" node is true (temperature exceeds 50), the workflow proceeds to the "Vonage" node. This node sends an SMS message via the Vonage API to a predefined number. The SMS includes an alert message and the current temperature value.
4.  **NoOp:** If the condition in the "IF" node is false (temperature is not greater than 50), the workflow goes to "NoOp" node, which does nothing.

## Services:

-   Kafka
-   Vonage API

## Hashtags:

#n8n #automation #Kafka #SMS #Alerting
