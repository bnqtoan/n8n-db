# My Workflow

## Use cases:

- **Chatbot with Enhanced Knowledge:** Create a chatbot that can answer user questions by leveraging real-time search results from SerpAPI and information from Wikipedia. This is useful for providing up-to-date and comprehensive answers.
- **Intelligent Customer Support:** Develop a customer support system that uses an AI agent to understand user queries, search for relevant information using available tools, and provide accurate and helpful responses.
- **Automated Research Assistant:** Build an automated assistant that can research topics by combining information from multiple sources like SerpAPI and Wikipedia, presenting a summarized and informative response to the user.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" node. This acts as the entry point for user queries.
2.  **AI Agent Orchestration:** The "AI Agent" node acts as the central orchestrator. It receives the chat message and uses the configured tools and memory to formulate a response.
3.  **Memory Management:** The "Simple Memory" node stores the last 20 messages of the conversation, enabling the agent to maintain context and provide more coherent answers.
4.  **Tool Utilization:** The "AI Agent" has access to two tools:
    *   **SerpAPI:**  Allows the agent to search the web for real-time information.
    *   **Wikipedia:** Enables the agent to access a vast encyclopedia of knowledge.
5.  **Language Model Processing:** The "OpenAI Chat Model" node, using the *gpt-4o-mini* model, provides the AI Agent with the ability to understand and generate human-like text.
6.  **Response Generation:** The AI Agent processes the input, utilizes the available tools and memory, and generates a response using the language model. This response is then sent back to the user.

## Services:

*   OpenAI
*   SerpAPI
*   Wikipedia

## Hashtags:

#n8n #automation #chatbot #AIagent #conversationalAI
