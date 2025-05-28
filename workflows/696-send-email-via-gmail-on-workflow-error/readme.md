# n8n Workflow Failure Notification via Gmail

## Use cases:

*   **Real-time Error Monitoring:** Immediately notify a designated recipient (e.g., an administrator or developer) when an n8n workflow fails, allowing for prompt investigation and resolution.
*   **Automated Incident Reporting:** Automatically generate error reports containing crucial debugging information, such as the workflow name, error message, last executed node, and stack trace, for streamlined troubleshooting.

## How it works:

This workflow is triggered by an "Error Trigger" node which activates when any error occurs within n8n. Upon triggering, the "Gmail" node sends an email notification to the specified recipient (`recipient@email.com`). The email includes the following information extracted from the error event:
    *   Workflow Name
    *   Error Message
    *   Last Node Executed
    *   Execution URL (for direct access to the failed execution in n8n)
    *   Stack Trace (for detailed debugging information)

## Services:

*   Gmail

## Hashtags:

#n8n #automation #errorhandling #gmail #workflow
