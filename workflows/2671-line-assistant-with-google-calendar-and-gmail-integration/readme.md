# LINE Assistant with Google Calendar and Gmail Integration

## Use cases:

- **Intelligent Calendar Management:** A user can ask the LINE assistant to schedule meetings, and the assistant automatically extracts the date, time, and event name, then creates an event in Google Calendar.
- **Email Information Retrieval:** Users can query for information from their Gmail account (e.g., "Find emails received last week"), and the assistant will fetch and summarize the relevant emails.
- **General Question Answering:** The LINE assistant can answer general knowledge questions using the Wikipedia tool, providing quick and informative responses to users' queries.

## How it works:

1.  **Line Receiving:** The workflow starts when a user sends a message to the LINE chatbot. The `Line Receiving` node captures the message via a webhook.
2.  **Switch Between Text and Others:** This node checks if the received message is text. If not, it triggers an error response.
3.  **AI Agent:** The core of the workflow. It receives the user's message and uses an AI Agent to understand the intent behind the message. The agent is configured with a system message defining its role as a helpful assistant.
4.  **AI Tools:** The AI Agent uses various tools such as `Wikipedia`, `Google Calendar Create`, `Google Calendar Read`, and `Gmail Read` to gather the information based on the request and respond accordingly.
    *   **Wikipedia:** Used to answer general knowledge questions.
    *   **Google Calendar:** Used to read and create calendar events based on user input.
    *   **Gmail Read:** Used to read emails and provide requested information from the email content.
5.  **OpenAI:** This node is responsible to condense the answer into an easily readable format.
6.  **Error Handling from AI Response:** Checks if the AI response contains valid content. If not, it triggers an error response.
7.  **Text Cleansing:** Cleans the AI-generated response by removing unnecessary characters, markdown, and HTML tags to ensure a clean output.
8.  **Line Answering (Ordinary Case):** Sends the cleaned response back to the user via the LINE chatbot.
9.  **Line Answering (Error Case):** Sends a predefined error message to the user if the workflow encounters an issue or the user input is invalid.

## Services:

-   LINE
-   Google Calendar
-   Gmail
-   OpenAI
-   Wikipedia

## Hashtags:

#n8n #automation #LINEBot #GoogleCalendar #Gmail
