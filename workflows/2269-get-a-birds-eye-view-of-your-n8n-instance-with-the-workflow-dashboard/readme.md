# Workflow stats

## Use cases:

- **Monitor n8n instance health and usage:** Track the total number of workflows, active workflows, and trigger counts to understand the overall activity and load on the n8n instance.
- **Identify commonly used nodes:** Determine which nodes are used most frequently across workflows to optimize node selection and potentially identify areas for custom node development or improved documentation.
- **Manage and organize workflows:** Use tags to categorize workflows and quickly find related workflows based on specific features, projects, or teams.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via "Test workflow" or by an "Execute Workflow Trigger" node.
2.  **Fetch Workflows:** The "n8n-get-workflows" node retrieves all workflows from the n8n instance using the n8n API.
3.  **Extract Workflow Statistics:** The "get-nodes-via-jmespath" node extracts relevant information from each workflow, such as node types, tags, instance URL, and webhook paths, using JMESPath expressions. This information is stored in variables like `nodes_array`, `tags_array`, `instance_url`, and `webhook_paths_array`.
4.  **Create Workflow Statistics:** The "workflows-section" node prepares the main JSON object with the workflow statistics (number of nodes, unique nodes, a list of nodes and tags).
5.  **Process Nodes, Tags and webhooks:** The "nodes-section", "tags-section" and "webhook-section" code nodes iterates through all workflows to create a mapping between nodes, tags and webhooks to the workflows that use them. The code aggregates statistics about node usage, tag usage and webhooks. The nodes counts the number of workflows that use each node and their URLs. The tags counts the number of workflows that use each tag and their URLs.
6.  **Create Globals:** The "globals-section" node creates general instance information, such as the number of workflows, active workflows, and total trigger count.
7.  **Sort Nodes, Tags and Workflows:** The "Sort-nodes", "Sort-tags" and "Sort-workflows" node sort the list of nodes, tags and workflows based on defined criteria (e.g., by count and name).
8.  **Aggregate Nodes, Tags and Workflows:** The "Aggregate-nodes", "Aggregate-tags" and "Aggregate-workflows" node create arrays of all nodes, tags and workflows and their values to a single item.
9. **Combine Data:** The "Final-json" node combines the results from the "globals-section", "Aggregate-workflows", "Aggregate-nodes", "Aggregate-tags" and "Aggregate-whooks" nodes into a single JSON object.
10. **XML/HTML Conversion (Optional):**
    *   A separate section is used to generate a standalone dashboard:
        *   The "Request HTML dashboard" and "Request xsl template" triggers the flow
        *   The "Prepare JSON object" node executes the statistics generation to get the required data.
        *   The "Convert to XML" node converts the JSON data into XML format.
        *   The "Create HTML" node generates an HTML page that links to an XSL stylesheet.
        *   The "Move Binary Data" node converts the HTML to binary data.
        *   The "Respond to Webhook" node sends the HTML page as a response to a webhook.
        *   The "Template elements" and "Final template" generate the data for the XSL style sheet
11. **Output:** The workflow provides the overall n8n statistics, a list of nodes and tags with the workflows they are used in, and an optional standalone dashboard with the same information.

## Services:

*   n8n API (to retrieve workflow data)
*   Web browser (to display generated HTML dashboard)

## Hashtags:

#n8n #automation #workflow #monitoring #dashboard
