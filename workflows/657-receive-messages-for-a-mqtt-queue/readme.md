# Receive messages for a MQTT queue

## Use cases:
- **IoT Device Monitoring:** Receive real-time data from IoT devices publishing to a specific MQTT topic, enabling immediate insights into device status and performance.
- **Real-time Notifications:** Trigger notifications or alerts based on messages received from an MQTT broker, such as security alerts or system status updates.

## How it works:
This workflow is triggered by an MQTT Trigger node. It subscribes to a specific MQTT topic and listens for incoming messages. When a message is received, the workflow is activated.

*   **MQTT Trigger:** Subscribes to a MQTT topic using the provided MQTT credentials. When a message is received, it starts the workflow execution.

## Services:
- MQTT Broker

## Hashtags:
#n8n #MQTT #IoT #RealTime #Automation
