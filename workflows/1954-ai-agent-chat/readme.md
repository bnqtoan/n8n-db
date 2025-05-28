# My Workflow

## Use cases

- **Chatbot with search capabilities:** Build a chatbot that can answer user questions by leveraging real-time information from the web. For example, answering questions about current events, stock prices, or definitions.
- **AI-powered research assistant:** Create a workflow that acts as a research assistant, gathering information from the web based on user prompts and providing summarized answers.
- **Dynamic FAQ system:** Automate the creation of an FAQ system that can answer user questions by searching the web for relevant information, ensuring the answers are always up-to-date.

## How it works

This workflow creates an AI agent that leverages a chat trigger, memory, an OpenAI language model, and a search tool to respond to user messages.

1.  **When chat message received:** The workflow starts when a message is received via the Chat Trigger node.
2.  **AI Agent:** The Chat Trigger node then sends the message to the AI Agent node.
3.  **OpenAI Chat Model:** The AI Agent uses the OpenAI Chat Model (gpt-4o-mini) to process the message and formulate a response.
4.  **SerpAPI:** If the OpenAI Chat Model determines that external information is needed, it uses the SerpAPI node to search the web.
5.  **Simple Memory:** The Simple Memory node stores the conversation history, allowing the AI Agent to maintain context and provide more relevant responses.
6.  **AI Agent Output:** Finally, the AI Agent sends the generated response back to the user (through the chat service connected to the "When chat message received" trigger, though this part is not explicitly defined in this workflow).

## Services

-   **OpenAI:** Provides the language model (gpt-4o-mini) for processing user messages and generating responses.
-   **SerpAPI:** Used to search the web for real-time information based on user queries.

## Hashtags

#n8n #automation #AIagent #chatbot #OpenAI
