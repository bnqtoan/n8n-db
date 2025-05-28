# Error Handler send Telegram

## Use cases

-   Receive instant Telegram notifications when an n8n workflow encounters an error, allowing for immediate troubleshooting.
-   Centralize error reporting for multiple n8n workflows into a single Telegram channel, improving monitoring efficiency.
-   Provide detailed error information, including workflow name, timestamp, execution URL, last executed node, and error message, directly in Telegram.

## How it works

This workflow is designed to send error notifications to a Telegram channel when an error occurs in another n8n workflow.

1.  **Error Trigger:** The workflow starts with an "Error Trigger" node, which is activated when another n8n workflow configured to use this workflow for error handling fails.
2.  **Config:** The "Config" node uses a "Set" node that contains the Telegram chat ID, where the error notification will be sent.
3.  **Telegram:** The "Telegram" node receives the error data from the "Error Trigger" and the telegram chat ID from the "Config" node. It formats the error message, including the workflow name, timestamp, execution URL, last node executed, and the error details, and sends it to the specified Telegram chat ID.
    \*Note the error message is formatted in HTML.

## Services

-   Telegram Bot API

## Hashtags

#n8n #automation #workflow #errorhandling #telegram
