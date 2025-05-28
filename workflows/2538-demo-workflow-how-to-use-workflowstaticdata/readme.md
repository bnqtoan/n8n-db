# Access Token Management with Static Data

## Use cases:

- **API Authentication:** Automatically refresh access tokens for APIs that require periodic re-authentication, ensuring uninterrupted service usage.
- **Data Synchronization:** Maintain a valid access token for synchronizing data between systems, such as pulling data from a CRM or pushing updates to a database.
- **Scheduled Tasks:** Ensure scheduled tasks have the necessary authorization by refreshing the access token before the task execution.

## How it works:

1.  **Trigger:** The workflow starts either via a **Webhook** or a **Schedule Trigger**.
2.  **Initialize Static Data:** The "1. initiate static data" Code node retrieves static data (accessToken and timestamp) using `$getWorkflowStaticData('global')`. If the `accessToken` or `timestamp` doesn't exist, it initializes them.
3.  **Check Token Validity:** The "if token is valid" If node checks if the current access token is still valid (not older than 1 minute).
4.  **Conditional Branching:**
    *   **Valid Token:** If the token is valid (within the 1-minute window), the workflow continues to the "continue with valid token" NoOp node.
    *   **Expired Token:** If the token is expired, the workflow proceeds to "get new accessToken" to obtain a new one.
5.  **Get New Access Token:** The "get new accessToken" HTTP Request node sends a request to `http://your-api.com` to fetch a new access token.  Make sure to configure the URL and any necessary authentication headers in this node.
6.  **Set Token in Static Data:** The "2. set token in static data" Code node extracts the `AccessToken` from the HTTP response and updates the static data with the new token and timestamp, making it available for subsequent workflow executions.
7.  **Continue Workflow:** After either using the existing valid token or refreshing to a new valid token, the workflow continues to the "continue with valid token" NoOp node for further processes.

## Services:

-   HTTP Request to `http://your-api.com` (or any configured API endpoint)

## Hashtags:

#n8n #automation #accessToken #API #staticData
