# Error Notification to Slack

## Use cases:

*   **Real-time Error Alerting:** Immediately notify a dedicated Slack channel when a critical workflow fails, enabling rapid response and troubleshooting.
*   **Workflow Monitoring:** Keep track of workflow stability and identify recurring issues by receiving notifications for each failed execution.
*   **Proactive Issue Resolution:** Provide context-rich error messages in Slack to help developers quickly understand the cause of failures and implement fixes.

## How it works:

1.  The workflow starts with the "On Error" trigger node. This node automatically activates when any other workflow in n8n encounters an error and has this workflow set as its error workflow.
2.  The "Set message" node formats a custom error message using the data from the failed workflow execution. This message includes:
    *   A warning indicator.
    *   The name of the failed workflow.
    *   A link to the failed execution in n8n.
    *   The name of the node where the error occurred.
    *   The error message itself.
3.  The formatted message is then sent to a specified Slack channel using the "Slack" node. The Slack node uses credentials to authenticate with Slack and post the message to the defined channel.

## Services:

*   Slack

## Hashtags:

#n8n #automation #errorhandling #slack #workflow
