# Receive the weather information of any city

## Use cases:

*   **Respond to user requests:** Allow users to send a city name via a webhook and receive current weather information in response.
*   **Integrate weather data into applications:** Fetch weather details for a specific location and incorporate them into a website or application.
*   **Trigger alerts based on weather conditions:** Use the workflow to check weather conditions regularly and trigger actions based on temperature or description (requires adding logic for comparisons and notifications).

## How it works:

1.  The workflow starts with a **Webhook** node, configured to listen for incoming HTTP requests on a specific path. The path is `45690b6a-2b01-472d-8839-5e83a74858e5`. It extracts all entries and response mode is lastNode.
2.  The **OpenWeatherMap** node receives the city name from the webhook query parameter named `city`.  It then makes a request to the OpenWeatherMap API to retrieve weather data for the specified city.
3.  The **Set** node extracts the temperature (`main.temp`) and weather description (`weather[0].description`) from the OpenWeatherMap response and creates new data containing only these two fields.
4.  Finally the webhook responds with the data

## Services:

*   OpenWeatherMap API

## Hashtags:

#n8n #automation #weather #webhook #OpenWeatherMap
