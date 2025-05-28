# Auto - Resume Disabled Workflows

## Use cases:

- **Automatically restart workflows that have been unintentionally disabled.** Useful for ensuring critical processes continue running without manual intervention, especially after system updates or unexpected errors that might deactivate workflows.
- **Implement a self-healing mechanism for scheduled tasks.** If a scheduled workflow fails and becomes disabled, this workflow can automatically re-enable it within a defined timeframe, improving reliability.
- **Maintain uptime for essential integrations.** For workflows that integrate different services and are crucial for business operations, this automation ensures they are promptly reactivated if they stop running, minimizing disruptions.

## How it works:

1.  **Trigger:** The workflow starts either manually (using the "When clicking 'Test workflow'" node) or on a schedule (every 4 hours, as defined in the "Schedule Trigger" node).
2.  **Get Auto Resume Workflows:** It uses the "Get Auto Resume Workflows" node to retrieve a list of all workflows tagged with `auto_resume:true` from your n8n instance using the n8n API.
3.  **Find Deactivated Workflows:** The "Find Deactivated Workflows" node filters the retrieved workflows, identifying those that are currently inactive (i.e., `$json.active` is false).
4.  **Activate Workflow:** For each deactivated workflow found, the "Activate Workflow" node uses the n8n API to reactivate it, using the workflow's ID (`$json.id`).

## Services:

-   n8n API (for retrieving and activating workflows)

## Hashtags:

#n8n #automation #workflow #autorecovery #selfhealing
