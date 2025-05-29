# Auto Spam & Marketing Email Killer

## Use cases:

*   **Automatic Inbox Cleaning:** Regularly removes spam and marketing emails from a Gmail inbox, ensuring only important messages remain.
*   **Prioritized Communication:** Helps users focus on critical communications like order confirmations, invoices, and personal inquiries by filtering out promotional content.
*   **Business Inbox Management:** Streamlines business inboxes by eliminating unwanted solicitations and marketing material, saving time and improving efficiency.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a Gmail Trigger node, which polls the inbox every hour for new messages.
2.  **Validator of Email (Langchain Agent):** The email's snippet is passed to a Langchain Agent node, which uses a predefined system message and prompt type to determine if the email is `SPAM`, `OFFER`, or `IMPORTANT`.
3.  **If Condition:** The output from the Langchain Agent node is evaluated by an If node. If the output is either `SPAM` or `OFFER`, the workflow proceeds to the next step.
4.  **Delete Email:** The Gmail node deletes the email from the inbox.

## Services:

*   Gmail
*   OpenAI

## Hashtags:

\#n8n \#automation \#emailManagement \#spamFilter \#AI
