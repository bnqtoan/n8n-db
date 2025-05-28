# Workflow: Error Notification via Mailgun

This workflow automatically sends email notifications via Mailgun when an error occurs in another n8n workflow.

## Use cases:

*   **Real-time Error Monitoring:** Immediately receive email alerts when a workflow fails, enabling quick response and troubleshooting.
*   **Automated Debugging:** Provide developers with detailed error messages and stack traces directly in their inbox.
*   **Proactive Issue Resolution:** Identify and address workflow problems before they impact critical processes.

## How it works:

1.  The workflow starts with an "Error Trigger" node. This node is automatically activated when an error occurs in any other workflow within n8n.
2.  The "Error Trigger" node captures the error message, stack trace, and workflow name.
3.  The "Mailgun" node receives the error information.
4.  The "Mailgun" node formats the error information into an email subject and body. The email includes the error message and the stack trace, which helps with debugging.  It also includes the workflow name, helping to identify which workflow triggered the error.
5.  The "Mailgun" node sends the email to the specified recipient using your Mailgun account. **Note:** You need to configure the "Mailgun" node with your Mailgun API credentials and specify the recipient and sender email addresses.

## Services:

*   Mailgun (for sending email notifications)

## Hashtags:

#n8n #automation #errorhandling #mailgun #monitoring
