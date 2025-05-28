# Customer Data to JSONPlaceholder

## Use cases:

- **Data Synchronization:** Periodically synchronize customer data from a custom datastore to a mock API (like JSONPlaceholder) for testing or development purposes.
- **Batch Processing for API Testing:** Simulate sending customer data to an external API endpoint in batches to test the API's performance and error handling.
- **Data Transfer with Transformation:** Transfer customer information to a different system, transforming the data format as required by the destination API.

## How it works:

1.  **Manual Trigger:** The workflow starts when triggered manually using the "On clicking 'execute'" node.
2.  **Fetch Customer Data:** The "Customer Datastore" node retrieves all customer records from a custom data source.
3.  **Batch Processing:** The "SplitInBatches" node divides the retrieved customer data into batches of one record each.
4.  **HTTP Request (POST):** For each batch (customer record), an HTTP POST request is sent to the `https://jsonplaceholder.typicode.com/posts` endpoint.  The request body includes the `id` and `name` of the customer.
5. **Wait:** The workflow waits for 4 seconds.
6.  **Placeholder Node:** The "Replace Me" node currently serves as a placeholder; further actions can be added here (e.g., logging, error handling, or additional data processing).

## Services:

*   JSONPlaceholder (https://jsonplaceholder.typicode.com/) - A free fake API for testing and prototyping.
*   Customer Datastore (Presumably a custom data storage solution defined by n8nTrainingCustomerDatastore)

## Hashtags:

#n8n #automation #API #dataSynchronization #batchProcessing
