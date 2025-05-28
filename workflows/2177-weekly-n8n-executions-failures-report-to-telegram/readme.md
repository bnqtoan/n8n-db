# Weekly Failures Report

## Use cases:

- **Proactive Monitoring:** Automatically receive a weekly summary of failed workflow executions, enabling quick identification and resolution of issues.
- **Reduced Downtime:** Identify recurring failures and address underlying problems to prevent future disruptions and maintain stable automation processes.
- **Team Collaboration:** Share the report with relevant team members (developers, system admins) via Telegram for collaborative troubleshooting.

## How it works:

This workflow checks for past executions of a specified n8n workflow and compiles a list of failures that occurred within the last 7 days.

1.  **Schedule Trigger:** The workflow is triggered on a weekly schedule.
2.  **Get all previous executions:** Retrieves all executions of a specified workflow from the n8n instance.  *Important*: You need to configure n8n credentials here and select the workflow you want to monitor.
3.  **Filter for executions of the week:** Filters the executions to only include those that started in the last 7 days and that did not finished successfully (failed).
4.  **Set a message for each failed execution:** Creates a message for each failed execution, including the workflow name, execution ID, and start date.  The message also contains markdown links to easily access the execution logs.
5.  **Aggregate all messages:** Combines all the individual failure messages into a single message.
6.  **Telegram:** Sends the aggregated message via Telegram.  *Important*: Configure Telegram credentials and the chat ID to send the report to.

## Services:

-   n8n: Used to retrieve execution data via the n8n API.
-   Telegram: Used to send the weekly failure report.

## Hashtags:

#n8n #automation #workflow #monitoring #errorreporting
