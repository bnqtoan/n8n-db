# Receive and analyze emails with rules in Sublime Security

## Use cases:

- **Automated Phishing Detection:** Automatically analyze incoming emails for phishing attempts based on predefined rules, especially useful when integrated with email platforms that forward flagged emails as .eml attachments to a dedicated inbox.
- **Security Alerting:** Receive real-time notifications in Slack about emails that match specific security rules, allowing security teams to quickly respond to potential threats.
- **Compliance Monitoring:** Ensure compliance with email security policies by automatically analyzing emails and reporting violations to the appropriate channels.

## How it works:

1.  **Email Trigger (IMAP):** The workflow starts by monitoring a designated email inbox (e.g., a phishing inbox) using the IMAP protocol. It fetches emails that arrive as .eml attachments. Alternatively, the workflow can be triggered manually.
2.  **IF email has attachment:** Check if the email contains an attachment.
    If no attachment is found, a message is sent to Slack
3.  **Move Binary Data:** Extracts the .eml attachment data and converts it into a JSON format compatible with the Sublime Security API.
4.  **Analyze email with Sublime Security:** The extracted email data is sent to the Sublime Security API for analysis. This API applies a set of predefined rules to the email and identifies potential security threats.
5.  **Split to matched and unmatched:** Splits the results from Sublime Security into two arrays, **matched** and **unmatched** based on each rule match.
6.  **Format the message:** Formats a message for Slack containing information about the number of matched rules and the names of the matched rules.
7.  **Slack:** Posts the formatted message to a specified Slack channel, providing security teams with immediate notifications about potential threats.
8.  **Notify about missing attachment:** Sends a message to Slack to inform about an email received without attachment

## Services:

-   **IMAP:**  For receiving emails (e.g., Outlook, Gmail)
-   **Sublime Security API:**  For analyzing email content against security rules.
-   **Slack API:**  For sending notifications and reports to Slack channels.

## Hashtags:

#n8n #automation #emailSecurity #phishing #slack #sublimesecurity
