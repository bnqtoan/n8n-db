# Track Hourly Weather Conditions with OpenWeatherMap → Google Sheets

## Use cases:

- **Track Local Weather Conditions:** Monitor hourly weather conditions in a specific city (e.g., Pasay, Philippines) and log the data for analysis and historical records.
- **Temperature Monitoring:** Track temperature changes and humidity levels to identify trends and patterns over time.
- **Conditional Alerts:** Trigger actions based on specific weather conditions, such as temperature thresholds or rainfall, which can be used for custom notifications or automated responses.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Schedule Trigger" node, configured to run at hourly intervals.
2.  **Get Weather Data from OpenWeatherMap:** This node sends an HTTP request to the OpenWeatherMap API to fetch the current weather conditions for Pasay, Philippines. It uses the `apiKey` credential stored in n8n.
3.  **If is raining:** This node evaluates the temperature and weather description from the OpenWeatherMap API. The workflow proceeds if the temperature is less than 303K or if the weather description contains the word "rain".
4.  **Format the data:** If it's raining, this node formats the weather data (city, temperature, humidity, conditions) extracted from the OpenWeatherMap API response. It also adds a "status" field indicating "higher than average temperature".
5.  **Google Sheets:** The formatted data is then appended to a specified Google Sheets document using the Google Sheets node. The "append" operation adds a new row with the extracted weather information. The workflow uses service account authentication to access Google Sheets.

## Services:

-   **OpenWeatherMap API:** Used to retrieve current weather data.
-   **Google Sheets:** Used to store and log the weather data.

## Hashtags:

#n8n #automation #weather #googleSheets #OpenWeatherMap
