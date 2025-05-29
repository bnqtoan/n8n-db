# Travel Planning Agent with Couchbase Vector Search, Gemini 2.0 Flash and OpenAI

## Use cases:

- **Personalized Travel Recommendations:** Provide users with tailored travel recommendations based on their preferences and interests, leveraging a database of points of interest. For example, a user could ask, "Where should I go for a romantic getaway?" and receive suggestions based on the indexed data.
- **Dynamic Trip Planning:** Allow users to dynamically add new points of interest to the agent's knowledge base via a webhook. This can be used to build personalized recommendations.
- **AI-Powered Travel Assistant:** Create a conversational AI agent that answers travel-related questions, leveraging a combination of large language models and vector search for up-to-date and relevant information.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger node.
2.  **AI Agent:** The "AI Travel Agent" node acts as the core conversational agent. It is configured with a system message that defines its role as a trip planner assistant.
3.  **Memory:** It connects to a "Simple Memory" node, allowing the AI Agent to remember previous interactions and maintain context.
4.  **LLM:** The AI agent uses the "Google Gemini Chat Model" node (configured with `gemini-2.0-flash`) to generate responses.
5.  **Vector Search Tool:** The "AI Travel Agent" also uses a tool named "PointofinterestKB" provided by the "Retrieve docs with Couchbase Search Vector" node. The tool searches a Couchbase database for relevant points of interest based on vector embeddings.
6.  **Couchbase Vector Search Retrieval**: The "Retrieve docs with Couchbase Search Vector" node connects to Couchbase and perform vector similarity search. The results are sent back to the AI agent.
7. **Data Ingestion:** The workflow also has the capability to ingest data into Couchbase.
8. **Webhook:**  It uses a "Webhook" node to accept new points of interest.
9. **Data Processing and Vectorization:** When the "Webhook" node receives a POST request, the data is processed by "Default Data Loader", "Recursive Character Text Splitter", and "Generate OpenAI Embeddings using text-embedding-3-small1" nodes. It uses OpenAI's embedding model to generate a vector embedding of point of interest description.
10. **Couchbase Vector Search Insertion:** The embeddings and the data are inserted in the Couchbase database via the "Insert docs with Couchbase Search Vector" node.

## Services:

-   **Google Gemini API:** Used for the main Large Language Model.
-   **OpenAI API:** Used for generating vector embeddings.
-   **Couchbase:** Used as a vector database to store and search points of interest.

## Hashtags:

#n8n #automation #travelagent #AI #vectorsearch
