# Send Log to BetterStack

## Use cases

*   Centralized Logging: Collect and forward log messages from various n8n workflows to BetterStack for unified monitoring and analysis.
*   Error Tracking: Automatically send error messages from your workflows to BetterStack, enabling real-time error detection and debugging.
*   Customizable Logging Levels: Assign different log levels (e.g., error, warning, info) to messages, allowing you to prioritize and filter logs in BetterStack.

## How it works

The workflow is designed to receive log messages and send them to BetterStack. It can be triggered in two ways:

1.  **From another workflow:** Using the "Execute Workflow" node, the workflow receives `level` and `message` as inputs.
2.  **As a standalone workflow:** It can be manually triggered for testing or embedded into a single workflow.

Here's the sequence of actions:

1.  **Recieve log message:** (Execute Workflow Trigger) - Receives the log message and its level from another workflow or manual trigger.
2.  **Send Log to BetterStack:** (HTTP Request) - Sends a POST request to the BetterStack Logs endpoint, including the `message` and `level` in JSON format. The request uses HTTP Header Authentication to authorize with BetterStack.

## Services

*   BetterStack Logs: A log management platform for collecting, analyzing, and monitoring logs.

## Hashtags

#n8n #automation #BetterStack #logging #workflow
