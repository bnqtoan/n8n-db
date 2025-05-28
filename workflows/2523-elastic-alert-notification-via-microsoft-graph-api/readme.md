# PRISM Elastic Alert Notification Workflow

## Use cases:

- **Real-time Alerting:** Automatically receive email notifications when critical alerts are triggered in your PRISM Elastic system, ensuring immediate awareness of potential issues.
- **Customizable Notifications:** Tailor the email content with specific alert details like alert name, severity, timestamp, and message, providing recipients with comprehensive information.
- **Scheduled Monitoring:** Regularly check for new alerts based on a defined schedule and send out notifications, ensuring continuous monitoring of the Elastic system.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger node that periodically triggers the workflow execution based on a defined interval.
2.  **Get Elastic Alert:** The `Get Elastic Alert` node makes an HTTP request to your PRISM Elastic API endpoint to retrieve a list of alerts.
3.  **Response is not empty:** This IF node checks if the alert response is empty or not. If the alerts are empty the workflow stops.
4.  **Loop Over Each Alert Items:** The `Loop Over Each Alert Items` node iterates through each alert in the response.
5.  **Send Email Notification:** For each alert, the `Send Email Notification` node sends an email notification via Microsoft Graph API. The email includes details of the alert, such as the alert name, severity, timestamp, and the full alert message.
6.  **No Operation:** No Operation nodes are present to mark the end of workflow.

## Services:

-   **PRISM Elastic API:** The workflow fetches alerts from your custom PRISM Elastic API endpoint.
-   **Microsoft Graph API:** The workflow uses Microsoft Graph API to send email notifications via configured Outlook 365 account.

## Hashtags:

#n8n #automation #elastic #alerting #microsoftgraphapi
