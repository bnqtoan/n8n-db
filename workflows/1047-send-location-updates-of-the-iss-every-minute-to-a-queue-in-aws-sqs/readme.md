# ISS Location Tracker and SQS Notifier

## Use cases:

- **Real-time ISS Tracking and Logging:** Continuously monitors the International Space Station's location and logs the data for analysis or historical records.
- **Proximity Alert System:**  Could be adapted to trigger alerts when the ISS passes over a specific geographic region, by adding logic to filter the latitude and longitude.
- **Educational Tool:** Provides real-time data that can be used in educational settings to teach about space, satellites, and data processing.

## How it works:

This workflow tracks the International Space Station (ISS) location and sends the data to an AWS Simple Queue Service (SQS) queue.

1.  **Cron:** Triggers the workflow every minute.
2.  **HTTP Request:** Makes a request to the `https://api.wheretheiss.at/v1/satellites/25544/positions` API to retrieve the current latitude, longitude, name and timestamp of the ISS. A timestamp query parameter is added to the request.
3.  **Set:** Extracts the latitude, longitude, name and timestamp from the JSON response of the HTTP request and sets them as variables.
4.  **AWS SQS:** Sends the extracted latitude, longitude, name and timestamp information as a message to a specified AWS SQS queue.

## Services:

-   [Where The ISS At API](https://wheretheiss.at/): Provides real-time location data for the International Space Station.
-   [Amazon SQS](https://aws.amazon.com/sqs/): A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

## Hashtags:

#n8n #automation #ISS #AWSSQS #RealTimeTracking
