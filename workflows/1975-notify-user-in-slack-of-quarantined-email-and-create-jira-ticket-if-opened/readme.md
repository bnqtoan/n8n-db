# Notify_user_in_Slack_of_quarantined_email_and_create_Jira_ticket_if_opened

## Use cases

- **Automated Security Alerts:** Notify users via Slack when an email they received has been quarantined due to potential security threats.
- **Incident Management:** Automatically create a Jira ticket when a user opens a quarantined email, ensuring security incidents are tracked and addressed promptly.
- **Enhanced Security Awareness:** Inform users about the reasons for email quarantine and provide instructions on how to proceed if they believe the email is safe.

## How it works

1.  **Receive Sublime Security Alert:** The workflow starts when Sublime Security sends a webhook alert indicating a potentially malicious email has been detected and quarantined. This node is triggered by a webhook from Sublime Security when a defined rule is triggered.
2.  **Get message details in Sublime Security:** The workflow uses the `messageId` from the webhook to query Sublime Security's API for detailed information about the email, including sender, subject, and recipient.
3.  **Lookup slack user by email:** The workflow extracts the recipient's email address and attempts to find the corresponding Slack user ID using the Slack API.
4.  **User found?:** Checks if a Slack user was found with the email of the recipient of the quarantined email.
5.  **Found, notify user:** If a Slack user is found, a message is sent to the user explaining that an email has been quarantined, providing details like sender and subject, and instructing them to contact IT if they believe the email is safe.
6.  **has email been opened?:** The workflow checks if the email has been opened by the recipient before quarantine.
7.  **Yes, prep flaggedRules table:** If the email was opened, a code node prepares a table of flagged rules from Sublime Security to include in the Jira ticket.
8.  **Jira Software:** A Jira ticket is created with details about the quarantined email, including the flagged rules, email information, and a notification to the recipient.
9.  **No, do nothing:** If the email was not opened before quarantine, this node does nothing.
10. **Not Found, Do Nothing:** If the user was not found in Slack, this node does nothing.

## Services

-   **Sublime Security:** Used for email scanning, threat detection, and quarantine.
-   **Slack:** Used to notify users about quarantined emails.
-   **Jira:** Used for incident tracking and management (creating tickets for opened quarantined emails).

## Hashtags

#n8n #automation #security #slack #jira
