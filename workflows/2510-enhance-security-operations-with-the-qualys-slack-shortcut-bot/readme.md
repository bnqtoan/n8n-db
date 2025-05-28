# Qualys Slack Shortcut Bot

## Use cases:
- **Initiate Vulnerability Scans:** Directly trigger a Qualys vulnerability scan from Slack using a simple command, streamlining security operations.
- **Generate Security Reports:** Create and retrieve detailed Qualys security reports from Slack, providing quick access to scan results and findings.
- **Automated Security Notifications:** Receive real-time updates and reports in Slack channels, ensuring prompt responses to potential security threats.

## How it works:

1.  **Slack Webhook Trigger:** The workflow is initiated via a Slack slash command or event, captured by the "Webhook" node.
2.  **Parse Webhook Data:** The "Parse Webhook" node extracts relevant data from the Slack request, like the `trigger_id` and `callback_id`.
3.  **Route Message:** The "Route Message" node determines the type of request (vulnerability scan, report generation, or submission) based on the `callback_id` from Slack.
4.  **Display Modal Popup:**
    - For Vulnerability Scan: the "Vuln Scan Modal" node sends a request to Slack API to open a modal asking for the scan title, option profile, and asset groups. The "Respond to Slack Webhook - Vulnerability" node sends a response to the webhook.
    - For Report Generation: the "Scan Report Task Modal" node sends a request to Slack API to open a modal asking for the report title, template, and output format. The "Respond to Slack Webhook - Report" node sends a response to the webhook.
5.  **Close Modal Popup:** The "Close Modal Popup" node sends a response to Slack to close the modal after the user submits the data.
6.  **Route Submission:** The "Route Submission" node determines which process to follow based on modal title.
7.  **Set Variables:**
    - For Vulnerability Scan: the "Required Scan Variables" node extracts the `option_title`, `scan_title`, and `asset_groups` from the modal.
    - For Report Generation: the "Required Report Variables" node extracts the `report_title`, `output_format`, and `template_name` from the modal.
8.  **Execute Sub-workflows:**
    - For Vulnerability Scan: the "Qualys Start Vulnerability Scan" node executes a sub-workflow with the parameters from the previous step.
    - For Report Generation: the "Qualys Create Report" node executes a sub-workflow with the parameters from the previous step.
9.  The Sub-workflows will manage the Qualys connection.

## Services:

*   Slack API
*   Qualys API (via sub-workflows)

## Hashtags:

#n8n #automation #slack #qualys #vulnerabilityscanning
