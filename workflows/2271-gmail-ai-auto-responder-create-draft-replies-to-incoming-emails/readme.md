# Gmail AI Auto-Responder: Create Draft Replies to Incoming Emails

## Use cases:

-   **Automated Response to Customer Inquiries:** Automatically draft replies to common customer questions received via Gmail, saving time and ensuring prompt responses.
-   **Prioritizing Important Emails:** Filter out emails that don't require a response (e.g., marketing emails) and focus on drafting responses only for emails that need attention.
-   **Out-of-Office Assistant:** When you're away, automatically generate draft replies acknowledging receipt and setting expectations for a delayed response.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a "Gmail Trigger" node, which monitors your Gmail inbox for new emails, excluding those sent from your own account.
2.  **Assess if message needs a reply:** An "Assess if message needs a reply" node uses an OpenAI Chat model to evaluate if the received email requires a response, using a prompt designed to filter out marketing emails or those not needing a reply. The output is then parsed by a "JSON Parser" node.
3.  **If Needs Reply:** The "If Needs Reply" node checks the boolean output from the "JSON Parser" node, and if it's true, proceeds to the next step.
4.  **Generate email reply:** Using the "Generate email reply" node, and an OpenAI Chat Model node, a draft reply is generated based on the email's subject and body, following instructions like maintaining a professional tone, starting with "Hello,", and ending with "Best,". The node is capable of drafting 2 responses (affirmative and negative) to yes/no questions and including placeholders for unknown answers.
5.  **Gmail - Create Draft:** The "Gmail - Create Draft" node creates a new draft email in your Gmail account using the generated reply and pre-populates the "To" field with the sender's address and the subject line, ensuring the draft is created within the same email thread.

## Services:

-   Gmail
-   OpenAI

## Hashtags:

#n8n #automation #gmail #ai #emailautomation
