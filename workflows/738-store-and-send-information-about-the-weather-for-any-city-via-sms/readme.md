# Weather Update via Webhook to Airtable and SMS

## Use cases:

*   **Real-time Weather Notifications:** Automatically sends weather updates via SMS to users when they submit their name, phone number, and city through a webhook.
*   **Data Collection and Weather Integration:** Collects user data (name, number, city) and stores it in Airtable while also enriching the data with corresponding weather information.
*   **Personalized Weather Alerts:** Delivers customized weather forecasts to users based on their location, ensuring they receive the most relevant information.

## How it works:

1.  **Webhook:** The workflow starts with a Webhook node that listens for incoming HTTP POST requests. It expects data in the request body containing the user's name, phone number, and city. Authentication uses HTTP Header Auth.
2.  **Set:** The Set node extracts the "name", "number", and "city" from the `body` of the webhook payload received from the Webhook node and set it as the output to be used for the next nodes.
3.  **Airtable:** The Airtable node appends the data (Name, Number, City) received from the Set node to a specified table ("Table 1") in Airtable.
4.  **OpenWeatherMap:** The OpenWeatherMap node fetches the current weather conditions for the city provided in the webhook payload.
5.  **Twilio:** The Twilio node sends an SMS message to the phone number provided in the webhook payload, containing a weather forecast fetched from OpenWeatherMap. The message includes the temperature, weather description, humidity, and wind speed.

## Services:

*   Airtable
*   OpenWeatherMap API
*   Twilio

## Hashtags:

#n8n #automation #weather #webhook #SMS
