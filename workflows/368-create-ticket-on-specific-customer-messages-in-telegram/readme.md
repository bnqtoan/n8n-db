## n8n Workflow: Telegram to Freshdesk and Monday.com

### Use cases:

1.  **Automated Customer Support Ticketing:** Automatically create support tickets in Freshdesk based on specific keywords (e.g., "refund") received in Telegram messages.
2.  **Telegram Message to Project Board:** Automatically creates item in Monday.com from Telegram messages.
3.  **Instant Acknowledgement of Customer Requests:** Send automated responses to users on Telegram, confirming receipt of their messages and setting expectations.

### How it works:

1.  **Telegram Trigger:** The workflow starts when a new message is received in a Telegram chat.
2.  **IF Condition:** The workflow checks if the Telegram message contains the word "refund".
3.  **Freshdesk Integration:**
    *   **Refund Path:** If the message contains "refund", a new ticket is created in Freshdesk with the "refund" tag and the Telegram message content as the subject.
    *   **Complaint Path:** If the message does not contain "refund", a new ticket is created in Freshdesk with the "complaint" tag and the Telegram message content as the subject.
4.  **Telegram Response:** An automatic response is sent back to the user via Telegram, acknowledging their message.  The response varies based on the path the workflow took.
5.  **Monday.com Integration:** Create new item in Monday.com with the subject of Freshdesk for refund path and Telegram message for complaint path.

### Services:

*   Telegram
*   Freshdesk
*   Monday.com

### Hashtags:

#n8n #automation #telegram #freshdesk #mondaycom #customersupport
