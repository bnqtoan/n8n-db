# AI Chatbot Agent: a Panel of Experts using InfraNodus Graph RAG Knowledge

## Use cases:

- **Expert Consultation:** Provide users with access to a panel of AI-driven experts in specific domains (e.g., EightOS, Polysingularity) to answer their questions and offer tailored advice.
- **Knowledge-Based Support:** Build a support chatbot that leverages knowledge graphs from InfraNodus to provide accurate and context-aware responses to user inquiries.
- **Ideation and Problem Solving:** Facilitate ideation sessions by connecting users with AI agents that can analyze information from multiple knowledge sources and offer diverse perspectives.

## How it works:

1.  **Chat Trigger:** The workflow starts when a user sends a message to the chatbot, either through n8n's built-in chat interface or a public URL that can be embedded on a website.
2.  **AI Agent:** The AI Agent node receives the user's message and determines which "expert" (InfraNodus knowledge graph) is best suited to answer the query. It uses the descriptions of the available tools and the system prompt to make this decision.
3.  **Expert Selection and Graph RAG:** Based on the agent's decision, the workflow sends the user's query to one or more InfraNodus knowledge graphs (EightOS Expert, Polysingularity Expert) via HTTP Request nodes. InfraNodus then uses Graph RAG to find relevant information within those graphs and generates a response.
4.  **AI Chat Model:** The OpenAI Chat Model node is used as the language model and is configured via credentials.
5.  **Chat Memory:** The Simple Memory node tracks the conversation's history to maintain context and allow users to refer to previous messages.
6.  **Chat Response:** The AI Agent combines the responses from the selected experts (if multiple were used) and sends a final answer back to the user.

## Services:

-   InfraNodus: Used to create and host knowledge graphs, perform Graph RAG analysis, and provide expert insights.
-   OpenAI: Used for its language model capabilities.

## Hashtags:

#n8n #automation #chatbot #AI #knowledgegraph #GraphRAG
