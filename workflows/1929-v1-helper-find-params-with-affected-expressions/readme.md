# v1 helper - Find params with affected expressions

## Use cases:

1.  **Post-Upgrade Validation:** After upgrading to n8n v1, use this workflow to identify potentially affected workflows due to changes in expression extensions like `beginningOf`, `endOfMonth`, `minus`, and `plus`. This helps ensure your existing workflows continue to function as expected.
2.  **Proactive Maintenance:** Regularly run this workflow to detect any workflows that might be using the specified expression extensions and require adjustments or updates.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "Execute Workflow" button.
2.  **Fetch Active Workflows:** The "n8n" node retrieves all active workflows from your n8n instance using the n8n API.
3.  **Identify Affected Parameters:** The "Find params with affected expressions" Code node iterates through each active workflow and its nodes. It searches for parameters that use expressions containing the extensions `beginningOf`, `endOfMonth`, `minus`, or `plus`.  If any of these extensions are found within a parameter's expression, the node extracts the workflow name, node name, and parameter name and returns these details.

## Services:

*   n8n API

## Hashtags:

#n8n #automation #workflow #v1upgrade #expressionExtension
