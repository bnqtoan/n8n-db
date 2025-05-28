# Weather Alert to SIGNL4

## Use cases:

- **Automated Weather Monitoring:** This workflow can be used to automatically monitor the weather in a specific city (e.g., Berlin) and trigger alerts when the temperature drops below a certain threshold (e.g., 25°C).
- **Proactive Infrastructure Protection:**  Businesses can use this workflow to get alerts to prepare for weather changes impacting infrastructure (e.g., freezing pipes, server rooms).
- **Personalized Weather Notifications:** Individuals can adapt this workflow to receive personalized weather alerts based on their preferred temperature range and location.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger") at 6:15 AM.
2.  **Fetch Weather Data:** The "OpenWeatherMap" node retrieves current weather data for Berlin, including the temperature.
3.  **Conditional Check:** The "If" node checks if the temperature is below 25°C.
4.  **Send Alert to SIGNL4:** If the temperature is below 25°C, the "SIGNL4" node sends an alert to the configured SIGNL4 service with details about the weather, including the temperature and coordinates. The alert message is "Weather alert ❄️ Temperature: [temperature] °C" and includes the location (latitude and longitude).

## Services:

-   **OpenWeatherMap:**  An online service that provides weather data.
-   **SIGNL4:** A mobile alerting service for operations teams.

## Hashtags:

#n8n #automation #weather #SIGNL4 #alerting
