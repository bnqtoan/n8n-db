# Send daily weather updates via a push notification

## Use cases:

- Receive a daily weather forecast for your city at a specific time each day.
- Stay informed about the temperature before you leave the house.
- Get weather updates without manually checking a weather app.

## How it works:

This workflow automates the process of sending daily weather updates via push notifications.

1.  **Cron:** The workflow starts with a Cron node that triggers the workflow at 9:00 AM every day.
2.  **OpenWeatherMap:** The OpenWeatherMap node retrieves the current weather data for Berlin, using the configured API credentials. It fetches information like temperature.
3.  **Pushover:** The Pushover node then sends a push notification to your device, using the retrieved weather data. The message includes the current temperature in Celsius.

## Services:

-   OpenWeatherMap API
-   Pushover API

## Hashtags:

#n8n #automation #weather #pushNotification #dailyUpdate
