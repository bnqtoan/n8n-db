# Outlook AI Email Responder

## Use cases:

-   **Automated Email Response:** Automatically generate and send replies to specific email senders, such as sales inquiries, using AI to tailor the responses.
-   **Drafting Email Replies for Review:**  Generate email replies as drafts, allowing a user to review and edit the AI-generated responses before sending, ensuring quality and accuracy.
-   **Personalized Email Assistance:** Act as a virtual assistant, crafting replies in a specific person's tone and style based on provided email samples.

## How it works:

1.  **Connect Outlook & Set Filter:** The workflow starts by monitoring a specified Microsoft Outlook email account for incoming emails. It filters emails based on the sender's email address (e.g., `sales@yourcompany.com`).
2.  **Add AI Agent Instructions:** When a matching email is received, the email's content (ID, sender, subject, message body) is passed to an AI agent. The agent uses a pre-defined prompt instructing it to generate a reply. The prompt includes instructions on the desired writing style and provides examples of the user's writing to mimic their tone.
3.  **Add OpenAI Chat Model:** The AI agent utilizes the OpenAI `gpt-4o-mini` model (or another specified model) to generate the email reply.
4.  **Reply to Email:** The generated reply is then automatically sent as a reply to the original email. The "replyToSenderOnly" option is set to `true`, ensuring the reply is sent only to the original sender.  Additional fields such as the "reply to" and "subject" are automatically populated.

## Services:

-   **Microsoft Outlook:** For receiving and sending emails.
-   **OpenAI:** For generating email replies using AI models.

## Hashtags:

#n8n #automation #email #AI #OpenAI #Outlook
