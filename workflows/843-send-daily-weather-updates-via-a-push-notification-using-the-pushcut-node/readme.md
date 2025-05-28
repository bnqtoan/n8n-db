# Send daily weather updates via a push notification using the Pushcut node

## Use cases:

*   **Daily Weather Briefing:** Get a morning weather update sent directly to your phone, so you know what to expect before you leave the house.
*   **Automated Temperature Alerts:** Receive notifications when the temperature reaches a specific threshold, useful for sensitive activities or environments.

## How it works:

This workflow automates the process of fetching weather data and sending it to your phone as a push notification.

1.  **Cron:** Triggers the workflow at 9:00 AM every day.
2.  **OpenWeatherMap:** Retrieves the current weather conditions for Berlin from the OpenWeatherMap API.
3.  **Pushcut:** Sends a push notification to your phone via the Pushcut service, including the current temperature and a custom title.

## Services:

*   [OpenWeatherMap](https://openweathermap.org/api): Provides weather data based on city name.
*   [Pushcut](https://pushcut.io/): Sends customizable push notifications to iOS devices.

## Hashtags:

#n8n #automation #weather #pushnotification #dailybriefing
