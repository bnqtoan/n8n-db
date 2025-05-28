# Send a ChatGPT Email Reply and Save Responses to Google Sheets

## Use cases:

- **Automated Customer Support:** Automatically respond to customer inquiries via email with AI-generated answers, saving support team time and improving response times.
- **Email Autoresponder with Feedback Loop:** Set up an intelligent autoresponder that not only replies to emails but also records user feedback on the quality of the responses for continuous improvement of the AI model.
- **Personalized Email Assistant:** Create a personalized email assistant that drafts email replies based on incoming messages, helping users manage their inbox more efficiently.

## How it works:

This workflow has two main triggers: one for processing incoming emails and another for handling feedback on generated replies.

1.  **On Email Received (Gmail Trigger):**
    *   The workflow is initiated when a new email is received in Gmail.
    *   It checks if the sender's email address is on a specified list of recipients.
    *   The email content is extracted.
    *   A UUID is generated for tracking purposes.
    *   The text message is extracted using the node `Extract message content (advanced)`.
    *   The email content is sent to OpenAI's GPT model to generate a reply (Generate reply).
    *   The generated reply is formatted into an HTML email template (Email template).
    *   The workflow checks if the message length is within the token limit
    *   The generated reply is sent back to the email sender via Gmail (Send reply to recipient), which includes feedback buttons (Yes/No) for rating the response.
2.  **Data Storage (Google Sheets):**
    *   The initial email and the GPT-generated reply are stored in a Google Sheet.
    *   If a Google Sheet with the configured name doesn't exist, the workflow automatically creates one (Create spreadsheet) and stores its ID.
    *   Each email interaction is stored as a new row in the sheet with the following columns: ID, Initial message, Generated reply, Good response?
3.  **On Feedback Given (Webhook):**
    *   When a user clicks on the feedback buttons (Yes/No) in the email, a webhook is triggered.
    *   The workflow captures the feedback and the unique ID of the email interaction.
    *   The workflow updates the corresponding row in the Google Sheet with the user's feedback.
4.  **Dynamic Data Handling:**
    *   Workflow uses static data to store spreadsheet IDs to persist the session.
    *   The configure node can be used to set the spreadsheet id to use if the worklfow has been trigger from the webhook.

## Services:

*   Gmail
*   Google Sheets
*   OpenAI

## Hashtags:

#n8n #automation #emailAutomation #GPT #OpenAI #GoogleSheets #AI
