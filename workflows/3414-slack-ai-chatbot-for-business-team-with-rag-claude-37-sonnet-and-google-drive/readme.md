# Slack AI Chatbot with RAG for company staff

## Use cases:

- **Instant answers to company policy questions:** Employees can quickly get answers to questions about HR policies, IT procedures, or other internal documentation directly within Slack.
- **Streamlined onboarding:** New hires can use the chatbot to easily access important onboarding documents and information, reducing the time it takes to get up to speed.
- **Quick access to internal knowledge:** Team members can find specific information within company documents without manually searching through multiple files or systems.

## How it works:

1.  **Slack Trigger:** The workflow starts when the bot is mentioned in a Slack channel.
2.  **AI Agent:** The AI Agent node receives the message and formulates a response, using a system message to define its role as a company knowledge base assistant.
3.  **RAG (Retrieval Augmented Generation):** The AI Agent uses the RAG tool to search a Qdrant vector store for relevant document sections based on the user's query.
4.  **Qdrant Vector Store:** This node retrieves relevant information from business documents stored in a Qdrant collection.
5.  **Embeddings OpenAI:** Text embeddings are generated using OpenAI to enable semantic search within the Qdrant vector store.
6.  **Send message:** The workflow posts the AI's response back to the Slack channel, including relevant information retrieved from the documents and a citation of the source.
7.  **Memory:** The Simple Memory node stores the conversation history.

## Services:

-   **Slack:** Used for the chatbot interface and communication.
-   **Qdrant:** A vector database used to store and retrieve document embeddings.
-   **Google Drive:** Used to store and access company documents.
-   **OpenAI:** Used for generating text embeddings.
-   **Anthropic:** Used to generate human-like answers

## Hashtags:

#n8n #automation #chatbot #RAG #Slack
