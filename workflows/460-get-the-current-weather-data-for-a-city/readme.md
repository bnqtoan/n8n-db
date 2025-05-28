## n8n Workflow: Get Current Weather Data for a City

This workflow retrieves and displays the current weather information for a specified city using the OpenWeatherMap API.

### Use cases:

*   **Personal Weather Updates:** Quickly check the current weather conditions in a specific city of interest.
*   **Dashboard Integration:** Integrate the weather data into a personal dashboard or monitoring system.
*   **Smart Home Automation:** Use the weather data as a trigger for smart home actions (e.g., closing windows if it starts raining).

### How it works:

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered within the n8n interface.
2.  **OpenWeatherMap API Call:** The "OpenWeatherMap" node then uses the OpenWeatherMap API to retrieve the current weather data for "berlin,de".  The workflow requires valid OpenWeatherMap API credentials to function correctly.
3.  **Output:** The workflow outputs the weather information received from the API. This data can be further processed or displayed using other n8n nodes (not shown in the current workflow, but could include things like saving to a Google Sheet, sending a Slack message, etc.)

### Services:

*   OpenWeatherMap API

### Hashtags:

#n8n #automation #weather #openweathermap #api
