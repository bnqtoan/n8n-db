# ISS Location Tracker

## Use cases:

-   **Real-time Monitoring:** Track the International Space Station's (ISS) current location in real-time for educational or research purposes.
-   **Data Logging:** Automatically log the ISS's latitude, longitude, and timestamp into a database for historical analysis and trend identification.
-   **Alerting System:** Integrate with a notification service (e.g., email, Slack) to receive alerts when the ISS passes over a specific geographic region.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node, which triggers the workflow every minute.
2.  **HTTP Request:** The `HTTP Request` node fetches the latest ISS position data from the `https://api.wheretheiss.at/v1/satellites/25544/positions` API, adding a timestamp to the query.
3.  **Set Node:** The `Set` node extracts the latitude, longitude, and timestamp values from the JSON response of the API and stores them as individual variables.
4.  **TimescaleDB:** The `TimescaleDB` node inserts the extracted latitude, longitude, and timestamp values into the "iss" table of a TimescaleDB database.

## Services:

-   [Where The ISS At API](https://api.wheretheiss.at/): Provides real-time data about the ISS's location.
-   [TimescaleDB](https://www.timescale.com/): A time-series database used to store the ISS location data.

## Hashtags:

#n8n #automation #ISS #TimescaleDB #realtime #locationtracking
