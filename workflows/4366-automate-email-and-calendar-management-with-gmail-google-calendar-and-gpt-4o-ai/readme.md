# [AOE] Inbox & Calendar Management Agent

## Use cases:

- **Automated Email Triage:** Automatically categorize incoming emails (e.g., from colleagues, customers) and apply corresponding labels in Gmail, enabling prioritized handling.
- **AI-Powered Scheduling Assistant:** Analyze email content and calendar availability to suggest optimal meeting times and automatically create calendar entries upon user confirmation.
- **Contextual Email Response Generation:** When replying to an email, the workflow retrieves relevant information from past email conversations to provide contextually appropriate responses.

## How it works:

1.  **Triggers:** The workflow is triggered either by a new chat message, a scheduled interval (Gmail Trigger), or manual execution. It also accepts input from other workflows.
2.  **Email Classification:** Incoming emails are classified into categories like "Colleagues" or "Kunden" (Customers) using the "Classify Emails" node, which uses an OpenAI Chat Model to analyze the email subject, sender, and snippet.  Based on the classification, corresponding labels are added to the email in Gmail.
3.  **Email Thread Summarization:** Recent email threads are fetched, and the "Code - Summarize Email Thread as Text" node extracts and formats key information (date, sender, recipient, subject, and snippet) from each message to create a summary.
4.  **Contextual Information Retrieval:** Embeddings are generated of the email threads using OpenAI, saved in a Vector Store. Then the agent research for context in previous conversations.
5.  **Calendar and Email Access Tools:** The workflow provides access to Gmail and Google Calendar APIs through dedicated nodes. These tools allow the AI agent to retrieve emails, delete emails, create drafts, get calendar events, and add new calendar entries.
6.  **AI Agent Orchestration:** An agent leverages an OpenAI Chat Model, Memory and Tools to manage emails and calendar. The AI agent is designed to provide an overview of current emails, detect requests, suggest actions, propose replies, monitor the calendar, and support planning. The agent uses the tools to retrieve information and take actions based on user input.
7. **Day Name Conversion**: Before creating a calendar entry or providing day context the agent uses the 'Determine the name of the day of the week' node.

## Services:

-   Gmail API
-   Google Calendar API
-   OpenAI API

## Hashtags:

#n8n #automation #emailManagement #calendarAutomation #AIagent
