# Netlify Deploy Failed Notification to Slack

## Use cases:

*   **Real-time Failure Alerts:** Immediately notify a team channel when a Netlify deploy fails, enabling swift investigation and resolution.
*   **Automated Error Reporting:** Automatically post error messages and deploy links to a Slack channel for centralized monitoring.
*   **Improve Deployment Reliability:** Proactively identify and address deployment issues to minimize downtime and ensure site stability.

## How it works:

1.  The workflow starts with the "Netlify Trigger" node, which listens for `deployFailed` events from a specified Netlify site (`ab52947e-a696-4498-a5a1-fae7fbe30c84`).
2.  When a deploy fails, the trigger receives data about the event, including the site name, error message, and deploy ID.
3.  The "Slack" node then formats and sends a message to the `#general` Slack channel. The message includes:
    *   An alert indicating a deploy failure.
    *   The name of the Netlify site.
    *   The error message associated with the failure.
    *   A direct link to the deploy details on Netlify.

## Services:

*   Netlify
*   Slack

## Hashtags:

#n8n #netlify #slack #deployment #automation
