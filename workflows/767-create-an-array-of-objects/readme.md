# Create an array of objects

## Use cases:

*   **Data Aggregation:** Consolidate data from multiple sources or iterations into a single array for easier processing or storage.
*   **API Request Preparation:**  Format data into an array of objects to meet the expected structure of an API request that accepts a list of items.
*   **Batch Processing:** Group individual data entries into batches for efficient processing in subsequent nodes, reducing the number of operations.

## How it works:

1.  **Mock Data Node:** This node generates a predefined set of JSON objects, each containing an `id` and a `name`. This simulates data coming from a previous step or data source.
2.  **Create an array of objects Node:** Takes the output from the "Mock Data" node (which is a list of individual items) and transforms it into a single object containing a `data_object` property. The value of the `data_object` property is an array containing each of the original JSON objects.

## Services:

*   None (This workflow uses only n8n's built-in Function nodes)

## Hashtags:

#n8n #automation #dataaggregation #array #javascript
