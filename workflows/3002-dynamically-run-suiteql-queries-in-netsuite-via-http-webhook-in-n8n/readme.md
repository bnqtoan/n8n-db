# NetSuite Rest API workflow

## Use cases:

*   **Data Extraction and Reporting:** Automatically extract data from NetSuite using SuiteQL queries and use it for custom reporting in external tools or dashboards.
*   **Real-time Data Synchronization:** Triggered by a webhook, the workflow can synchronize data between NetSuite and other systems whenever specific events occur (e.g., a new customer is created).
*   **Ad-hoc Data Retrieval:** Execute SuiteQL queries on demand via the "Test workflow" trigger to quickly retrieve specific data from NetSuite for analysis or troubleshooting.

## How it works:

1.  **Trigger:** The workflow starts either manually using the "When clicking ‘Test workflow’" node or automatically via a "Webhook" node. The Webhook node listens for incoming HTTP requests at the specified path.
2.  **NetSuite Query:** The "NetSuite" node executes a SuiteQL query against your NetSuite account. The query is defined in the node's parameters and can be dynamically constructed using data from the trigger node (`{{ $json.query.suiteql }}`).
3.  **Data Retrieval:** The "NetSuite" node retrieves the data resulting from the SuiteQL query.
4.  **Output/Response:** If triggered by the Webhook node, the workflow returns all entries. Otherwise, if triggered manually, the data is available in n8n for further processing or viewing.

## Services:

*   NetSuite: The workflow connects to a NetSuite account and executes SuiteQL queries.

## Hashtags:

#n8n #NetSuite #SuiteQL #Automation #DataIntegration
