# AI Email processing autoresponder with approval (Yes/No)

## Use cases:

- **Automated Customer Support:** Automatically respond to common customer inquiries, escalating complex issues to human agents based on sentiment or topic.
- **Lead Qualification:** Automatically qualify inbound leads by extracting key information from emails and responding with relevant material. Approved leads can be forwarded to sales.
- **Vacation Autoresponder:** Automatically inform senders that you're out of office, provide an alternative contact, and save important emails for later review.

## How it works:

1.  **Email Trigger (IMAP):** The workflow starts by monitoring an email inbox for new messages using the IMAP protocol.
2.  **Markdown:** Converts the email content (HTML) to Markdown format.
3.  **Email Summarization Chain:** Uses a DeepSeek R1 model to summarize the email content.
4.  **Set Email:** Save the response in a variable
5.  **Write email:** Generates a response to the email using an agent with RAG using the "Qdrant Vector Store" and the "OpenAI" models. The agent leverages a Qdrant vector store for context and uses a OpenAI to create the email body.
6.  **Send Draft:** Sends the email to Gmail address to require an approval via the node "Send and wait for response".
7.  **Approve?:** Checks if the email draft has been approved.
8.  **Send Email:** If approved, sends the generated email response to the original sender.

## Services:

-   **IMAP:** Receives emails from an email server.
-   **DeepSeek R1:** AI model used for summarizing emails.
-   **Qdrant:** Vector database used for knowledge retrieval.
-   **OpenAI:** AI model for generate the response.
-   **Gmail:** Sends an email draft to require an approval.
-   **SMTP:** Sends the generated email.

## Hashtags:

#n8n #emailAutomation #AI #autoresponder #RAG
