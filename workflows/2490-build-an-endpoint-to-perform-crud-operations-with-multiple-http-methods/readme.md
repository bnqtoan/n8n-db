# TEMPLATE - Multi Methods API Endpoint

## Use cases:

- **Customer Management:**  Create, retrieve, update, and delete customer records in an Airtable database via API calls. This can be used to integrate customer data with other systems.
- **Inventory Management:** Manage product inventory by creating new product entries, retrieving details of existing products, updating information like quantity and price, and deleting products that are no longer available.
- **Content Management:** Implement a basic CMS where you can add new articles, fetch specific articles, modify existing content, and remove outdated or irrelevant articles.

## How it works:

This workflow exposes an API endpoint to perform CRUD (Create, Read, Update, Delete) operations on an Airtable database named "customers" and table "Table 1". It uses Webhook nodes to listen for HTTP requests on specific paths and methods:

1.  **Webhook and Webhook (with ID) Nodes:** These nodes listen for incoming HTTP requests on the `/customers` and `/customers/:id` paths, respectively. The `:id` parameter allows for targeting specific records. They are configured to handle multiple HTTP methods (GET, POST, PUT, DELETE).
2.  **Airtable Nodes (Create, Get Single, Get All, Update, Delete):** These nodes interact with the Airtable API to perform the corresponding CRUD operations. They use the `airtableTokenApi` credential to authenticate.
    *   **Create:** Creates a new record in the Airtable table using data from the query parameters in the request.
    *   **Get Single:** Retrieves a single record from the Airtable table based on the `customer_id` passed in the URL.
    *   **Get All:** Retrieves all records from the Airtable table.
    *   **Update:** Updates an existing record in the Airtable table using data from the query parameters in the request, matching by `customer_id`.
		* 	**Delete:** Delete one record in the Airtable table based on the `id` passed in the URL.
3.  **Respond to Webhook Nodes:** These nodes send HTTP responses back to the client after the Airtable operation is completed. Different response codes (200, 201) are used to indicate success.

The flow is determined by the HTTP method used in the request:

*   **POST to /customers:** Creates a new customer record.
*   **GET to /customers:** Retrieves all customer records.
*   **GET to /customers/:id:** Retrieves a specific customer record by ID.
*   **PUT to /customers/:id:** Updates a specific customer record by ID.
*   **DELETE to /customers/:id:** Deletes a specific customer record by ID.

## Services:

*   Airtable

## Hashtags:

#n8n #automation #Airtable #API #CRUD
