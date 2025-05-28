## n8n Workflow: Send SMS via sms77

### Use cases:

*   **Send instant notifications:** Trigger an SMS notification whenever a specific event occurs, such as a database update, a new customer signup, or a critical system alert.
*   **Automated reminders:** Schedule SMS reminders for appointments, payments, or deadlines to improve engagement and reduce missed events.

### How it works:

This workflow is designed to send an SMS message using the sms77 service.  It begins with a Manual Trigger node, which, when executed, initiates the workflow. This trigger then activates the Sms77 node. The Sms77 node is configured with the message "Hello from n8n!". To make it work, you need to configure your sms77 API credentials. When the workflow runs, it will use these credentials and the message content to send an SMS via sms77.

### Services:

*   sms77

### Hashtags:

#n8n #automation #SMS #sms77 #notifications
