# Send daily weather updates via a message in Line

## Use cases:

- **Daily Weather Briefing:** Users can receive a daily weather update directly in their Line messaging app every morning, helping them plan their day accordingly.
- **Automated Weather Alerts:**  Configure the workflow to send alerts when specific weather conditions are met (e.g., temperature below a certain threshold).

## How it works:

This workflow automates the process of fetching daily weather information and sending it to a Line messaging app.

1.  **Cron Node:** Triggers the workflow execution at 9:00 AM every day.
2.  **OpenWeatherMap Node:** Retrieves the current weather data for Berlin from the OpenWeatherMap API.  It specifically fetches the current temperature.
3.  **Line Node:** Sends a message to your Line account with the formatted temperature information. The message includes a greeting and the temperature in Celsius.

## Services:

-   **OpenWeatherMap API:** Fetches weather data for a specified city.
-   **Line API (via n8n Line Node):** Sends messages to a Line account.

## Hashtags:

#n8n #automation #weather #line #dailyupdates
