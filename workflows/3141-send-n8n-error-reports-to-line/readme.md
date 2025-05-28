# n8n Error Report to Line

## Use cases:

- **Real-time Error Notifications:** Receive instant alerts on your Line account when any of your n8n workflows fail, allowing for immediate troubleshooting.
- **Workflow Monitoring:** Keep track of the health of your n8n automations and quickly identify problematic workflows that require attention.
- **Automated Incident Response:** Automatically notify designated personnel via Line when critical workflows encounter errors, ensuring timely incident response.

## How it works:

This workflow is triggered when an error occurs in any other n8n workflow that is configured to use this as the error workflow.

1.  **Error Trigger:** The `Error Trigger` node activates when an error occurs in another n8n workflow.
2.  **HTTP Request:** Sends a POST request to the Line Messaging API to send a push notification to a specified user. The message includes the name of the workflow that failed and a URL to the execution details. You need to replace `<UID HERE>` with your Line user ID.

## Services:

-   Line Messaging API

## Hashtags:

#n8n #errorhandling #line #automation #notification
