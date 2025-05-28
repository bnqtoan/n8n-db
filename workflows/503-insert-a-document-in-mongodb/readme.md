## n8n Workflow: Simple Data Storage to MongoDB

This workflow automates the process of storing a predefined key-value pair into a MongoDB database.

### Use cases:

*   **Simple Data Logging:** Quickly log specific data points (e.g., configuration settings, status flags) to a MongoDB database for later analysis.
*   **Testing and Prototyping:** Insert sample data into a MongoDB collection to test database connectivity or application logic during development.

### How it works:

1.  **Trigger:** The workflow starts manually when the "On clicking 'execute'" node is triggered within the n8n editor.
2.  **Set Value:** The "Set" node defines a key-value pair. In this case, it sets the key `my_key` to the value `my_value`.
3.  **Insert into MongoDB:** The "MongoDB" node takes the key-value pair from the "Set" node and inserts it as a document into the `n8n-collection` collection within the configured MongoDB database. The `mongodb_credentials` credential is used for authentication.

### Services:

*   **MongoDB:** A NoSQL database used for storing the key-value pair.

### Hashtags:

#n8n #MongoDB #Automation #Database #DataStorage
