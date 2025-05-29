# Forward Filtered Gmail Notifications to Telegram Chat

## Use cases:

- **Real-time Security Alerts:** Receive immediate Telegram notifications when Gmail receives security-related alerts (e.g., "Suspicious Login Attempt" or "Security Breach").
- **Server Monitoring:** Get notified on Telegram if a server goes down based on email alerts containing "Server Down" in the subject.
- **Urgent Task Management:** Ensure you don't miss critical emails marked as "Urgent" by receiving immediate notifications on Telegram, even when away from your inbox.

## How it works:

1.  **Incoming Email Monitor:** The workflow starts with the "Incoming Email Monitor" node, which automatically checks your Gmail inbox for new emails every minute.
2.  **Email Validation Check:**  The "Email Validation Check" node filters incoming emails. It checks if the email subject contains either "Urgent" OR "Server Down". If either of these keywords are present, the workflow continues.
3.  **Send Telegram Message:** If the email passes the filter, the "Send Telegram Message" node extracts the sender's email, subject, and a snippet of the message body. It then formats this information into a message and sends it to your specified Telegram chat.

## Services:

-   Gmail
-   Telegram

## Hashtags:

#n8n #automation #gmail #telegram #notifications
