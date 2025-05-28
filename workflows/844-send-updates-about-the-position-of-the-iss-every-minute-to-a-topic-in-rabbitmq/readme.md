# Send updates about the position of the ISS every minute to a topic in RabbitMQ

## Use cases:

- **Real-time ISS Tracking:**  Provide a live feed of the International Space Station's location for educational purposes or space enthusiasts.
- **Data Logging and Analysis:** Log the ISS position data into a database or analytics platform for historical tracking and trend analysis.
- **Geofencing Alerts:** Trigger alerts when the ISS passes over specific geographic locations based on its real-time position.

## How it works:

This workflow retrieves the International Space Station's (ISS) position every minute and publishes it to a RabbitMQ topic. Here's a step-by-step breakdown:

1.  **Cron:** The `Cron` node triggers the workflow to run every minute.
2.  **HTTP Request:** An `HTTP Request` node fetches the ISS's current position data from the `https://api.wheretheiss.at/v1/satellites/25544/positions` API.  A timestamp is added to the request.
3.  **Set:** The `Set` node extracts specific data points (Latitude, Longitude, Timestamp, and Name) from the JSON response of the HTTP request and sets them as individual values. Only the extracted data is kept and passed to the next node.
4.  **RabbitMQ:** The `RabbitMQ` node publishes the extracted ISS position data to the "iss-position" queue in RabbitMQ.

## Services:

-   **WhereTheISS API:** Provides real-time ISS position data.
-   **RabbitMQ:** Message broker for distributing the ISS position updates.

## Hashtags:

#n8n #automation #ISS #RabbitMQ #realtime #space
