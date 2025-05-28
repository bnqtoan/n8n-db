# Weather via Slack

## Use cases:

- **Get weather forecasts in Slack:** Users can type a location in a Slack channel, and the workflow will send the current weather forecast for that location directly to the channel.
- **Automated morning weather updates:** The workflow can be modified to trigger periodically (e.g., every morning) and post the weather forecast for a specific location to a designated Slack channel.
- **Real-time weather alerts:** By integrating additional nodes and logic, the workflow could be enhanced to send alerts to Slack when specific weather conditions are met (e.g., temperature drops below a certain level, high wind speeds).

## How it works:

1.  **Webhook (Slack Trigger):** The workflow is triggered by a POST request to a specific webhook URL, which is expected to come from Slack.  The user's text input (location) from Slack is received here.
2.  **OpenStreetMap:** The location text from Slack is sent to the OpenStreetMap Nominatim API to retrieve the latitude and longitude coordinates for the given location.  A custom User-Agent header is included.
3.  **NWS (National Weather Service):** The latitude and longitude coordinates from OpenStreetMap are used to query the National Weather Service (NWS) API to get the weather forecast grid endpoint. A custom User-Agent header is included.
4.  **NWS1 (National Weather Service Forecast):**  Extracts the grid ID, X, and Y coordinates from the NWS API response and queries the NWS forecast API to get the detailed weather forecast data. A custom User-Agent header is included.
5.  **Slack:**  Formats the weather forecast data, including name, temperature, wind speed, wind direction, and short forecast, into a human-readable message and sends it to the specified Slack channel. The message is constructed using a JavaScript expression to iterate through the forecast periods.

## Services:

-   Slack
-   OpenStreetMap Nominatim API
-   National Weather Service (NWS) API

## Hashtags:

#n8n #automation #Slack #weather #forecast
