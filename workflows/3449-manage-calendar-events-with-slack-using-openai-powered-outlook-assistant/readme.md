# Outlook Calendar Assistant

## Use cases:

- **Meeting Scheduling:** Users can ask the assistant to schedule meetings, specifying the title, attendees, start time, end time, and description, and the assistant will create the event in their Outlook calendar.
- **Calendar Summary:** Users can ask for a summary of their upcoming events for a specific day or week. For example, "What does my calendar look like next Tuesday?"
- **Event Information Retrieval:** Users can query specific events, asking for details such as the time, attendees, or description of an upcoming meeting. For example, "What time is the meeting with John next week?"

## How it works:

This workflow creates an AI-powered Outlook Calendar Assistant that listens for mentions in a Slack channel. Here's a breakdown:

1.  **Slack Trigger (On BOT/APP Mention):** The workflow starts when the bot is mentioned in a Slack channel.
2.  **Check for Challenge (Is Auth Challenge?):** Verifies if the request is a challenge from Slack to confirm the webhook subscription. If so, it responds with the challenge string.
3.  **Extract Message (Get Message):** Extracts the message content, timestamp, user ID, and channel information from the Slack event.
4.  **AI Agent (Outlook Calendar Assistant):** The core of the workflow. It uses the Langchain Agent node, powered by an OpenAI Chat Model.
    -   It receives the user's query from Slack.
    -   It uses the "Search All Outlook Events", "Create New Calendar Event", and "Get Available Calendars" tools to understand and fulfill the request. The Simple Memory node is there to make the bot remember past conversations for better and personalized answers.
5.  **Reply to User (Send Reply):** The AI Agent's response is sent back to the Slack channel as a reply to the user's original message.

## Services:

-   **Slack:** For receiving user queries and sending responses.
-   **Microsoft Outlook:** For accessing and manipulating calendar events.
-   **OpenAI:** For natural language processing and understanding user requests.

## Hashtags:

#n8n #automation #workflow #AI #calendar #Slack #Outlook
