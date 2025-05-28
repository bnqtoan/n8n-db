# Translate cocktail instructions using LingvaNex

## Use cases:

*   **Automatic translation of cocktail recipes:**  Ideal for bartenders or cocktail enthusiasts who want to access recipes in their native language, expanding their knowledge and offerings.
*   **Multilingual cocktail recipe website or app:**  Integrate this workflow into a platform to automatically translate cocktail instructions, catering to a global audience.
*   **Learning a new language through cocktail recipes:** Use it as a fun and engaging way to learn new vocabulary and sentence structures in another language.

## How it works:

1.  The workflow starts with a "On clicking 'execute'" node, which triggers the workflow manually.
2.  An "HTTP Request" node fetches a random cocktail recipe from the "https://www.thecocktaildb.com/api/json/v1/1/random.php" API.
3.  The "LingvaNex" node receives the cocktail instructions ( `{{$node["HTTP Request"].json["drinks"][0]["strInstructions"]}}` ) from the "HTTP Request" node and translates it into Italian ("it\_IT") using the LingvaNex API.

## Services:

*   [TheCocktailDB API](https://www.thecocktaildb.com/api.php):  A free API for cocktail recipes.
*   [LingvaNex API](https://lingvanex.com/en/translation-api/): A translation API used to translate the cocktail instruction.

## Hashtags:

#n8n #automation #translation #cocktail #LingvaNex
