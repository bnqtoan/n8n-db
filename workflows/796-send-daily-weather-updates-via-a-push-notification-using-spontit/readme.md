# Send daily weather updates via a push notification using Spontit

## Use cases:

- **Daily Weather Briefing:**  Automatically send a daily weather update to your mobile device every morning to help you plan your day.
- **Personalized Weather Alerts:** Use it to receive weather updates for a specific city of your choice.

## How it works:

This workflow automates the process of sending daily weather updates to your phone using push notifications via Spontit. Here's a breakdown:

1.  **Cron:** The `Cron` node triggers the workflow at 9:00 AM every day.
2.  **OpenWeatherMap:** The `OpenWeatherMap` node fetches the current weather data for Berlin.  It uses your OpenWeatherMap API credentials to connect to the service.
3.  **Spontit:** The `Spontit` node sends a push notification to your device via Spontit. The notification includes a personalized message with the current temperature, retrieved from the `OpenWeatherMap` node.  It uses your Spontit API credentials to connect to the service.

## Services:

-   OpenWeatherMap (API)
-   Spontit (Push Notification Service)

## Hashtags:

#n8n #automation #weather #pushnotifications #spontit
