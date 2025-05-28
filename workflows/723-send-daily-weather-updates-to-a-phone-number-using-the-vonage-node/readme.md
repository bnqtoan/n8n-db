# Send daily weather updates to a phone number using the Vonage node

## Use cases:

*   **Daily Weather Notifications:** Send a daily weather forecast to your phone every morning.
*   **Automated Weather Alerts:**  Configure the workflow to send SMS alerts when the weather conditions meet specific criteria (e.g., temperature below a certain threshold).

## How it works:

This workflow automates the process of sending daily weather updates to a specified phone number using Vonage.

1.  **Cron:** The workflow is triggered daily at 9 AM based on the cron settings.
2.  **OpenWeatherMap:** The OpenWeatherMap node fetches the current weather data for Berlin. It retrieves information such as temperature.
3.  **Vonage:** The Vonage node then sends an SMS message to the specified phone number. The message includes a personalized greeting and the current temperature fetched from OpenWeatherMap.

## Services:

*   Vonage
*   OpenWeatherMap API

## Hashtags:

#n8n #automation #weather #sms #vonage
