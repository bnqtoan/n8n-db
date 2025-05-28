# MongoDB Agent

## Use cases:

- **Movie Recommendation Chatbot:** Users can chat with an AI agent to get movie recommendations based on specific criteria (e.g., genre, rating, actors) extracted from a MongoDB database.
- **Favorite Movie Logging:** Users can add movies to their favorites list by confirming their choice to the AI agent, which then inserts the movie title into a separate database collection.
- **Personalized Content Discovery:** An assistant can be embedded into a website or application, allowing users to discover content from a MongoDB database using natural language queries.

## How it works:

1.  **Chat Input:** The workflow starts with the "When chat message received" node, which triggers the workflow upon receiving a chat message via a webhook.
2.  **AI Agent Processing:** The "AI Agent - Movie Recommendation" node uses the Langchain framework to process the chat input, understand the user's request, and decide which tool to use.  It's configured with a prompt to act as an assistant for movies. The agent is designed to call tools for MongoDB queries or favorite movie insertion.
3.  **MongoDB Query (if needed):** If the AI agent determines a need to query the MongoDB database, it uses the "MongoDBAggregate" node. The AI Agent crafts a MongoDB aggregation pipeline based on the user's request and the tool description. This node executes the generated pipeline against the `movies` collection.
4.  **Favorite Movie Insertion (if needed):** If the user confirms a favorite movie, the AI Agent uses the "insertFavorite" node, which triggers the "insertMongoDB" workflow (specified by its ID). This node inserts the provided movie title into the favorites collection.  The AI Agent extracts the movie title from the user's confirmation message and passes it to the "insertFavorite" tool.
5.  **Chat Model for Response:** The "OpenAI Chat Model" node is used by the AI agent to generate human-like responses based on the data retrieved from MongoDB and the current context.
6.  **Contextual Memory:** The "Window Buffer Memory" node is used for maintaining the context of the conversation with the user.

## Services:

-   **MongoDB:** A NoSQL database used to store movie data and favorite movies.
-   **OpenAI:** Provides the language model for understanding user requests and generating responses.

## Hashtags:

#n8n #automation #MongoDB #AIagent #movieRecommendation
