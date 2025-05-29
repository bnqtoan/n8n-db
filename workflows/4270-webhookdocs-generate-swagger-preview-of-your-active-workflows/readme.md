# N8N Instance API Generator

## Use cases:

- **API Documentation Generation:** Automatically generate Swagger/OpenAPI documentation for your n8n workflows, making it easier for developers to understand and integrate with your APIs.
- **Centralized API Management:** Aggregate API definitions from multiple n8n workflows into a single, unified Swagger UI, providing a central point for managing and exploring your APIs.
- **Dynamic API Discovery:** Allow users to discover available API endpoints and their parameters directly from your n8n instance, improving API accessibility and usability.

## How it works:

1.  **Trigger:** The workflow is triggered by an HTTP request to the `/webhook/swagger` endpoint via the "Get Swagger" Webhook node.
2.  **Fetch Workflows:** The "n8n" node retrieves a list of all active workflows from your n8n instance using the n8n API.
3.  **Process Workflows & Webhooks:** The "Code" node iterates through each active workflow, identifies webhook nodes (nodes of type 'n8n-nodes-base.webhook') and their corresponding response nodes (nodes of type 'n8n-nodes-base.respondToWebhook').  It also extracts parameter definitions from the notes section of each webhook node using `@body` and `@query` tags. Finally, it constructs a Swagger/OpenAPI specification in YAML format. The host is dynamically extracted from the "Get Swagger" node header, with a fallback to `n8n.instance.com`.
4.  **Response:** The "Respond to Webhook" node returns an HTML page that uses Swagger UI to render the generated Swagger/OpenAPI definition. The HTML includes JavaScript to parse the YAML and display it in an interactive Swagger UI.

## Services:

-   n8n API: Used to retrieve workflow information.
-   Swagger UI: A user interface to visualize the OpenAPI specification.
-   js-yaml: A Javascript library to parse the YAML to JSON.

## Hashtags:

#n8n #automation #API #Swagger #OpenAPI
