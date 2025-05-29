# Automated WhatsApp Messaging via KlickTipp

## Use cases:

- **Personalized Offer Delivery:** Send personalized offers, discounts, or product information via WhatsApp when a contact is tagged in KlickTipp, enhancing marketing campaign reach and engagement.
- **Subscription Management:** Automatically subscribe users to specific KlickTipp lists based on their WhatsApp interactions, streamlining contact management and ensuring accurate opt-in/opt-out status.
- **Automated Support Response:** Provide immediate automated responses to users who request to stop receiving messages, improving customer service and compliance with communication preferences.

## How it works:

1.  **Trigger:** The workflow starts either when a new message is received via WhatsApp (`New message in WhatsApp` node) or when a contact is tagged in KlickTipp via Outbound (`KlickTipp Outbound triggered` node).
2.  **Message Filtering:** User-initiated messages are filtered to ensure automated messages don't trigger the flow (`Filter user messages` node).
3.  **Cancellation Check:** For WhatsApp-initiated workflows, the content of incoming WhatsApp messages is checked for the "STOP" keyword (`Cancellation check` node).
    *   If the message starts with "STOP" (case-insensitive, ignoring whitespace), the workflow proceeds to send an auto-responder message and subscribe the user to an opt-out list in KlickTipp.
    *   If the message does not start with "STOP", no action is performed (the workflow stops at this point).
4.  **Offer Delivery:** For KlickTipp-triggered workflows, a personalized WhatsApp message template is sent to the contact (`Sending WhatsApp offer template` node). This template contains dynamic data pulled from KlickTipp custom fields, such as the contact's name and offer details.
5.  **Opt-out Handling:** When a user sends "STOP", an auto-responder template is sent to the sender, and the WhatsApp sender is subscribed to the KlickTipp opt-out list (`Subscribe number to opt-out from WA messages` node).

## Services:

-   WhatsApp Business Cloud API
-   KlickTipp

## Hashtags:

#n8n #WhatsApp #KlickTipp #Automation #Marketing
