# Cocktail Recipe Translator

## Use cases:

*   **Automatic translation of cocktail recipes:** Automatically translates cocktail preparation instructions from English to French. This can be useful for sharing recipes with a wider audience who may not be fluent in English.
*   **Multilingual recipe database:** Can be integrated into a larger system that manages a database of cocktail recipes in multiple languages.

## How it works:

1.  **HTTP Request:** The workflow starts with an HTTP Request node that fetches a random cocktail recipe from the CocktailDB API (`https://www.thecocktaildb.com/api/json/v1/1/random.php`).
2.  **DeepL Translation:** The DeepL node receives the response from the HTTP Request node. It extracts the `strInstructions` field (the cocktail preparation instructions) from the JSON data of the API response. These instructions are then translated from English to French using the DeepL API. The translated instructions become the output of the workflow.

## Services:

*   [TheCocktailDB API](https://www.thecocktaildb.com/api.php): A free API for accessing cocktail recipes.
*   [DeepL API](https://www.deepl.com/api.html): A translation API for translating text between languages.

## Hashtags:

#n8n #automation #cocktail #recipe #translation
