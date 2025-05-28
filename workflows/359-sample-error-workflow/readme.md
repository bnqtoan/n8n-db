## Workflow Readme

This readme describes the functionality of the n8n workflow designed to send error notifications via Mattermost and Twilio.

**Use cases:**

*   **Real-time error alerts:** Immediately notify the development or operations team when an n8n workflow encounters an error.
*   **Workflow monitoring:** Keep track of workflow health and proactively address issues before they escalate.
*   **Centralized error reporting:**  Consolidate error notifications from multiple n8n workflows into a single Mattermost channel and via SMS.

**How it works:**

1.  The `Error Trigger` node activates whenever any workflow in n8n encounters an error.
2.  The `Error Trigger` node captures details about the error, including the workflow's name, ID, and the last executed node.
3.  The `Mattermost` node sends a formatted message containing the error information to a specified Mattermost channel.  The message includes the workflow name, workflow ID and the last node that was executed before the error.
4.  The `Twilio` node then sends an SMS message with similar information about the error to a configured phone number.  This message contains the workflow's name and ID.

**Services:**

*   **Mattermost:**  Used for sending error notifications to a team communication channel.
*   **Twilio:**  Used for sending SMS notifications about errors.

**Hashtags:**

#n8n #automation #errorhandling #monitoring #notifications
