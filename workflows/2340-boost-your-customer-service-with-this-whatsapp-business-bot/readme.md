# WhatsApp business bot

## Use cases:

- **Appointment Reminders:** Automatically send WhatsApp reminders to customers who have scheduled appointments via a Google Form.
- **Customer Support Automation:** Log incoming customer inquiries from WhatsApp into a Google Sheet and automatically respond based on pre-defined replies.
- **Feedback Collection:** After a service or event, send a WhatsApp message to gather feedback and store the responses in a Google Sheet for analysis.

## How it works:

This workflow automates interactions between a Google Sheet, Google Forms and WhatsApp Business. It consists of two primary flows:

1.  **Sending WhatsApp Template Messages Based on Google Form Submissions:**
    *   A **Google Sheets Trigger** monitors a Google Sheet ("Form Responses 1") for new entries, implying someone has filled out a Google Form.
    *   A **Filter** checks if the user consented to receive WhatsApp notifications.
    *   If consent is given, a **WhatsApp** node sends a pre-defined template message to the user, which contains the appointment details.

2.  **Handling Incoming WhatsApp Messages and Sending Replies:**
    *   A **WhatsApp Trigger** listens for incoming messages to your WhatsApp Business number.
    *   An **IF** node checks if the payload contains message data.
    *   **New message from the user** saves the new incoming messages to a "WA-messages" Google Sheets.
    *   A **Schedule Trigger** periodically activates.
    *   **Get new answers** node fetches rows from the "WA-messages" Google Sheet with the `Status` column equal to "Ready".
    *   **Loop Over Items** iterates through each row and sends replies via **Reply to the user** node.
    *   **Update message status** change the `Status` of the row to "Replied".
    *   **Wait 1 sec** A small delay to avoid hitting API rate limits.

## Services:

*   WhatsApp Business API
*   Google Sheets
*   Google Forms

## Hashtags:

#n8n #WhatsApp #Automation #GoogleSheets #CustomerService
