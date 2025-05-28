# Slack Error Notifier

## Use cases:

- **Real-time Error Alerts:** Immediately notify a Slack channel when an n8n workflow execution fails, allowing for prompt investigation and resolution.
- **Workflow Monitoring:** Keep a constant watch over critical n8n workflows by receiving automated alerts whenever errors occur. This helps in maintaining the stability and reliability of automated processes.
- **Debugging Assistance:** Quickly access the execution URL from the Slack message to jump directly into the n8n interface and debug the failed workflow.

## How it works:

This workflow is triggered by the "Error Trigger" node, which automatically activates when an error occurs in any connected n8n workflow. Upon an error, the "Error Trigger" node passes the error information to the "Slack" node. The "Slack" node then sends a message to a specified Slack channel, including the workflow name that failed and a direct link to the execution within n8n for immediate debugging.

## Services:

- Slack

## Hashtags:

#n8n #automation #errorhandling #slack #workflow
