# My Workflow

## Use cases:

- **Automated Ticket Triage:** Automatically label, prioritize, and rewrite summaries/descriptions of new Jira tickets to improve organization and clarity.
- **Intelligent Issue Resolution:** Suggest potential solutions to newly opened tickets by analyzing previously resolved, similar issues, reducing the workload on support staff.
- **Enhanced Support Efficiency:** Streamline the support process by providing AI-driven assistance for initial ticket assessment and resolution suggestions.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger that periodically checks for new tickets.
2.  **Get Open Tickets:** Retrieves newly opened "To Do" tickets from a specified Jira project ('SUPPORT').
3.  **Mark as Seen:** Prevents duplicate processing of tickets by tracking processed issue keys.
4.  **Simplify Ticket:** Extracts key information from each ticket, such as project key, issue key, issue type, creation date, status, summary, description, reporter name, and reporter email.
5.  **Label, Prioritize & Rewrite:** Uses an OpenAI Chat Model to analyze the ticket and:
    *   Assign labels to categorize the issue.
    *   Prioritize the issue based on its severity.
    *   Rewrite the summary and description for clarity and conciseness, removing emotional and anecdotal phrases, and highlighting factual information. Output Parser is used to ensure LLM's output is correct.
6.  **Update Labels, Priority and Description:** Updates the Jira ticket with the assigned labels, priority, and rewritten description.
7.  **Get Recent Similar Issues Resolved:** Searches for recently resolved issues with similar labels to the current ticket.
8.  **Aggregate1:** Aggregates all resolved issues into a single item for easier processing.
9.  **Loop Over Items:** Iterates through the similar issues found.
10. **Issue Ref:** An no-op node.
11. **Simplify Issue:** Extracts key information from each previously resolved ticket.
12. **Get Comments:** Retrieves all comments associated with each similar issue.
13. **Simplify Comments:** Extracts the author and comment text from each comment.
14. **Aggregate:** Aggregates all comments for each similar issue.
15. **Summarise Resolution:** Utilizes an OpenAI Chat Model to summarize the resolution of the similar issue based on its comments.
16. **Return Fields:** Returns a summary, issueKey and description of the issue.
17. **Aggregate1:** Aggregates all the previously resolved issues data.
18. **Attempt to Resolve Issue:** Employs another OpenAI Chat Model to suggest a resolution for the current ticket, based on the summaries of the similar, previously resolved issues and addressees the reporter.
19. **Add Comment to Issue:** Adds the suggested resolution as a comment to the original Jira ticket.

## Services:

-   Jira
-   OpenAI

## Hashtags:

#n8n #Jira #automation #AI #ticketTriage
