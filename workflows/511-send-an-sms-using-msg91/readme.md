## Send an SMS using MSG91 - n8n Workflow

### Use cases:

*   **Send SMS notifications:** Trigger personalized SMS messages to users upon specific events, such as order confirmations, appointment reminders, or account updates.
*   **Implement two-factor authentication (2FA):** Use the workflow to send verification codes via SMS for enhanced security.
*   **Send marketing campaigns:**  Quickly dispatch promotional SMS messages to a list of recipients.

### How it works:

This n8n workflow is designed to send SMS messages using the MSG91 service.

1.  **Trigger:** The workflow is initiated manually by clicking the "Execute" button (the "On clicking 'execute'" node).
2.  **Send SMS:** The "Msg91" node takes the input from the trigger node.  It uses the configured MSG91 API credentials and the "to", "from", and "message" parameters to send the SMS.  **Note:** The "to", "from", and "message" parameters need to be populated with the recipient's phone number, sender ID, and message content, respectively, either directly in the node or via data passed from a previous node in a more complex workflow.  The MSG91 API credentials also need to be configured correctly.

### Services:

*   MSG91 (SMS API)

### Hashtags:

#n8n #automation #SMS #MSG91 #notifications
