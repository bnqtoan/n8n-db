# My Workflow

## Use cases:

- **Receive Weather Updates via Webhook:** Trigger the workflow by sending a GET request to the specified webhook URL with a city parameter to receive current weather information for that city.
- **Integrate Weather Data into Chatbots:** Use the workflow to fetch weather data and incorporate it into chatbot responses, providing users with real-time weather updates within a conversational interface.
- **Personalized Weather Notifications:** Adapt the workflow to send personalized weather notifications to users based on their location or preferred cities.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a GET request is sent to the `/weather` webhook endpoint. The incoming data from the webhook is stored in the `data` property.
2.  **Set City:** Extracts the city name from the `query` parameter of the webhook's request. If the `query` parameter is missing, defaults to `berlin,de`.
3.  **OpenWeatherMap Request:** Uses the city name from the previous step to make a request to the OpenWeatherMap API to retrieve weather data. The API key needs to be configured in the credential settings.
4.  **Create Response:** Formats the response to include the current temperature, "feels like" temperature and city name.
5.  **Respond to Webhook:** The formatted weather data is sent back as the response to the original webhook request.

## Services:

-   OpenWeatherMap API

## Hashtags:

#n8n #automation #weather #webhook #openweathermap
