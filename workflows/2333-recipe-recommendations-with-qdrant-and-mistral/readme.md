# HelloFresh Recipe Recommendation AI Agent

## Use cases:

- **Personalized Meal Planning:**  Users can input their dietary preferences, available ingredients, or desired cuisines to receive tailored recipe recommendations from HelloFresh's current weekly menu.
- **Discover New Recipes:**  Explore HelloFresh recipes based on mood or specific needs (e.g., "quick dinners," "vegetarian options," or "comfort food") without manually browsing the entire menu.
- **AI-Powered Cooking Assistance:** Integrate with a voice assistant or chat interface to get real-time recipe suggestions while cooking, making meal selection easier and more interactive.

## How it works:

1.  **Fetch Weekly Menu:** The workflow starts by fetching the current week's HelloFresh UK menu using the `HTTP Request` node, dynamically generating the URL based on the current year and week number.
2.  **Extract Course Data:** The `HTML Extract` and `Code` nodes parse the HTML content to extract available course information from the HelloFresh website.
3.  **Retrieve Recipe Details:** For each course, the workflow retrieves detailed recipe information (description, ingredients, instructions, etc.) using the `HTTP Request` and `HTML Extract` nodes.
4.  **Prepare Documents:** The fetched recipe details are formatted into a structured document using the `Set` node, combining name, description, ingredients, utensils, nutrition information, and instructions.
5.  **Vectorize Recipes with Mistral Embeddings:** The recipes are transformed into vector embeddings using the Mistral Cloud embedding model.
6.  **Store in Qdrant Vectorstore:** The vector embeddings, along with recipe metadata, are stored in a Qdrant vector database, which allows for efficient similarity searches based on user preferences.
7.  **Save to Database:** The original document is saved to an SQLite database.
8.  **AI Agent Interaction:** The workflow exposes a chat interface via a `Chat Trigger` node.  When a user sends a request, the AI Agent, powered by the Mistral Cloud Chat Model, formulates a recommendation query.
9.  **Qdrant Recommendation API:** The query, which includes a `positive` (what the user wants) and a `negative` (what the user does not want) description, is sent to Qdrant's Recommend API.  The API returns a set of relevant recipe IDs, grouped to ensure unique recipe recommendations.
10. **Fetch Recommendations From DB:** The final recipe recommendations are retrieved from the SQLite database using a `Code` node to execute a query.
11. **Respond to User:** The recommended recipes are returned to the user via the chat interface.

## Services:

-   **HelloFresh UK:** For fetching weekly menu and recipe details.
-   **Mistral AI:** For generating vector embeddings and powering the AI Agent.
-   **Qdrant:** Vector database for storing and querying recipe embeddings.
-   **SQLite:** Database for storing the recipe details

## Hashtags:

#n8n #automation #workflow #recipeRecommendation #AIagent
