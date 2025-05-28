# Mattermost Cocktail Recommendation Workflow

## Use cases:

*   **Random Cocktail Suggestion in Mattermost:** Automatically suggest a random cocktail with instructions and an image to a specific Mattermost channel based on a trigger from a Mattermost webhook.
*   **Interactive Bot Command:** Configure a Mattermost slash command to trigger this workflow and provide cocktail suggestions on demand.
*   **Daily Cocktail Inspiration:** Schedule a cron job to trigger the webhook at a specific time each day, delivering a new cocktail idea to the team.

## How it works:

1.  **Webhook (POST):** Listens for POST requests on the `/webhook` path. It's likely intended to be triggered by a Mattermost webhook.  The workflow extracts the `channel_id` from the incoming webhook's `body`.
2.  **HTTP Request:** Makes a GET request to "https://www.thecocktaildb.com/api/json/v1/1/random.php" to retrieve a random cocktail recipe in JSON format.
3.  **Mattermost:** Sends a message to a specific Mattermost channel using the Mattermost API. The message includes:
    *   The name of the cocktail.
    *   The instructions on how to prepare the cocktail.
    *   The recommended glass to serve it in.
    *   An image of the cocktail.
    The `channelId` is dynamically taken from the Webhook node's input.

## Services:

*   [TheCocktailDB API](https://www.thecocktaildb.com/api.php): Used to fetch random cocktail recipes.
*   [Mattermost](https://mattermost.com/): Used for sending messages to a specific channel.

## Hashtags:

#n8n #mattermost #automation #cocktail #webhook
