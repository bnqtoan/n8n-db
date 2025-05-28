# WhatsApp Starter Workflow

## Use cases:

*   **Basic WhatsApp Bot:** Automatically responds to incoming messages with a pre-defined message, acting as a simple echo bot.
*   **Webhook Verification:** Handles the initial webhook verification process required by the Meta for Developers platform for WhatsApp integrations.
*   **Message Forwarding (Simple):**  Can be extended to forward specific messages to other services or users based on message content (not implemented in this version, but easily added).

## How it works:

1.  **Webhook Verification (Verify Node):**
    *   The workflow starts with a "Webhook" node (named "Verify") configured to listen for GET requests on a specific path (`/1fea1f5f-81c0-48ad-ae13-41e0f8e474ed`).  This node is used by Meta to verify the webhook URL during setup.
    *   The "Respond to Webhook" node then extracts the `hub.challenge` parameter from the query string of the GET request and sends it back as the response. This confirms the webhook URL to Meta.
2.  **Message Handling (Respond Node):**
    *   The second "Webhook" node (named "Respond") listens for POST requests on the same path. This node receives the actual WhatsApp messages and status updates from Meta.
    *   The "Is message?" node is an "If" node that checks if the incoming JSON data contains a user message. It looks for the existence of `body.entry[0].changes[0].value.messages[0]`.
    *   If a message exists, the workflow proceeds to the "Echo the message back" node.
3.  **Echoing the Message:**
    *   The "Echo the message back" node uses the WhatsApp API node to send a message back to the user.
    *   It constructs a message that includes the original message's content: "Echo back: [original message]".
    *   The response is sent to the phone number from which the original message was received.

## Services:

*   WhatsApp Business API (via Meta for Developers)

## Hashtags:

#n8n #whatsapp #automation #webhook #chatbot
