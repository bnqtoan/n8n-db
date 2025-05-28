# Store the data received from the CocktailDB API in JSON

## Use cases:

*   **Daily Cocktail Inspiration:** Automatically fetch a random cocktail recipe every day and store it in a JSON file for future reference or to display on a digital screen in a bar.
*   **Building a Local Cocktail Database:**  Regularly retrieve random cocktail recipes and store them in individual JSON files to create a local repository for offline access or further analysis.
*   **Scheduled Content Generation:** Use the workflow to generate content snippets for social media or blog posts about different cocktails, with the JSON file serving as input for other workflows.

## How it works:

This workflow retrieves a random cocktail recipe from the CocktailDB API and saves it as a JSON file.

1.  **On clicking 'execute':** The workflow starts manually when the "Execute Workflow" button is pressed.
2.  **HTTP Request:**  An HTTP request is made to the CocktailDB API endpoint (`https://www.thecocktaildb.com/api/json/v1/1/random.php`) to fetch a random cocktail recipe in JSON format.
3.  **Move Binary Data:** Converts the JSON response from the API into binary data, making it suitable for file writing.
4.  **Write Binary File:** Writes the binary data to a file named `cocktail.json` on the n8n server.

## Services:

*   TheCocktailDB API

## Hashtags:

#n8n #automation #cocktail #api #json
