# Build your first AI MCP Server

## Use cases:

- **AI-Powered Calendar Management:** Users can interact with an AI to schedule, search, update, and delete events in their Google Calendar using natural language commands.
- **Text Case Conversion Tool:** The workflow provides tools to convert text to either uppercase or lowercase, useful for data normalization or specific formatting requirements.
- **Random Data Generation:** Generate a specified number of random user data entries (first name, last name, email), which can be used for testing or demonstration purposes.

## How it works:

1. **Trigger:** The workflow starts with two main triggers:
    - **Chat Trigger:** Receives user input from a chat interface.
    - **My Functions Server and Google Calendar MCP Triggers:** These use an MCP (Message Communication Protocol) to receive requests from an AI Agent.
2. **AI Agent:** The core of the workflow is the AI Agent (powered by OpenAI's gpt-4o model). It processes user input, leveraging memory (Simple Memory) and connected tools.
3. **Tools:** The AI Agent utilizes several tools:
    - **Calendar MCP:** Interacts with Google Calendar to search, create, update, and delete events.
    - **My Functions:** Executes sub-workflows for specific tasks, such as text case conversion or random data generation.
    - **Convert Text:** (Sub-workflow) Converts text to uppercase or lowercase based on the function_name input.
    - **Random user data:** (Sub-workflow) Generates a defined number of random users with fields such as firstname, lastname and email
    - **Random Jokes:** (Sub-workflow) Request a number of jokes from an API
4. **Google Calendar Operations:** The Google Calendar tools (SearchEvent, CreateEvent, UpdateEvent, DeleteEvent) perform the corresponding actions in the user's Google Calendar, based on the AI Agent's interpretation of the user's request.
5. **Text Conversion Sub-workflow:** This sub-workflow receives a `function_name` (uppercase or lowercase) and `text` from the AI Agent, then converts the text accordingly using Set nodes.
6. **Random User Data Generation Sub-workflow:** This sub-workflow receives a defined number from the AI Agent and generate the data with the debugHelper node.
7. **Random Joke Sub-workflow:** This sub-workflow receives a defined number from the AI Agent and request the jokes to the API.
8. **Response:** The results of the actions are sent back to the user (presumably through the chat interface, though this is not explicitly shown in the workflow).

## Services:

- Google Calendar
- OpenAI
- Random Joke API

## Hashtags:

#n8n #AI #automation #GoogleCalendar #MCP
