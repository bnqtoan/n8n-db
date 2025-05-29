# Ultimate Email Agent

## Use cases:

- **Automated Email Triage:** Classify incoming emails into categories like "Promotions," "Social," "Newsletter," and prioritize them based on content, automatically applying labels and archiving less important emails.
- **Smart Newsletter Summarization:** Automatically summarize lengthy newsletters and log the summary to Airtable, and sends the summary to Telegram, saving time and effort in staying informed.
- **AI-Powered Email Assistance:** Delegate tasks like drafting replies, fetching email content, or managing labels to an AI agent accessible through Telegram or webhooks, improving response times and efficiency.

## How it works:

1.  **Email Ingestion & Trigger:** The workflow is triggered either by a new email arriving in Gmail or via a manual trigger through a Telegram message or a webhook call.
2.  **Categorization:**
    *   The email is first assigned a temporary "Processing" label.
    *   The `Google Gemini (OmniClassifier)` node uses AI to categorize the email into predefined categories.
    *   Based on the category, specific labels are added (e.g., "Promotions," "Social," "Newsletter").
3.  **Newsletter Summarization:** If the email is categorized as a newsletter, the `Google Gemini (Newsletter)` node generates a summary. The summary is then logged to Airtable.
4.  **Priority Check:** The workflow determines the priority (High, Medium, Low) of the email content using the `Google Gemini (Priority)` node and AI.
5.  **Human Intervention Check:** For High priority emails, the `Google Gemini (Escalation)` is used to determine if a human is needed for further assistance
6.  **AI Agent Invocation:** Using the Master Email Coordinator node based on the response by telegram or webhook calls, different Email tool operations can be performed.
7.  **Finalization & Notifications:**
    *   The temporary "Processing" label is removed and a "Processed" label is added.
    *   A high-priority email alert containing a summary is sent to a specified Telegram chat if necessary.

## Services:

-   **Gmail:** Used for receiving emails, adding/removing labels, deleting emails, and sending replies.
-   **Telegram:** Used as a trigger and for sending alerts and summaries.
-   **Google Gemini AI:** Used for email classification, newsletter summarization, and priority check.
-   **OpenAI:** Used for generating context and summary of high-priority emails.
-   **Airtable:** Used for logging newsletter summaries.
-   **Postgres:** Used to store chat history to keep context on the AI Agent.

## Hashtags:

#n8n #emailAutomation #AIagent #gmail #workflow #LLM
