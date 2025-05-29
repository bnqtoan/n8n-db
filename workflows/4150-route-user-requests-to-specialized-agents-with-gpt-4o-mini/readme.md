# AI Agent Router

## Use cases:

- **Intelligent Task Routing:** Automatically route user requests to the appropriate agent (Reminder, Email, Meeting, Document) based on the user's intent, streamlining task management.
- **Chatbot Integration:** Build a chatbot that understands user requests and triggers specific workflows for handling reminders, emails, meeting scheduling, or document creation.
- **Centralized Command Center:** Create a single point of entry for various automated tasks, allowing users to interact with different services through a unified interface.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a POST request is sent to the specified webhook URL. The request body should contain a "message" field with the user's input.
2.  **AI Agent (Router):** The "AI Agent" node, configured as a Router Agent, analyzes the user's input (`{{ $json.body.message }}`) using a prompt that defines the roles of different sub-workflows (Reminder, Email, Meeting, and Document Agents). This node uses the `GPT 4o Mini` model to determine the appropriate agent based on the user's intent.
3.  **Structured Output Parser and Auto-fixing Output Parser:** These nodes ensure the output from the AI Agent is structured and adheres to a predefined JSON schema before being used in subsequent nodes.
4.  **Agent Route (Switch):** The "Agent Route" node uses a Switch node to route the workflow execution to the corresponding agent based on the "Agent Name" determined by the AI Agent.
5.  **Sub-Workflow Execution:** The workflow then executes one of the following sub-workflows, depending on the route:
    -   **Reminder Agent:** Executes the "Reminder Agent" workflow (`fdd9O6hbUriHv64J`) to set a time-based notification or reminder. The user's input is passed as the "Query" to the sub-workflow.
    -   **Email Agent:** Executes the "Email Agent" workflow (`zo5FcA7Jq1Vx2FuJ`) to send an email. The user's input is passed as the "User Input" to the sub-workflow.
    -   **Meeting Agent:** Executes the "Meeting Agent" workflow (`XcVNUudXZCDEeEJN`) to schedule, reschedule, or confirm a meeting. The user's input is passed as the "User Input" to the sub-workflow.
    -   **Document Agent:** Executes the "Document Agent" workflow (`EuXN7e1O3hP0KmyI`) to generate, summarize, or edit a document. The user's input is passed as the "User Input" to the sub-workflow.
6.  **Response:** The corresponding "Response" node (e.g., "Reminder Agent Response," "Email Agent Response") sends the output from the executed sub-workflow back as a response to the webhook.

## Services:

-   **OpenRouter API:** Used for accessing the GPT-4o Mini language model for intent recognition.
-   **Postgres:** Used for chat memory via the `Postgres Chat Memory` node.
-   **Reminder Agent Sub-Workflow:** (Workflow ID: fdd9O6hbUriHv64J) - Assumed to interact with a service for setting reminders (e.g., Google Calendar, a custom reminder system).
-   **Email Agent Sub-Workflow:** (Workflow ID: zo5FcA7Jq1Vx2FuJ) - Assumed to interact with an email service (e.g., Gmail, SendGrid) for sending emails.
-   **Meeting Agent Sub-Workflow:** (Workflow ID: XcVNUudXZCDEeEJN) - Assumed to interact with a calendar service (e.g., Google Calendar) for scheduling meetings.
-   **Document Agent Sub-Workflow:** (Workflow ID: EuXN7e1O3hP0KmyI) - Assumed to interact with a document service (e.g., Google Docs) for document creation and editing.

## Hashtags:

#n8n #automation #workflow #AI #chatbot
