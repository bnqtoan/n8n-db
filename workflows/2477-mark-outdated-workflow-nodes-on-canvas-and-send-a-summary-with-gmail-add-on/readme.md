# Addon for Workflow Nodes Update Check Template

## Use cases:

- **Automated Node Version Updates:** Automatically identify and flag workflows containing outdated nodes, ensuring n8n instances run efficiently with the latest features and security patches.
- **Proactive Maintenance:** Enable administrators to proactively update workflows, minimizing potential errors or compatibility issues caused by using older node versions.
- **Notification System:** Send summary emails to users, notifying them of workflows that require attention due to outdated nodes.

## How it works:

1.  **Trigger:** The workflow is triggered by the output of another workflow (Check if workflows contain build in nodes that are not of the latest version - <https://n8n.io/workflows/2301-check-if-workflows-contain-build-in-nodes-that-are-not-of-the-latest-version/>) via the "Execute Workflow Trigger" node.  This parent workflow provides a list of workflows with outdated nodes.
2.  **Data Preparation:** The `Start Reference` node serves as a starting point and passes the data received from the trigger workflow.
3.  **Settings:** The `Settings` node defines critical parameters such as the n8n instance base URL, a symbol to mark outdated nodes (default: ⚠️), whether to consider only major version changes, and whether to add new nodes to the canvas.
4.  **Get Workflow:** The `Get Workflow` node fetches the complete workflow data from n8n using the workflow ID provided by the trigger workflow.
5.  **Modify Workflow (if required):** This node uses JavaScript code to identify outdated nodes within the fetched workflow data.  Based on the defined settings, it either prepends a symbol to the names of outdated nodes or add a newer version. Connections of renamed nodes are updated to ensure workflow integrity.
6.  **Update Workflow:** The `Update Workflow` node updates the workflow in n8n with the modified data (if any changes were made).
7.  **Prepare Output:** The `Prepare Output` node formats the output, creating a link to each updated workflow using the `instanceBaseUrl` defined in the `Settings` node.
8.  **Send Summary:** The `Send Summary` node sends an email summarizing the workflows that contain outdated nodes.  It uses the Gmail node to send the email, listing the linked workflows in an HTML unordered list.

## Services:

-   n8n API
-   Gmail

## Hashtags:

#n8n #automation #workflow #nodeUpdates #maintenance
