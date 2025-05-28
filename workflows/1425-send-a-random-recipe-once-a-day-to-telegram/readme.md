# Vegan Recipe Bot

## Use cases:

-   **Daily Recipe Delivery:** Automatically sends a daily vegan recipe to users via Telegram.
-   **New User Onboarding:** Welcomes new Telegram bot users and immediately sends them a recipe.
-   **Personalized Recipe Recommendations:** Tailors recipe delivery based on user preferences or tags (currently set to vegan).

## How it works:

1.  **Trigger:** The workflow is triggered in two ways:
    *   **Cron:** A Cron node triggers the workflow daily to send recipes to existing users.
    *   **Telegram Trigger:** A Telegram Trigger node listens for new users joining the bot.

2.  **New User Flow (Telegram Trigger):**
    *   **Fetch User Data:** The "Telegram Trigger" node captures the new user's chat ID and first name.
    *   **Check if User Exists:** It checks if the user's chat ID already exists in an Airtable table.
    *   **Welcome Message:** Sends a welcome message to the new user with the first recipe.
    *   **Add User to Airtable (if not exists):** If the chat ID is not in Airtable, the workflow adds the user's chat ID and name to the Airtable table.

3.  **Daily Recipe Flow (Cron):**
    *   **Get Chat IDs from Airtable:** An Airtable node retrieves a list of chat IDs from a specified Airtable table.
    *   **Fetch Recipe from API:** An HTTP Request node fetches a random vegan recipe from the Spoonacular API.
    *   **Send Recipe Photo:** Sends the recipe photo to the user's chat ID via Telegram.
    *   **Send Recipe URL:** Sends the recipe title and source URL to the user via Telegram.

## Services:

-   **Telegram:** Used for sending messages, photos, and receiving user interactions.
-   **Airtable:** Used as a database to store chat IDs of users who have subscribed to the bot.
-   **Spoonacular API:** Used to fetch random vegan recipes.

## Hashtags:

#n8n #automation #telegrambot #veganrecipes #recipebot
