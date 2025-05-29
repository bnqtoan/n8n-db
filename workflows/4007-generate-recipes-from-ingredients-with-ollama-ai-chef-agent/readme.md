# Chef Agent

## Use cases:

-   **Recipe Suggestion Based on Available Ingredients:** A user can input the ingredients they have on hand, and the workflow suggests recipes that can be made with those ingredients.
-   **Interactive Cooking Assistant:** The workflow acts as a conversational cooking assistant, providing recipe ideas and adapting suggestions based on user feedback and available ingredients.
-   **Meal Planning Aid:** Users can use the workflow to get ideas for meals they can prepare, especially when trying to use up specific ingredients.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a webhook receives data (likely a list of ingredients from a user). The "Webhook" node listens for incoming requests at a specified path ("lets-cook").
2.  **AI Agent:** The "Chef AI Agent" node, powered by Langchain, receives the ingredient list and instructions, using a system message to act as a cooking assistant.
3.  **Language Model (Ollama Chat Model):** The AI Agent uses the Ollama Chat Model to process the input and generate recipe suggestions based on the available ingredients.
4.  **Memory (Simple Memory):** The "Simple Memory" node maintains a context of previous interactions, allowing the agent to remember past ingredients and user preferences.
5.  **AI Tool (Think):** The "Think" node allows the agent to utilize it's AI Tool
6.  **Response:** The "Respond to Webhook" node sends the generated recipe suggestions back to the user via the webhook.

## Services:

-   **Ollama:** A service used for local LLM (Large Language Model) inference.
-   **Langchain:** A framework for building applications powered by language models.

## Hashtags:

#n8n #automation #workflow #langchain #recipe #AI
