## n8n Workflow: Mailjet Email Sent Trigger

This workflow triggers when an email is sent through Mailjet.

**Use cases:**

*   **Analytics Tracking:** Automatically record email sending events to a database or spreadsheet for performance monitoring and analysis.
*   **Real-time Notifications:** Receive instant notifications in Slack or another messaging app when an email is sent, allowing for immediate awareness of email activity.
*   **Post-Send Actions:** Trigger follow-up workflows based on email sending events, such as updating contact records or sending personalized confirmations.

**How it works:**

The workflow starts with the "Mailjet Trigger" node, which listens for the "sent" event from Mailjet. This means the workflow will be executed every time an email is successfully sent via your Mailjet account (configured with the provided credentials). Currently, the workflow only contains the trigger and no further steps are defined. To make this workflow useful, you would need to add additional nodes to process the triggered event data, for example, to send a notification or save the data to a database.

**Services:**

*   Mailjet

**Hashtags:**

*   #n8n
*   #automation
*   #Mailjet
*   #email
*   #trigger
