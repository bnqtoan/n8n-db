# AI Agent with Custom Activity Tool

## Use cases:

- **Personalized Activity Recommendations:**  A user can ask the AI agent for activity suggestions based on their mood and preferences (e.g., "I feel like learning something new"). The agent uses a custom tool to fetch suitable activities from an external API.
- **Automated Boredom Buster:** Automatically suggests activities when a user expresses boredom or seeks entertainment ideas via a chat interface.
- **Workflow Integration:** Integrate this workflow as a sub-workflow in a larger automation to provide activity suggestions within a more complex process (e.g., event planning or team-building exercises).

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" node.
2.  **AI Agent:** The "AI Agent" node processes the message, utilizing an OpenAI Chat Model for language understanding and a Simple Memory node to keep track of previous interactions.
3.  **Activity Tool Call:** If the AI agent determines the user needs an activity suggestion, it calls the "Activity Tool" sub-workflow. This tool is configured to use the current workflow's ID, making it a recursive call.
4.  **Sub-workflow Execution:** The "Activity Tool" sub-workflow receives the chat input through the "When Executed by Another Workflow" trigger.
5.  **Information Extraction:**  The "Work out activity type and number of people1" node uses a language model to determine the type of activity to search for and the number of participants from the chat input.
6.  **API Call:** The "Call the API" node makes a request to the "Bored API" using the extracted activity type and participant number as query parameters.
7.  **Data Aggregation:** The "Combine" node extracts relevant data from the API response.
8.  **Response Formatting:** The "Set 'response' value" node formats the activity suggestion into a string.
9.  **Return to AI Agent:** This response is then presumably returned to the AI Agent, which incorporates it into a more comprehensive answer and sends it back to the user via the Chat Trigger.

## Services:

*   **Bored API:**  An API providing activity suggestions.
*   **OpenAI:** Used through the OpenAI Chat Model node for AI tasks.

## Hashtags:

#n8n #automation #AIagent #customtool #activitysuggestion
