# Daily Temperature SMS via Plivo

## Use cases:

- Receive a daily SMS message with the current temperature in a specific city.
- Get notified of the temperature at a specific time each day without manually checking weather apps.
- Use it as a basic weather alert system, expanding upon it to include alerts for specific temperature ranges.

## How it works:

This workflow automates the process of fetching the daily temperature and sending it via SMS. It starts with a `Cron` node that triggers the workflow at 9:00 AM. Then, the `OpenWeatherMap` node retrieves the current temperature in Berlin. Finally, the `Plivo` node sends an SMS message containing the temperature information.

1.  **Cron:** Triggers the workflow execution at 9:00 AM.
2.  **OpenWeatherMap:** Fetches the current weather data for Berlin from the OpenWeatherMap API.
3.  **Plivo:** Sends an SMS message via Plivo, including the temperature extracted from the OpenWeatherMap data.

## Services:

-   OpenWeatherMap API
-   Plivo API

## Hashtags:

#n8n #automation #weather #SMS #dailyUpdate
