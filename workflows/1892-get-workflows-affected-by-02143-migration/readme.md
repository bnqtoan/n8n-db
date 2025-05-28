# Workflow to Identify Potentially Affected Workflows After n8n Upgrade to 0.214.3

## Use cases:

-   **Post-Upgrade Audit:**  After upgrading n8n to version 0.214.3, use this workflow to automatically identify workflows that may have been incorrectly re-wired due to changes in how multi-output nodes were handled.
-   **Proactive Issue Detection:** Regularly run this workflow to detect potential problems caused by the upgrade before they impact critical processes, ensuring data integrity and workflow reliability.
-   **Troubleshooting and Remediation:** When workflows exhibit unexpected behavior after the upgrade, this workflow helps pinpoint the potentially problematic nodes, guiding users to inspect and correct the connections.

## How it works:

This workflow automates the process of identifying n8n workflows that might have been affected by a specific issue introduced in n8n version 0.214.3 related to nodes with multiple outputs (e.g., `If`, `Switch`, `Compare Datasets`).

1.  **Get all workflows:** The "Get all workflows" node retrieves all workflows from your n8n instance using the n8n API.
2.  **Webhook:** The "Webhook" node listens for a specific path `affected-workflows`.
3.  **Parse potentially affected workflows:** The "Parse potentially affected workflows" code node analyzes each workflow to find nodes that have multiple outputs and checks if their connections might have been affected by the upgrade.  It compares configured outputs to the number of configured connections for `If`, `Switch`, and `Compare Datasets` nodes. It returns the workflows names and nodes that need inspection.
4.  **Generate Report:** The "Generate Report" node takes the data from the previous node and generates a basic HTML report.
5.  **Serve HTML Report:**  The "Serve HTML Report" node uses the output from the "Generate Report" node to send an HTML response back to the webhook trigger.  It also includes JavaScript to parse the JSON output of the code node and dynamically generate a list of affected workflows with links to each workflow in the n8n instance.

## Services:

-   n8n API (used to retrieve workflow data)

## Hashtags:

#n8n #automation #workflow #upgrade #migration
