# n8n Workflow: Weather-Based SMS Alert

## Use cases:

*   **Daily Weather Alert:** Send a daily SMS message if the "feels like" temperature is below a certain threshold, helping users decide what to wear.
*   **Real-time Cold Weather Warning:**  Trigger an SMS when the temperature drops unexpectedly, useful for people sensitive to cold weather or needing to prepare for sudden changes.
*   **Personalized Clothing Recommendation:** Based on temperature, give clothing recommendations (e.g., "Wear a sweater," "It's warm, wear light clothes").

## How it works:

This workflow checks the weather in Berlin, Germany, and sends an SMS message via Twilio if the "feels like" temperature is below 18°C.

1.  **Cron Trigger:** The workflow starts automatically based on a schedule defined in the "Cron" node (currently configured with default trigger times).
2.  **Get Weather Data:** The "OpenWeatherMap" node fetches weather data for Berlin, Germany, using the OpenWeatherMap API.  It uses the `Weather` credential to authenticate.
3.  **Conditional Check:** The "IF" node checks if the "feels_like" temperature from the OpenWeatherMap data is less than 18°C.
4.  **Send SMS (if cold):** If the temperature is below 18°C, the "Twilio" node sends an SMS message to a specified phone number. The message includes the current "feels like" temperature. The `Twilio` credential is used for authentication.
5.  **Do Nothing (if not cold):** If the temperature is not below 18°C, the workflow does nothing, as it is connected to a NoOp node.

## Services:

*   **OpenWeatherMap API:** Used to retrieve weather data.
*   **Twilio:** Used to send SMS messages.

## Hashtags:

#n8n #automation #weather #twilio #sms
