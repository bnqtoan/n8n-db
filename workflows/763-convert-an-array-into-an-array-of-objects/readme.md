# My Workflow

## Use cases

*   **Data transformation:** This workflow can be used to transform a single array of data into multiple individual data items, each wrapped in a `json` property.
*   **Data preparation for API calls:** It prepares data to be sent as individual requests to an API endpoint, ensuring each item is correctly formatted.

## How it works

1.  **Mock Data:** The "Mock Data" node generates a single JSON object containing an array of strings (e.g., `["item-1", "item-2", "item-3", "item-4"]`).
2.  **Function:** The "Function" node receives the array from "Mock Data". It iterates through the array. For each item in the array, it creates a new JSON object with a `data` property, assigning the current array item to the `data` property. Finally it outputs each item as single item.

## Services

*   None

## Hashtags

#n8n #automation #dataTransformation #json #workflow
