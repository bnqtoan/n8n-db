# Onfleet Trigger --> Twilio Whatsapp

## Use cases:

*   **Automated Delivery Notifications:** Automatically send WhatsApp messages to customers when their delivery task is created in Onfleet, providing them with a tracking link.
*   **Real-time Delivery Updates:** Keep customers informed about their delivery status by sending proactive notifications via WhatsApp.

## How it works:

1.  **Onfleet Trigger:** The workflow starts with the "Onfleet Trigger" node, which listens for the "taskCreated" event in your Onfleet account.  When a new delivery task is created, the trigger activates the workflow.
2.  **Twilio WhatsApp Message:** The "Twilio" node receives the data from the Onfleet Trigger. It constructs a WhatsApp message to the customer, embedding the tracking URL from the Onfleet task data.  The message is then sent to the customer via WhatsApp.

## Services:

*   Onfleet
*   Twilio

## Hashtags:

#n8n #automation #delivery #onfleet #twilio #whatsapp
