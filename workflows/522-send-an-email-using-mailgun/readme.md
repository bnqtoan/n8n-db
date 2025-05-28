# n8n Workflow: Send Email via Mailgun

## Use cases:

*   **Simple Email Notifications:** Send quick email notifications to users or team members upon manual trigger, for example, when a specific event occurs that requires immediate attention.
*   **Testing Email Delivery:**  Quickly test email delivery configurations or Mailgun API credentials by manually triggering the workflow and sending a test email.

## How it works:

This workflow is triggered manually by clicking the "Execute" button in n8n. Upon execution, the workflow uses the Mailgun node to send an email. The email's content, subject, recipient, and sender are defined within the Mailgun node's parameters.

1.  **On clicking 'execute':** This node acts as the starting point. It triggers the workflow execution when manually activated.
2.  **Mailgun:** This node uses the Mailgun API to send an email. The "text" parameter defines the email body, "subject" specifies the email subject, "toEmail" sets the recipient's email address, and "fromEmail" defines the sender's email address.  The node uses credentials defined under the `mailgunApi` credential type.

## Services:

*   Mailgun

## Hashtags:

#n8n #automation #email #mailgun #notification
