# Receive updates for the position of the ISS every minute and push it to a database

## Use cases:

- **Real-time ISS Tracking Dashboard:** Create a live dashboard that displays the current latitude and longitude of the International Space Station (ISS) based on the data stored in the Google Cloud Realtime Database.
- **Historical ISS Position Analysis:** Analyze the historical position data of the ISS to study its orbital patterns and predict future locations.
- **Educational Tool:** Use the workflow as a teaching aid to demonstrate real-time data acquisition and database integration in the context of space exploration.

## How it works:

The workflow automatically retrieves the ISS's position every minute and saves it to a database. Here's a step-by-step breakdown:

1.  **Cron:** The `Cron` node is configured to trigger the workflow every minute using the "everyMinute" mode.
2.  **HTTP Request:** This node sends a GET request to the `https://api.wheretheiss.at/v1/satellites/25544/positions` endpoint to retrieve the current position data of the ISS. The `timestamps` query parameter is dynamically set to the current timestamp using `Date.now()`.
3.  **Set:** The `Set` node extracts the `latitude`, `longitude`, and `timestamp` from the JSON response of the HTTP Request node. It then stores these values as separate fields in the output. The `keepOnlySet` option ensures that only these three fields are passed on to the next node.
4.  **Google Cloud Realtime Database:** This node connects to a Google Cloud Realtime Database and pushes the extracted `latitude`, `longitude`, and `timestamp` values to the `iss` path in the database.

## Services:

-   [Where The ISS At API](https://wheretheiss.at/): Provides real-time data about the International Space Station's location.
-   [Google Cloud Realtime Database](https://firebase.google.com/docs/database): A cloud-hosted, NoSQL database that lets you store and synchronize data between users in realtime.

## Hashtags:

#n8n #automation #ISS #realtime #database #GoogleCloud #Firebase
