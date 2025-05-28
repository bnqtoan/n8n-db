## n8n Workflow: Simple Email Sender with AWS SES

This workflow automates sending emails via AWS Simple Email Service (SES).

### Use cases:

*   **Simple Notification System:** Send automated email notifications for various events, such as successful process completion or error alerts.
*   **Basic Contact Form Submission:** Trigger an email to a designated recipient when a form is submitted, confirming receipt.
*   **Quick Email Blast:**  Send the same email to a list of recipients for announcements or updates.

### How it works:

1.  The workflow is initiated manually using the "On clicking 'execute'" trigger node.
2.  The "AWS SES" node sends an email using the AWS Simple Email Service. The email's body is set to "This is a sample message body in an email", the subject to "n8n Rocks", the sender address to "n8n@n8n.io", and the recipients to "user@example.com" and "user2@example.com". It utilizes pre-configured AWS credentials.

### Services:

*   **AWS SES (Simple Email Service):** Amazon's cloud-based email sending service.

### Hashtags:

#n8n #automation #email #AWSSES #notification
