# Automated Daily Weather Data Fetcher and Storage

## Use cases:

- **Personal Weather Tracking:** Individuals can use this workflow to automatically log daily weather conditions in their location for personal records, tracking trends, or gardening purposes.
- **Small Business Weather Monitoring:** Businesses (e.g., cafes with outdoor seating) can monitor daily weather data to inform staffing decisions, adjust inventory, or send weather-dependent promotions.
- **Data Analysis for Specific Locations:** If you are interested in studying weather patterns and don't want to manually retrieve the weather information this might come in handy.

## How it works:

1.  **Schedule Trigger:** The workflow starts daily at 10:00 AM (as configured in the Schedule Trigger node).
2.  **Get Weather Data:** It then sends an HTTP request to the OpenWeatherMap API to fetch current weather data for a specific location (latitude 23.0059 and longitude 72.5547). The units are set to metric, which returns temperature in Celsius.
3.  **Store Weather Data:** The fetched weather data (temperature, humidity, location name, timezone, and wind speed) is then stored in an Airtable base and table.

## Services:

-   **OpenWeatherMap API:** Used to fetch real-time weather data.
-   **Airtable:** Used as a database to store the fetched weather information.

## Hashtags:

#n8n #automation #weather #Airtable #OpenWeatherMap
