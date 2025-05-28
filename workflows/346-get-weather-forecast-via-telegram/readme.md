## Telegram Weather Workflow Readme

### Use cases:

*   **Get instant weather updates:** Users can send a message to a Telegram bot and receive the current weather conditions for a specific city.
*   **Personal weather assistant:**  Integrate this workflow into a personal Telegram bot to quickly check the weather without opening a weather app.

### How it works:

1.  **Telegram Trigger:** The workflow starts when a new message is received by the Telegram bot (using the Telegram Trigger node).
2.  **OpenWeatherMap:** The OpenWeatherMap node retrieves the current weather conditions for "berlin,de". It uses the provided OpenWeatherMap API credentials.
3.  **Telegram:**  Finally, the Telegram node sends a formatted message back to the user in Telegram. The message includes the current weather description, temperature, and "feels like" temperature. The chat ID is dynamically taken from the incoming message from the Telegram Trigger.

### Services:

*   Telegram (via Telegram Bot API)
*   OpenWeatherMap (via OpenWeatherMap API)

### Hashtags:

#n8n #telegram #weather #automation #bot
