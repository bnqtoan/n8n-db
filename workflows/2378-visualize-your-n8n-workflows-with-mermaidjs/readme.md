# Workflow dashboard with mermaid.js

## Use cases:

- **Visualizing n8n Workflows:** Generate Mermaid.js diagrams of n8n workflows to understand their structure and data flow quickly.  Useful for documentation, debugging, and sharing workflow designs with others.
- **Dashboard Overview:** Create a dashboard displaying all workflows in an n8n instance, allowing users to browse and select workflows to view their diagrams.
- **Dynamic Documentation:** Embed workflow diagrams in documentation or internal wikis, ensuring that the visual representation of workflows is always up-to-date.

## How it works:

1.  **Trigger:** The workflow can be triggered either manually using "When clicking ‘Test workflow’" or via a webhook call to the "Webhook" node.
2.  **Routing:** The "Switch" node checks if a `wfid` (workflow ID) is provided in the query parameters. If a `wfid` parameter is given, it will request the single workflow. If the`wfid` parameter isn't present it will load all the workflows.
3.  **Fetch Workflows:**
    *   **List workflows:** "List workflows" node fetches all workflows from the n8n instance using the n8n API.
    *   **Single workflow:** "Single workflow" node fetches a particular workflow from the n8n instance using the n8n API.
4.  **Prepare Data:** The "Prepare workflow list" node gets the name and id and restructures the workflow data into a simplified object: `{"id": workflowId, "name": workflowName}`. The "Aggregate" node aggregates all workflow objects.
5.  **Generate Mermaid Chart:** The "Code" node takes the workflow data and converts it into a Mermaid.js flowchart diagram using JavaScript code.  It iterates through the nodes and connections, creating the Mermaid syntax based on node types, names, and connection relationships. Disabled nodes are displayed with a strike-through.
6.  **Configuration:** The "CONFIG" node will extract the `instance_url` and `webhook_path` in order to construct the URLs for n8n.
7.  **Respond:**
    *   **Respond with Mermaid:** The "Respond with Mermaid" node returns the generated Mermaid.js code as plain text with a "Content-Type: text/plain" header.  This is used when requesting a single workflow diagram.
    *   **Send Page:** The "Send Page" node responds with an HTML page.  This page contains JavaScript code that:
        *   Fetches workflow data and the base URL to the instance.
        *   Dynamically creates cards for each workflow in the dashboard.
        *   When a user clicks "Show Workflow", it fetches the Mermaid.js diagram from the webhook endpoint and renders it using the Mermaid.js library.

## Services:

-   n8n API: Used to fetch workflow data (names, IDs, structure).
-   Mermaid.js: Used to render the workflow diagrams in the browser.

## Hashtags:

#n8n #automation #workflow #mermaidjs #dashboard #visualization
