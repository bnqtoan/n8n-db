# The Easiest Way to Send SMS Worldwide

## Use cases:

- **Send SMS notifications:** Automatically send SMS messages for appointment reminders, order confirmations, or delivery updates.
- **Implement two-factor authentication:** Use SMS to send verification codes for enhanced security.
- **Run marketing campaigns:** Send promotional SMS messages to a list of contacts.

## How it works:

This workflow sends SMS messages via ClickSend API. Here's a step-by-step breakdown:

1.  **"When clicking ‘Test workflow’"**: This node triggers the workflow manually.
2.  **"Set SMS data"**: This node sets the SMS message content and recipient's phone number.  The message text and recipient number (including international prefix) are defined here.
3.  **"Send SMS"**: This node sends the SMS message using the ClickSend API. It retrieves the message content and recipient from the previous node.  The workflow uses HTTP Basic Authentication with your ClickSend username and API key. The workflow makes a POST request to the ClickSend API endpoint.

## Services:

-   **ClickSend API**: Used to send SMS messages.

## Hashtags:

#n8n #automation #SMS #ClickSend #notifications
