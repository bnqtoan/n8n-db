# ISS Position Tracker

## Use Cases

1.  **Historical Location Tracking:** Log and analyze the historical positions of the International Space Station (ISS) over time. This can be used for educational purposes, research, or simply tracking its journey around the Earth.
2.  **Real-time Notification System:** Trigger notifications when the ISS passes over a specific geographic location. This could be integrated with services like Slack or email to alert users of ISS sightings.
3. **Data Analysis:** Allows to perform data analysis on the data from the ISS.

## How it works

1.  **Cron Trigger:** The workflow starts with a "Cron" node that triggers the workflow every minute.
2.  **HTTP Request:** The "HTTP Request" node fetches the current latitude, longitude, and timestamp of the ISS from the `https://api.wheretheiss.at/v1/satellites/25544/positions` API. A timestamp is added as a query parameter.
3.  **Set:** The "Set" node extracts the latitude, longitude, and timestamp from the JSON response of the HTTP Request and stores it as individual variables.
4.  **Function:** The "Function" node checks if the current ISS position is already stored. If it is a new position, it returns the data; otherwise, it returns "No new items." This prevents duplicate data from being processed. It uses workflow static data to keep track of previously processed timestamps.

## Services

*   [Where The ISS At API](https://wheretheiss.at/): Provides the current position of the International Space Station.

## Hashtags

#n8n #ISS #Automation #Space #Tracking
