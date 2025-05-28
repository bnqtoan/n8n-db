# Send Typeforms leads via Whatsapp (Twilio)

## Use cases:

- **Lead Notification:** Automatically send a WhatsApp message to a sales team when a new lead submits a Typeform, ensuring immediate follow-up.
- **Customer Inquiry Alert:** Receive instant notifications for customer inquiries submitted through Typeform, allowing for quick responses and improved customer service.
- **Event Registration Confirmation:** Send a WhatsApp confirmation message to individuals who register for an event via Typeform.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new submission is received in a specified Typeform (identified by its `formId`).
2.  **Set:** The "Set" node extracts and formats specific answers from the Typeform submission (`form_response.answers`). It creates a string named "Data" containing information like last name, first name, number of children, country, email address, and birth date.
3.  **Twilio:**  The "Twilio" node sends a WhatsApp message to a predefined phone number (the "to" parameter) using a Twilio account. The message includes a greeting and the formatted "Data" string extracted from the Typeform submission.

## Services:

-   **Typeform:** Used to collect data via online forms.
-   **Twilio:** Used to send WhatsApp messages.

## Hashtags:

#n8n #automation #typeform #twilio #whatsapp
