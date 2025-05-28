# Create JSON-items

## Use cases:

*   **Data Transformation:** Transform a single JSON structure into multiple JSON items for further processing in a workflow.
*   **Data Preparation:** Prepare data from an API or database that returns a list within a single JSON object, making each item in the list accessible for individual actions.
*   **Looping over Data:** Enables iterating over an array of data within a larger JSON object to perform actions on each element, such as sending individual emails or updating separate database records.

## How it works:

1.  **Mock Data:** The "Mock Data" node is a Function node that generates a single JSON object containing an array of nested objects with `id` and `name` properties.
2.  **Create JSON-items:** The "Create JSON-items" node takes the output from the "Mock Data" node and transforms the nested array into a series of individual JSON items. This allows subsequent nodes in the workflow to process each object in the array separately.

## Services:

*   None (This workflow primarily uses n8n's built-in Function nodes)

## Hashtags:

#n8n #automation #JSON #dataTransformation #workflow
