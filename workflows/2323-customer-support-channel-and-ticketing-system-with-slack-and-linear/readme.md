# Slack to Linear Ticket Automation with AI

## Use cases:

- **Automated Ticket Creation:** Automatically creates Linear tickets from user messages in a designated Slack channel, saving support agents time and ensuring no request is missed.
- **AI-Powered Ticket Enrichment:** Uses AI to generate descriptive titles, summaries, and priority levels for tickets, providing more context and facilitating efficient triage.
- **Proactive Issue Resolution:** By suggesting debugging steps within the ticket, the workflow enables faster resolution and potentially reduces the workload on support teams.

## How it works:

1.  **Schedule Trigger:** The workflow is initiated by a Schedule Trigger, which runs at defined intervals (e.g., every minute).
2.  **Slack Search:** The `Slack` node searches for messages in a specified Slack channel (`#n8n-tickets`) that contain the "ticket" emoji.
3.  **Get Values:** The `Get Values` node extracts key information from the Slack message, such as the message ID, user, channel, timestamp, and content.
4.  **Get Existing Issues:** The `Linear` node retrieves all existing issues from the Linear project to avoid duplicates.
5.  **Collect Descriptions:** The `Aggregate` node collects the descriptions from all Linear issues.
6.  **Get Hashes Only:** This node extracts all the hash codes from the Linear descriptions.
7.  **Merge:** The `Merge` node combines the original Slack message data with the existing issue descriptions.
8.  **Create New Ticket?:** The `If` node checks if an existing Linear ticket already exists for the Slack message based on message ID. It checks to see if a ticket was created for the user message
9.  **Generate Ticket Using ChatGPT:** If no existing ticket is found, the `ChainLlm` node uses the OpenAI API to generate a descriptive title, summary, debugging suggestions, and priority level for the ticket based on the Slack message content.
10. **Structured Output Parser:** The `Structured Output Parser` node parses the information using a json schema.
11. **Create Ticket:** The `Linear` node then creates a new ticket in Linear with the generated title, summary, suggestions, and priority. The description includes the original Slack message and metadata for reference.

## Services:

-   **Slack:** Used to monitor a specific channel for user messages and trigger the workflow.
-   **OpenAI:** Used to generate the ticket title, summary, and priority.
-   **Linear:** Used as the issue tracking system to create and manage support tickets.

## Hashtags:

#n8n #automation #workflow #slack #linear #openai #ai #ticketautomation
