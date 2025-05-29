# Auto-Ticket Maker

## Use cases:

-   **Automated Ticket Creation from Slack:** Automatically converts user requests from Slack into structured tickets for project management or task tracking.
-   **AI-Driven Task Breakdown:** Uses AI to analyze a user's request in Slack and break it down into actionable epics and tasks with detailed descriptions.
-   **Streamlined Project Initiation:**  Quickly initiates projects by capturing requirements and generating initial tickets, saving time on manual planning.

## How it works:

1.  **Webhook (Slack Trigger):** Listens for new messages sent to a specific Slack channel (defined by the path `slack-ticket-maker`).
2.  **Code (Message Extraction):** Extracts relevant information (user, channel, text) from the Slack webhook payload and reformats it into a cleaner structure. It also removes Slack user mentions from the text.
3.  **AI PM Wellington (AI-Powered Ticket Generation):** Receives the Slack message and uses an AI agent (Langchain Agent) powered by the OpenAI to:
    *   Evaluates the complexity of the message and determines the number of tickets to create.
    *   Asks for a project name (if needed).
    *   Requests clarification if more information is required (up to two times).
    *   Breaks down the project into epics and tasks (tickets) with titles, short descriptions, and sections for objectives, definition of done, requirements, implementation details, risks, testing, timeline, related notes, and additional comments.
    *   Formats tickets in Markdown code blocks.
4.  **Slack (Send Tickets to Channel):** Sends the generated tickets (output from the AI agent) back to a specific Slack channel (ticket-maker).
5.  **OpenAI Chat Model:** Uses the gpt-4.1 model to power the Langchain agent for generating tickets.
6.  **Simple Memory:** Buffers conversation for more consistent and context-aware responses from the AI PM.

## Services:

*   Slack
*   OpenAI

## Hashtags:

#n8n #automation #workflow #Slack #AI #TicketManagement
