# Generate Issue From Support Request

## Use cases:

- **Automated Ticket Creation:** Automatically creates JIRA issues from incoming support emails, saving time and ensuring no request is missed.
- **Intelligent Ticket Triage:** Uses AI to classify, prioritize, summarize, and label support requests, allowing support teams to focus on critical issues first.
- **Improved Support Workflow:** Streamlines the support process by automatically converting email content into actionable JIRA tickets with relevant details.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered at a set interval (e.g., hourly) using the Schedule Trigger node.
2.  **Get Recent Messages:** The "Get Recent Messages" node fetches new emails from a specified Microsoft Outlook inbox within the last hour. This node is configured to retrieve specific fields such as body, subject, sender, and received date.
3.  **Mark as Seen:** The "Mark as Seen" node prevents duplicate processing of emails by tracking processed message IDs.
4.  **Markdown:** Converts the HTML body of the email into Markdown format for easier parsing in subsequent steps.
5.  **Generate Issue From Support Request:** Using OpenAI's LLM capabilities, generate a new issue using a prompt with a summary, description, label and priority.
6.  **Structured Output Parser:** Parses the string output of the LLM into JSON format, the structure is pre-defined.
7.  **Create Issue:** The "Create Issue" node creates a new issue in JIRA using the data extracted and transformed from the email and AI triage.

## Services:

-   **Microsoft Outlook:** Retrieves incoming support emails.
-   **OpenAI:** Uses a chat model (gpt-4o-mini) for issue classification, summarization, and labeling.
-   **JIRA:** Creates and manages the support issue.

## Hashtags:

#n8n #automation #jira #openai #support
