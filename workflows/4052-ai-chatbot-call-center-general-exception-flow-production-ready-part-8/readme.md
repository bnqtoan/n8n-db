# 👻 Exception Flow

## Use cases:

- **Real-time Error Notification:** Immediately receive alerts in a designated Slack channel whenever an n8n workflow encounters an error, allowing for prompt investigation and resolution.
- **Workflow Monitoring:** Keep track of workflow stability by logging and analyzing error messages, enabling proactive identification of recurring issues or problematic nodes.
- **Demo Environment Error Handling:** During demonstrations or testing phases, ensure that any unexpected workflow failures are instantly communicated to the development or support team via Slack.

## How it works:

This workflow is designed to notify users via Slack when another workflow fails.

1.  **Error Trigger:** The workflow starts with an `Error Trigger` node, which automatically activates when any other workflow in the n8n instance encounters an error.
2.  **👻 Exception Alert (Slack):** The `Error Trigger` passes the error information to the `👻 Exception Alert` node. This node is configured to send a message to a specific Slack channel (`#demo-n8n-error`). The message includes:
    *   An emoji and text indicating an exception has occurred in DEMO
    *   The name of the workflow that failed.
    *   A URL to the execution details of the failed workflow.
    *   The specific error message.

## Services:

-   Slack

## Hashtags:

#n8n #automation #errorhandling #slack #workflow
