# Weather Data from City Name

## Use cases:

- **Personal Weather Dashboard:** Display current weather conditions for a city entered through a web form or application.
- **Real-time Weather Alerts:** Integrate with other services to trigger alerts based on specific weather conditions (e.g., high wind speed, humidity).
- **Smart Home Automation:** Adjust smart home settings (e.g., turn on AC, close windows) based on weather data fetched for a specific city.

## How it works:

1.  **Webhook:** The workflow starts with a Webhook node, which listens for incoming HTTP requests at a specified path (`/39f1b81f-f538-4b94-8788-29180d5e4016`). This node expects to receive a JSON payload that includes a `city` field within the `body`.
2.  **OpenWeatherMap:** Upon receiving a request, the "OpenWeatherMap" node uses the city name extracted from the Webhook's JSON payload to fetch current weather data from the OpenWeatherMap API. The API key is stored in n8n credentials named "open-weather-map".
3.  **Set:** The "Set" node then extracts specific weather information from the OpenWeatherMap API response, including temperature, humidity, wind speed, weather description, and combined city and country. It creates new keys for the extracted data.

## Services:

-   OpenWeatherMap API

## Hashtags:

#n8n #weather #automation #openweathermap #webhook
