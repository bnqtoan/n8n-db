# What To Eat

## Use cases:

- **Automated Meal Planning:**  Get a selection of recipe ideas delivered to your inbox daily, based on dietary preferences, calorie limits, and time constraints.  This simplifies meal planning and introduces variety.
- **Dietary Restriction Management:**  Receive recipes that adhere to specific dietary restrictions (e.g., gluten-free, vegan, low-carb) and health considerations (e.g., alcohol-free, sugar-conscious) automatically.
- **Recipe Discovery Based on Ingredients:**  Discover new recipes using a specific ingredient you have on hand (e.g., "chicken") while adhering to calorie and time limitations.

## How it works:

This workflow automates the process of finding and emailing recipes based on user-defined criteria.

1.  **Cron:** Triggers the workflow execution at a specified time (10:00 AM in this case) every day.
2.  **Search Criteria:**  Defines the search parameters for recipes, including the desired number of recipes (`RecipeCount`), ingredient count (`IngredientCount`), calorie range (`CaloriesMin`, `CaloriesMax`), preparation time (`TimeMin`, `TimeMax`), diet (`Diet`), health considerations (`Health`), and the main ingredient (`SearchItem`). It also stores the Edamam API credentials (`AppID`, `AppKey`).
3.  **Set Query Values:**  Formats the calorie and time values into a range and randomly selects diet and health options if "RANDOM" is specified.
4.  **Retrieve Recipe Counts:**  Fetches the total number of recipes available for the given search criteria from the Edamam API.  This initial request uses `from=1` and `to=2` to minimize the response size, as it primarily needs the `count` value.
5.  **Set Counts:** Extracts the total recipe count and the desired number of recipes to return from the API response.
6.  **Set Recipe ID Values:** Randomly determines the `from` and `to` parameters for the subsequent recipe retrieval request. This is done to randomize the recipes returned within the possible range based on the `RecipeCount`.
7.  **Retrieve Recipes:**  Retrieves a list of recipes from the Edamam API based on the formatted search parameters and the randomized `from` and `to` values.
8.  **Create Email Body in HTML:**  Extracts the recipe labels and share URLs from the API response and formats them into an HTML unordered list.
9.  **Send Recipes:**  Sends an email containing the formatted HTML list of recipes to the specified email address, using the defined subject line.

## Services:

-   **Edamam API:** Used to search for and retrieve recipe information based on specified criteria.
-   **Email (SMTP):** Used to send the generated recipe list to the user.

## Hashtags:

#n8n #automation #recipe #mealplanning #edamam
