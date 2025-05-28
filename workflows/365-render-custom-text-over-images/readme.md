## Cocktail Recipe Sharing Workflow

This workflow automates the process of fetching a random cocktail recipe, generating a visually appealing image with the recipe details, and sharing it on a Rocket.Chat channel.

### Use cases:

*   **Weekly Cocktail Recommendation:** Automatically shares a new cocktail recipe every Friday evening to inspire users to try new drinks.
*   **Content Creation for Social Channels:** Use the generated image for posting on other social media platforms to engage your audience with interesting cocktail recipes.
*   **Internal Team Engagement:** Share cocktail recipes within a company's Rocket.Chat channel to foster a fun and engaging environment.

### How it works:

1.  **Cron Trigger:** The workflow starts with a Cron node that triggers the workflow every Friday at 6 PM.
2.  **HTTP Request:**  An HTTP Request node calls the "TheCocktailDB" API to fetch a random cocktail recipe in JSON format.
3.  **Bannerbear:** The Bannerbear node takes the data from the HTTP Request node (cocktail name, image URL, and recipe instructions) and uses it to populate a Bannerbear template. The image URL, cocktail name, and recipe instructions are dynamically injected into the template using modifications. The workflow waits for the image generation to complete.
4.  **Rocket.Chat:**  The Rocket.Chat node then posts the generated image URL from Bannerbear as an attachment to a specified Rocket.Chat channel.

### Services:

*   [TheCocktailDB API](https://www.thecocktaildb.com/api.php):  A free API for accessing cocktail recipes.
*   [Bannerbear](https://www.bannerbear.com/):  A service for automating image and video generation.
*   [Rocket.Chat](https://rocket.chat/): An open-source team communication platform.

### Hashtags:

#n8n #automation #cocktail #recipe #rocketchat #bannerbear
