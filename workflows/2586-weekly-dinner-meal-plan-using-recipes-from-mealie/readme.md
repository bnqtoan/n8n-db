# Mealie Meal Plan Generator

## Use cases:

- Automatically generate a weekly meal plan for dinners based on available recipes in a Mealie instance.
- Schedule the generation of meal plans for a specific day and time, ensuring a new plan is ready each week.
- Quickly create a meal plan for the upcoming days with a specified number of recipes, taking the burden out of manual planning.

## How it works:

1.  The workflow is triggered either manually or automatically every Friday at 8 PM.
2.  The "Config" node sets up configuration parameters like the Mealie base URL, the number of recipes to include in the plan, the number of days to offset the plan's start date, and the Mealie category ID.
3.  The "Get Recipes" node retrieves a list of recipes from the Mealie API, filtered by the specified category ID (if provided).
4.  The "Generate Random Items" node picks a random set of recipes from the retrieved list, based on the configured number of recipes. It then formats these recipes into a dinner meal plan with dates offset from the current date as specified in the config.
5.  The "Create Meal Plan" node sends a request to the Mealie API to create the meal plan with the generated recipes and dates.

## Services:

-   [Mealie](https://mealie.io/): A self-hosted recipe manager and meal planner.

## Hashtags:

#n8n #automation #mealie #mealplanning #recipes
