# Send updates about the position of the ISS every minute to a topic in ActiveMQ

## Use cases:

- **Real-time Tracking:** Visualize the International Space Station's (ISS) current location on a map in real-time.
- **Educational Tool:** Use the data to create an educational application that teaches about space, geography, and satellite tracking.
- **Alerting System:** Trigger alerts based on the ISS's proximity to specific geographical locations.

## How it works:

The workflow is designed to fetch and send the ISS's position to ActiveMQ every minute. Here's a breakdown:

1.  **Cron Trigger:** The `Cron` node is configured to trigger the workflow every minute.
2.  **HTTP Request:** The `HTTP Request` node sends a GET request to the `https://api.wheretheiss.at/v1/satellites/25544/positions` endpoint, including a timestamp to get the latest ISS position.
3.  **Set Node:** The Set node extracts data from the HTTP Request node, then saves the `latitude`, `longitude`, `timestamp`, and `name` into new variables.
4.  **AMQP Sender:** Finally, the `AMQP Sender` node sends the data to ActiveMQ.

## Services:

-   **Where The ISS At API:** Provides real-time data about the International Space Station's location.
-   **ActiveMQ:** A message broker used to send and receive messages.

## Hashtags:

#n8n #automation #ISS #ActiveMQ #realtime
