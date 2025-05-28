# My Workflow

## Use cases:

- **Real-time error notification:** Immediately get notified via Telegram when any of your n8n workflows fail, allowing you to quickly investigate and resolve issues.
- **Workflow monitoring:** Use this workflow as a centralized error handler for multiple workflows, providing a single point of contact for all error notifications.
- **Automated incident reporting:** Automatically log workflow failures to a designated Telegram chat for tracking and analysis of workflow stability.

## How it works:

This workflow is designed to be triggered when another workflow fails. Here's how it works:

1. **On Error:** This node is triggered automatically when an error occurs in another n8n workflow that has been configured to use this workflow as its error handler. It captures the error information.
2. **Set message:** This node constructs a message containing details about the failed workflow, including its name and a link to the execution log.  The message format is "⚠️ Workflow `[workflow name]` failed to run! [execution]([execution URL])".
3. **Telegram:** This node sends the formatted error message to a specified Telegram chat ID. It uses the Telegram API credentials to authenticate and send the message.

## Services:

- Telegram: Used for sending error notifications.

## Hashtags:

#n8n #automation #errorhandling #telegram #workflow
