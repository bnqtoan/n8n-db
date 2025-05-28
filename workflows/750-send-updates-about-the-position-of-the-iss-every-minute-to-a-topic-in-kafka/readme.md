# Send updates about the position of the ISS every minute to a topic in Kafka

## Use cases:

*   **Real-time tracking:** Visualize the ISS's location on a map in real-time by consuming the Kafka topic and displaying the coordinates.
*   **Historical data analysis:** Store the ISS position data from Kafka for analysis of its orbit and speed over time.
*   **Educational tool:** Use the data to create educational resources about space, satellites, and orbital mechanics.

## How it works:

1.  **Cron:** Triggers the workflow every minute.
2.  **HTTP Request:** Sends a request to the `https://api.wheretheiss.at/v1/satellites/25544/positions` endpoint to retrieve the current position of the ISS. A timestamp is added to the request as a query parameter.
3.  **Set:** Extracts the `name`, `latitude`, `longitude`, and `timestamp` from the JSON response of the HTTP request and sets them as individual string properties in the n8n data structure.
4.  **Kafka:** Sends the extracted ISS position data to the `iss-position` topic in Kafka.

## Services:

*   [Where The ISS At API](https://api.wheretheiss.at/): Provides the current position of the International Space Station.
*   [Apache Kafka](https://kafka.apache.org/): A distributed streaming platform for building real-time data pipelines and streaming apps.

## Hashtags:

#n8n #automation #ISS #Kafka #realtime
