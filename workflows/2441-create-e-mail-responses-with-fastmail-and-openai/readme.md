# Fastmail Email Draft Automation with OpenAI

## Use cases:

*   **Automated Reply Drafting:** Automatically drafts email replies based on incoming emails, saving time and effort.
*   **Personalized Customer Support:** Generates tailored responses for customer inquiries received via email.
*   **Efficient Email Management:** Quickly creates drafts for emails requiring a thoughtful response, ensuring no important message is overlooked.

## How it works:

1.  **Email Trigger (IMAP):** The workflow starts by monitoring an IMAP email inbox for new, unread emails.
2.  **Get fields from source email:** Extracts the email body (`textPlain`), sender (`from`), subject, and message ID from the incoming email.
3.  **OpenAI:** Uses the OpenAI GPT-4 model to generate a draft response based on the email content and subject. The prompt instructs the model to return a casual response with appropriate greetings and sign-offs, maintaining formality if present in the original email.
4.  **Session:** Authenticates with the Fastmail JMAP API to establish a session.
5.  **Get Mailbox IDs:** Retrieves the mailbox IDs, including the drafts folder ID, from Fastmail using the JMAP API.
6.  **Split Out:** Splits the data to iterate over different mailboxes.
7.  **Filter for drafts folder:** Filters the mailboxes to identify the "Drafts" folder.
8.  **gather data for draft email:** Formats the data required for creating a draft email, including recipient, subject (Re: Original Subject), and the AI-generated message content. It also retrieves necessary IDs and prepares the email structure.
9.  **upload draft email:** Uploads the draft email to the "Drafts" folder in Fastmail using the JMAP API. It sets the email content, recipient, subject, and links it as a reply to the original email.

## Services:

*   **Fastmail:** Email service provider using the JMAP API.
*   **OpenAI:** AI platform for generating email responses using the GPT-4 model.
*   **IMAP:** Standard protocol for email retrieval.

## Hashtags:

#n8n #automation #email #openai #fastmail #jmap
