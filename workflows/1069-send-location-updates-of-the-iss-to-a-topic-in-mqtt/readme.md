# ISS Position Tracker

## Use cases:

- **Real-time Tracking:** Display the current latitude and longitude of the International Space Station (ISS) on a dashboard or monitoring system.
- **Data Logging:** Create a log of the ISS's position over time for analysis or historical records.
- **Educational Tool:** Visualize the ISS's orbit on a map for educational purposes.

## How it works:

This workflow retrieves and publishes the real-time position of the International Space Station (ISS) to an MQTT broker.

1.  **Cron:** The `Cron` node triggers the workflow to run every minute.
2.  **HTTP Request:** The `HTTP Request` node calls the `https://api.wheretheiss.at/v1/satellites/25544/positions` API, passing a timestamp to retrieve the current position data.
3.  **Set:** The `Set` node parses the JSON response from the API and extracts the ISS's `name`, `latitude`, `longitude`, and `timestamp`.
4.  **MQTT:** The `MQTT` node publishes the extracted information to the `iss-position` topic on the configured MQTT broker.

## Services:

-   [Where The ISS At API](https://wheretheiss.at/): API that provides the current location of the ISS.
-   MQTT Broker: A messaging protocol to send data.

## Hashtags:

#n8n #automation #ISS #MQTT #realtime
