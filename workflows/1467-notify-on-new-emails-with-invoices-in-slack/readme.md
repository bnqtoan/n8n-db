# New invoice email notification

## Use cases:

*   **Automated Invoice Processing:** Automatically process invoices received via email, extract key information, and notify relevant teams without manual data entry.
*   **High-Value Invoice Alert:** Immediately alert finance managers when high-value invoices arrive in the inbox, enabling prompt review and approval.
*   **Team Notifications:** Notifies a dedicated Slack channel with the details of every new invoice received.

## How it works:

1.  **Check for new emails:** The workflow starts by checking for new emails in a specified Gmail inbox ("Inbox").
2.  **If email body contains invoice:** Checks if the email body contains the word "invoice" (case-insensitive).
3.  **Extract the total amount:** If the email contains an invoice, the Mindee node extracts the total amount, and other relevant information from the attached invoice document.
4.  **If Amount > 1000:**  If the invoice amount is greater than 1000, the workflow executes a specific branch.
5.  **Send email to finance manager:** If the invoice is over 1000 it sends a notification email to the finance manager with a pre-defined message.
6.  **Send new invoice notification:** A notification containing extracted information and a link to the original email is sent to a Slack channel.

## Services:

*   Gmail (via IMAP)
*   Mindee Invoice Parser
*   Slack
*   Mailtrap (SMTP Server)

## Hashtags:

#n8n #automation #invoiceprocessing #emailautomation #slacknotification
