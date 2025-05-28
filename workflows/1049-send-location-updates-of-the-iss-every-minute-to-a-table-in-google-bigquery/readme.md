# ISS Position Logger

## Use cases:

*   **Tracking the International Space Station (ISS):** Automatically record the ISS's latitude, longitude, and timestamp at regular intervals for historical analysis.
*   **Data Visualization:** Feed the captured data into a dashboard or map to visualize the ISS's real-time and historical movement.
*   **Educational Purposes:** Use the data for educational projects related to space, geography, or data analysis.

## How it works:

The workflow is triggered every minute by a Cron node. It then performs the following steps:

1.  **Cron:** Triggers the workflow every minute.
2.  **HTTP Request:** Makes an HTTP request to the `https://api.wheretheiss.at/v1/satellites/25544/positions` endpoint to retrieve the current position (latitude, longitude, and timestamp) of the ISS. A timestamp is sent as query parameter.
3.  **Set:** Extracts the latitude, longitude, and timestamp from the JSON response of the HTTP Request node and set the value with a friendly name. Also set a name for the position.
4.  **Google BigQuery:** Inserts the extracted latitude, longitude, timestamp, and name of the position into a Google BigQuery table named `position` within the `iss` dataset of the `supple-cabinet-289219` project.

## Services:

*   [Where The ISS At API](https://wheretheiss.at/): Provides real-time and historical position data for the International Space Station.
*   [Google BigQuery](https://cloud.google.com/bigquery): Cloud-based data warehouse for storing and analyzing large datasets.

## Hashtags:

#n8n #automation #ISS #GoogleBigQuery #DataTracking
