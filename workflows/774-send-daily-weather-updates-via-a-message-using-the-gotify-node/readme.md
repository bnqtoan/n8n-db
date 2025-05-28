# Send daily weather updates via a message using the Gotify node

## Use cases:

- Receive daily weather forecasts directly in your Gotify app without manually checking weather websites or apps.
- Automate the distribution of weather information to a specific group or channel for informational purposes.
- Personalize daily routines by incorporating automated weather updates at a specific time.

## How it works:

This workflow automates the process of sending daily weather updates to your Gotify app.

1.  **Cron**: Triggers the workflow daily at 9:00 AM.
2.  **OpenWeatherMap**: Retrieves the current weather conditions for Berlin using the OpenWeatherMap API.
3.  **Gotify**: Sends a message to your Gotify app with the current temperature. The message includes the title "Today's Weather Update" and the temperature is dynamically inserted from the OpenWeatherMap node's output.

## Services:

-   OpenWeatherMap API
-   Gotify

## Hashtags:

#n8n #automation #weather #Gotify #OpenWeatherMap
