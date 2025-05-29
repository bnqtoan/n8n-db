# Remote IOT Sensor monitoring via MQTT and InfluxDB

## Use cases:

1.  **Home Automation:** Monitor temperature and humidity in different rooms of a house using remote sensors and visualize the data in a dashboard.
2.  **Environmental Monitoring:** Deploy sensors in a garden or greenhouse to track environmental conditions and optimize plant growth.
3.  **Industrial Monitoring:** Track temperature and humidity in a factory or warehouse to ensure optimal storage conditions for sensitive materials.

## How it works:

The workflow listens for MQTT messages from a remote sensor, extracts temperature and humidity data, and stores it in an InfluxDB time-series database.

1.  **MQTT Trigger:** The "Remote Sensor MQTT Trigger" node subscribes to the `wokwi-weather` MQTT topic using a provided MQTT account.
2.  **Data Preparation:** The "Payload data preparation node" node receives the MQTT message, parses the JSON payload to extract temperature and humidity values, and formats the data into a string suitable for InfluxDB.  It also validates that the data is in the correct JSON format.
3.  **InfluxDB Ingestion:** The "Data ingest to InfluxDB bucket" node sends an HTTP POST request to the InfluxDB API, writing the formatted sensor data to a specified bucket. The URL includes the organization ID, bucket name, and precision. It also sends authentication token via the header.

## Services:

*   **MQTT Broker (e.g., Mosquitto):** Receives sensor data from remote devices.
*   **InfluxDB:** Time-series database for storing and visualizing sensor data.

## Hashtags:

#n8n #MQTT #InfluxDB #IOT #SensorMonitoring
