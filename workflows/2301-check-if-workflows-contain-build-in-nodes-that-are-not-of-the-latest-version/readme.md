# Workflow Node Version Checker

## Use cases:

- **Identify outdated nodes in n8n workflows:**  This workflow helps users quickly find nodes in their n8n workflows that are using older versions, allowing them to update to the latest versions for improved performance, bug fixes, and new features.
- **Ensure consistency across multiple workflows:** By scanning all workflows, this tool enables users to maintain a consistent node version across their n8n instance, reducing the risk of compatibility issues and ensuring all workflows benefit from the latest updates.
- **Pre-emptive maintenance:**  Before upgrading n8n, users can run this workflow to identify potential issues arising from node version changes, allowing them to address them proactively and avoid disruptions.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Set Instance URL:** The "instance base url" node sets the base URL of your n8n instance. This is required to fetch the available node types and their latest versions from the n8n API.
3.  **Get Node Types:** The "get node types" node makes an HTTP request to the n8n API (`/types/nodes.json`) to retrieve a list of all available node types and their current versions.  It uses a predefined n8n API credential for authentication.
4.  **Extract Name and Latest Version:** The "extract name and latest version" node processes the node types data and extracts the name and latest version for each node type.
5.  **Aggregate:** The "Aggregate" node combines the node type data into a single item for easier processing in subsequent nodes.
6.  **Get All Workflows:** The "get all workflows" node fetches all workflows from the n8n instance using the n8n API.
7.  **Split Out:** The "Split Out" node iterates through each node within each workflow, extracting the node's name, id and type.
8.  **Conditional Check (If):** The "If" node checks if a node is outdated based on two conditions:
    *   If it can find the node from the array of all nodes.
    *   If the node's current version (`typeVersion`) is less than the latest version available.
9.  **Node Names That Need Update:** The "node names that needs update" node is where the outdated node's information is stored.
10. **Summarize:** The "Summarize" node groups the outdated nodes by workflow, creating a summary of outdated nodes for each workflow.
11. **Prettify Output:** The "prettify output" node formats the output to provide a clear list of outdated nodes for each workflow.

## Services:

-   n8n API: Used to fetch node types and workflow data.

## Hashtags:

#n8n #automation #workflow #nodeversion #maintenance
