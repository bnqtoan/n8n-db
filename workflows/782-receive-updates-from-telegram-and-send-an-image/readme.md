# Receive updates from Telegram and send an image of a cocktail

## Use cases:

*   **Fun Telegram Bot:** Create a Telegram bot that entertains users by sending them a random cocktail image and name whenever they send a message.
*   **Interactive Group Chat:** Enhance a Telegram group chat by automatically responding to messages with a random cocktail suggestion, making the interaction more engaging.
*   **Cocktail Inspiration:** Get a daily dose of cocktail inspiration by setting up a trigger (e.g., time-based) to receive a new cocktail image and name in a Telegram channel.

## How it works:

1.  **Telegram Trigger:** The workflow starts with a "Telegram Trigger" node that listens for new messages in a Telegram chat. It is configured to listen for the "message" update type.
2.  **HTTP Request:** When a new message is received, the "HTTP Request" node sends a GET request to "https://www.thecocktaildb.com/api/json/v1/1/random.php". This retrieves a random cocktail recipe in JSON format.
3.  **Telegram:** The "Telegram" node then sends a photo to the Telegram chat where the initial message was sent. The photo URL is extracted from the JSON response of the cocktail API (`drinks[0]["strDrinkThumb"]`). The message also include the cocktail name (`drinks[0]["strDrink"]`) as caption, and replies to the original message that triggered the workflow.

## Services:

*   Telegram API
*   TheCocktailDB API

## Hashtags:

#n8n #TelegramBot #Automation #Cocktail #API
