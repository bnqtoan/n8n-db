# Automate Ticket Generation and Triaging from Gmail to Linear.App

## Use cases:

- **Automated Support Ticket Creation:** Automatically creates issues in Linear.App from incoming support emails in Gmail, saving time and ensuring no request is missed.
- **Intelligent Ticket Triage:** Uses AI to classify, label, prioritize, and summarize support requests, ensuring efficient allocation of resources.
- **Improved Support Workflow:** Streamlines the support workflow by automating the initial steps of ticket creation and triage, allowing support teams to focus on resolving issues.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger that runs periodically (e.g., hourly) to check for new emails.
2.  **Get Recent Messages:** Fetches the latest emails from a specified Gmail inbox (e.g., `support@example.com`) dedicated to support requests. A Gmail filter is applied to capture support requests only.
3.  **Mark as Seen:** Ensures each email is processed only once by marking it as seen based on its ID.
4.  **Markdown:** Converts the HTML content of the email to Markdown format for easier parsing.
5.  **Generate Issue From Support Request:** Passes the email content to an AI agent (OpenAI ChainLlm) which uses the email's details (sender, subject, body) to:
    *   Classify and label the issue (e.g., Technical, Billing).
    *   Prioritize the issue (1-5, with 1 being the highest).
    *   Rewrite the issue summary and description, focusing on facts and removing emotional content.
6.  **OpenAI Chat Model:** Uses the configured OpenAI model (`gpt-4o-mini` in this case) for text generation within the AI agent.
7.  **Structured Output Parser:** Parses the AI agent's output to extract labels, priority, summary, and description in a structured format.
8.  **Create Issue in Linear.App:** Creates a new issue in Linear.App using the extracted information from the AI agent, including title (summary), description, labels, and priority.

## Services:

-   **Gmail:** Used to monitor a support inbox for incoming email requests.
-   **OpenAI:** Provides the language model for ticket triage and summarization.
-   **Linear.App:** Used as the issue tracking system where tickets are created.

## Hashtags:

#n8n #automation #workflow #AI #supporttickets
