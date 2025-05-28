# Jira Issue Auto-Resolution and Follow-Up Workflow

## Use cases:

- **Automatically resolve stale Jira issues:** Identifies and resolves long-lived, unresolved Jira issues, reducing backlog and improving team efficiency.
- **AI-Powered Customer Support:** Uses AI to analyze issue context, suggest solutions from a knowledge base, and automatically respond to users.
- **Sentiment-based Escalation:** Assesses customer satisfaction with resolutions and escalates negative feedback to relevant channels.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger that runs daily to find unresolved Jira issues older than 7 days.
2.  **Get List of Unresolved Long Lived Issues:** Retrieves a list of issues matching the criteria from Jira.
3.  **Execute Workflow:** For each issue, it executes a sub-workflow in parallel.
4.  **Get Issue Metadata:** Retrieves metadata, including title, description, reporter, and other relevant information for the issue.
5.  **Get Issue Comments:** Collects all comments associated with the issue to provide a complete conversation history.
6.  **Join Comments:** Aggregates all the comments into a single data structure.
7.  **Simplify Thread for AI:** Formats the issue details and comments into a structured thread suitable for AI processing, extracting relevant information like user messages and topic.
8.  **Classify Current Issue State:** Uses an AI text classifier to determine the current state of the issue (resolved, pending, or still waiting).
9.  **Customer Satisfaction Agent:** Uses sentiment analysis to determine the satisfaction of the customer by analysing the thread.
10. **KnowledgeBase Agent:** Attempts to resolve the issue automatically by using AI that access JIRA for similar issue and Notion for product pages.
11. **Issue Reminder Agent:** If the issue is pending, generates a reminder message to prompt action from participants.
12. **Jira and Slack Actions:** Depending on the AI analysis, the workflow performs actions like:
    - Adding comments with suggested solutions.
    - Closing resolved issues.
    - Sending notifications to Slack channels for escalation or follow-up.
    - Asking for customer feedback.

## Services:

-   Jira: Used for issue retrieval, comment posting, and issue status updates.
-   OpenAI: Used to classify issue, find similar issues, search product pages, generate reminders, and sentiment analysis.
-   Notion: Used as knowledge base.
-   Slack: Used for sending notifications.

## Hashtags:

#n8n #automation #Jira #AI #CustomerSupport
