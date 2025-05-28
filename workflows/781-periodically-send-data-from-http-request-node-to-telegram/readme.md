# Send a cocktail recipe every day via a Telegram

## Use cases:

*   **Daily Cocktail Inspiration:** Automatically send a new cocktail recipe with instructions and a photo to a Telegram group or channel every day.
*   **Personalized Recipe Service:** Provide a daily dose of cocktail ideas to subscribers, enriching their beverage repertoire.
*   **Automated Content for Telegram Channel:** Populate a Telegram channel with fresh and engaging content related to cocktails without manual effort.

## How it works:

This workflow is designed to send a random cocktail recipe daily via Telegram. Here's a breakdown:

1.  **Cron Node:** Triggers the workflow every day at 8 PM (20:00).
2.  **HTTP Request Node:** Sends a request to the CocktailDB API (`https://www.thecocktaildb.com/api/json/v1/1/random.php`) to retrieve a random cocktail recipe.
3.  **Telegram Node:** Sends a photo and instructions of the cocktail to a specified Telegram chat.  It extracts the photo URL (`strDrinkThumb`) and instructions (`strInstructions`) from the JSON response received from the CocktailDB API and uses them to create a Telegram message containing the photo and the instructions as a caption.  The `chatId` parameter specifies the Telegram chat to send the message to.

## Services:

*   [CocktailDB API](https://www.thecocktaildb.com/api.php): Used to fetch random cocktail recipes.
*   [Telegram](https://telegram.org/): Used to send the cocktail recipe and photo to a specified chat.

## Hashtags:

#n8n #automation #telegram #cocktail #recipe
