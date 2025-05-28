# Forward Netflix emails to multiple email addresses with GMail and Mailjet

## Use cases:

*   **Family Netflix Sharing:** Automatically forward Netflix subscription emails (like new content announcements, billing statements, or profile updates) to all family members who share the account, keeping everyone informed.
*   **Group Subscription Management:** If a group of friends shares a Netflix account, this workflow can forward important Netflix communications to all participants, ensuring transparent management of the subscription.
*   **Centralized Notification System:** Create a central notification system for any subscription-based service that sends emails, ensuring that all relevant parties receive the information, even if the primary account holder is unavailable.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a "Gmail Trigger" node that monitors a specified Gmail inbox for emails from `netflix.com`. It includes spam/trash to avoid missing important updates.
2.  **Set all recipients:** The node "Set all recipients"  defines an array of recipient email addresses. You'll need to replace the example emails with the actual email addresses of the people you want to forward the Netflix emails to.
3.  **Split Out recipients:** The "Split Out recipients" node splits the array of recipients into individual items, creating a separate workflow execution for each recipient. This makes it easy to send a personalized email to each recipient.
4.  **Mailjet:** For each recipient, the "Mailjet" node sends an email using the Mailjet service. The email's HTML content, text content, and subject are extracted from the original Netflix email. The `toEmail` is dynamically set to the current recipient from the "Split Out recipients" node. You'll also need to configure the `fromEmail` with a valid sender address from your Mailjet account.

## Services:

*   **Gmail:** Used to monitor for incoming emails from Netflix.
*   **Mailjet:** Used to send the forwarded emails to the specified recipients.

## Hashtags:

#n8n #automation #emailforwarding #Netflix #Mailjet
