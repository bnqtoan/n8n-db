# Aggregating data with the Merge node

## Use cases:

- **Inventory Management:** Determine which ingredients needed for a recipe are currently in stock by comparing a list of required ingredients with a list of available ingredients.
- **Recipe Enrichment:** Enhance a list of ingredients with corresponding quantities from a recipe list.
- **Data Combination:** Combine data from different sources, such as merging band member information from two bands into a single list.

## How it works:

This workflow demonstrates various use cases of the `Merge` node in n8n, showcasing how to combine data from different sources, similar to SQL joins.

1. **Data Input:** The workflow starts with an `On clicking 'execute'` trigger, which initiates the data flow. The workflow defines data using `Code` nodes to emulate two data sources.
2. **Inner Join (Ingredients in stock from recipe):** It filters a list of ingredients needed for a recipe (`A. Ingredients Needed`) to only include those that are also in stock (`B. Ingredients in stock`), using the `Merge` node in "combine" mode and merging by the "Name" field.
3. **Left Join (Merge recipe):** It enriches a list of ingredients (`A. Ingredients`) with the corresponding quantities from a recipe list (`B. Recipe quantities`), using the `Merge` node in "combine" mode with "enrichInput1" join mode and merging by the "Name" field.  This adds the quantity needed to each ingredient.
4. **Union All (Super Band):** The workflow merges the data of members from two bands (`A. Queen` and `B. Led Zeppelin`) into a single list using the `Merge` node.
5. **Output:** The results from each `Merge` node operation are available for further processing or output.

## Services:

- None. This workflow uses only n8n core nodes.

## Hashtags:

#n8n #automation #workflow #mergeNode #dataAggregation
