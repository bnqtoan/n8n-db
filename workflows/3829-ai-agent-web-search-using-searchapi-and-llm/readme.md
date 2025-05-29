# SearchApi AI Agent

## Use cases:

- **Information Retrieval:** Answer user questions that require up-to-date information from the web. For example, "What is the current weather in London?" or "Who won the latest Nobel Prize in Physics?".
- **Research Assistant:** Automate the process of gathering information for research purposes by using search queries and AI to summarize the findings.
- **Chatbot Enhancement:** Integrate this workflow into a chatbot to enable it to provide more comprehensive and accurate answers by searching the web for relevant information.

## How it works:

1.  The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  The "AI Agent" node receives the message and determines if it needs to use a tool.
3.  If the "AI Agent" decides the user question requires up-to-date information, it utilizes the "SearchApi" tool. The search query is extracted from the user's input (parameter `q`).
4.  The "SearchApi" node queries the [SearchAPI.io](https://www.searchapi.io/) service with the generated search query.
5.  The search results are fed back to the "AI Agent", which processes the information with the help of an "OpenAI Chat Model" and the "Simple Memory" which enable the model to remember context from previous interactions.
6.  The "AI Agent" generates a response based on the search results and the context of the conversation and returns it to the user.

## Services:

-   [SearchAPI.io](https://www.searchapi.io/): Used for performing web searches based on AI-generated queries.
-   OpenAI: Provides the language model (e.g., GPT-4o-mini) to process information and generate responses.

## Hashtags:

#n8n #AIagent #SearchAPI #Automation #Chatbot
