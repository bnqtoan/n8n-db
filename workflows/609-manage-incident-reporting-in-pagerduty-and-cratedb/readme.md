# Smart Factory Use Case

## Use cases:

*   **Real-time Temperature Monitoring:** This workflow can be used to monitor the temperature of machines in a factory in real-time and trigger alerts when the temperature exceeds a critical threshold.
*   **Incident Management:** When a machine's temperature exceeds 50°C, the workflow automatically creates an incident in PagerDuty, ensuring that the appropriate personnel are notified immediately.
*   **Data Logging and Analysis:** The workflow logs both normal operational data and incident-related data into a CrateDB database for historical analysis and predictive maintenance.

## How it works:

1.  **Data Acquisition:** The workflow starts by listening for messages from an AMQP queue (`Data from factory sensors`). These messages contain sensor data, including temperature in Celsius, machine name, machine ID, and uptime.
2.  **Temperature Conversion:** The `Data enrichment (°C to °F)` function node converts the temperature from Celsius to Fahrenheit.
3.  **Conditional Check:** The `Values higher than 50°C` node checks if the temperature in Celsius is greater than or equal to 50°C.
4.  **Incident Creation (if necessary):** If the temperature is above the threshold, the workflow creates an incident in PagerDuty using the `Create an incident` node.  It then extracts the incident ID, URL, and timestamp using the `Set incident info` node and stores it in CrateDB.
5.  **Data Storage:** The `Set sensor data` node prepares the machine data, including both Celsius and Fahrenheit temperatures, machine name, uptime, and timestamp. This data is then stored in a CrateDB database using the `Ingest machine data` node.

## Services:

*   **AMQP:** Used to receive real-time data from factory sensors.
*   **PagerDuty:** Used for incident management and alerting.
*   **CrateDB:** Used as a database for storing both sensor data and incident information.

## Hashtags:

#n8n #automation #smartfactory #incidentmanagement #IoT
