# Send an SMS using the Mocean node

## Use cases:

*   **Send SMS notifications:** Automatically send SMS messages for various events, such as order confirmations, appointment reminders, or critical system alerts.
*   **Two-factor authentication:** Implement SMS-based two-factor authentication for enhanced security.
*   **Marketing campaigns:** Send targeted SMS messages for marketing promotions and announcements.

## How it works:

This workflow is triggered manually. Upon execution, it sends an SMS message using the Mocean node. The Mocean node requires you to input the recipient's phone number, sender's ID (or phone number), and the message content. Make sure to configure the Mocean API credentials before running the workflow.

1.  **On clicking 'execute':** This node triggers the workflow manually.
2.  **Mocean:** This node sends the SMS message using the Mocean API. It requires the recipient's phone number, sender's information, and the message to be sent.

## Services:

*   Mocean API

## Hashtags:

#n8n #automation #SMS #Mocean #notifications
