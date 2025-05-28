# Receive updates when a form is submitted in Mautic, and send a confirmation SMS

## Use cases:

- **Webinar Registration Confirmation:** Automatically send an SMS confirmation to individuals who register for a webinar through a Mautic form.
- **Lead Capture Follow-up:** Immediately engage with new leads by sending a personalized SMS after they submit their information via a Mautic form.
- **Event Sign-up Acknowledgment:** Provide instant confirmation and event details to users who sign up for events through Mautic forms, improving their experience.

## How it works:

This workflow listens for new form submissions in Mautic. Once a form is submitted, the workflow triggers and extracts the submitter's phone number and first name from the form data. It then sends a personalized SMS confirmation message via Twilio to the provided phone number, thanking them for their submission and providing relevant information (e.g., webinar details).

1.  **Mautic Trigger:** This node is configured to listen for the `mautic.form_on_submit` event. When a new form is submitted in Mautic, this node triggers the workflow and passes the form submission data to the next node. The node is authenticating using the Mautic API.
2.  **Twilio:** This node receives the form submission data from the "Mautic Trigger" node. It extracts the recipient's phone number and first name from the Mautic data. It then constructs and sends an SMS message via Twilio to the extracted phone number, personalizing the message with the submitter's first name. The node uses the Twilio API with the specified "from" number.

## Services:

-   Mautic
-   Twilio

## Hashtags:

#n8n #automation #Mautic #Twilio #SMS
