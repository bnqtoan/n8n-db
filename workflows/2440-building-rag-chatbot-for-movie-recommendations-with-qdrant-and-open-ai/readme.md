# Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI

## Use cases:

- **Personalized Movie Recommendations:** Allow users to get movie suggestions based on their likes and dislikes expressed through descriptive text.
- **Chatbot Integration:** Integrate the movie recommendation workflow into a chatbot for interactive movie discovery.
- **Refined Search:** Improve movie search results by using natural language processing to understand the nuances of user requests.

## How it works:

1.  **Data Loading:**
    - The workflow starts by fetching a CSV file containing movie data from a GitHub repository using the `GitHub` node.
    - `Extract from File` node parses the CSV data.
    - The extracted data is then processed for embedding and storage in Qdrant.
2.  **Embedding Generation:**
    - `Embeddings OpenAI` node generates embeddings for movie descriptions using OpenAI's embedding model.
    - `Default Data Loader` node prepares the movie description as a document, and the `Token Splitter` node splits the documents into chunks.
3.  **Vector Store Insertion:**
    - `Qdrant Vector Store` node stores the generated embeddings and movie metadata in a Qdrant vector database.
4.  **Recommendation Request Processing (triggered by chat message):**
    - `When chat message received` node receives user input.
    - `AI Agent` node is used to orchestrate the recommendation flow.
    - `Window Buffer Memory` node stores previous conversations to keep a context.
    - `Call n8n Workflow Tool` triggers the main recommendation workflow by forwarding the user query.
    - `Execute Workflow Trigger` node starts a sub-workflow.
5.  **Recommendation Workflow (sub-workflow):**
    - The user's positive and negative movie preference examples are sent to `Embedding Recommendation Request with Open AI` and `Embedding Anti-Recommendation Request with Open AI` nodes. These nodes use the OpenAI API to generate embeddings of the request.
    - `Extracting Embedding` nodes extract the generated embeddings.
    - `Calling Qdrant Recommendation API` node queries the Qdrant vector database for movie recommendations based on the generated embeddings.
    - `Retrieving Recommended Movies Meta Data` node retrieves the metadata of the recommended movies.
    - `Selecting Fields Relevant for Agent` extracts the required fields from Qdrant's response.
    - Finally, the workflow aggregates all information in one `Aggregate` node, and returns the result.

## Services:

-   **GitHub:** Used for fetching the movie dataset from a repository.
-   **OpenAI:** Used for generating embeddings of movie descriptions and user queries.
-   **Qdrant:** Used as a vector database to store movie embeddings and perform similarity searches for recommendations.

## Hashtags:

#n8n #RAG #chatbot #MovieRecommendations #AI #OpenAI #Qdrant #VectorDatabase #Automation #Workflow
