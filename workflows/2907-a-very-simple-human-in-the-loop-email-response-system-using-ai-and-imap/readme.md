# Very simple Human in the loop system email with AI e IMAP

## Use cases:

- **Automated Customer Support:** Automatically process and respond to customer inquiries received via email, ensuring timely and relevant support while involving a human agent for complex issues.
- **Lead Qualification:** Filter and qualify leads received via email, automatically summarizing the email content and suggesting appropriate follow-up actions for a sales team member to review.
- **Content Curation:** Summarize incoming articles or news items sent via email, allowing for quick review and routing of important information to relevant teams.

## How it works:

1.  **Email Trigger (IMAP):** The workflow starts by monitoring a specified IMAP email inbox for new emails.
2.  **Markdown:** Converts the HTML content of the email into Markdown format, to improve the performance of LLM models.
3.  **Email Summarization Chain:** Uses a Langchain summarization chain and a  OpenAI Chat Model to generate a concise summary of the email content (limited to 100 words).
4.  **Write email:** An agent that uses OpenAI, process the response from the summary to write an email reply.
5.  **Set Email text:** Save the reply email into a variable.
6.  **Approve Email:** Sends an email to a designated address (info@n3witalia.com) containing both the original email content and the AI-generated response, awaiting approval. It pauses the workflow until a response is received via email.
7.  **Approved?:** Validates the human feedback (if the email was approved).
8.  **Send Email:** If the feedback is ok sends the AI generated email.

## Services:

*   IMAP (for receiving emails)
*   SMTP (for sending emails)
*   OpenAI (for summarization and response generation)

## Hashtags:

#n8n #automation #email #AI #humanInTheLoop
