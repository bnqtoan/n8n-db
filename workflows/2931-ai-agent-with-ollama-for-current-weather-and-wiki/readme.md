# Conversational Agent with Weather and Wiki Tools

## Use cases:

- **Intelligent Customer Support:**  A user can ask questions about a location, and the agent will automatically retrieve weather information and general knowledge from Wikipedia to provide a comprehensive answer.  For example, "What's the weather like in Paris, and what's the Eiffel Tower?"
- **Travel Planning Assistant:**  Users can ask about potential travel destinations, and the agent will provide weather forecasts and relevant information about the location.
- **Information Retrieval and Summarization:**  The agent can be used to gather information from various sources (Weather API and Wikipedia) based on a user's query and present a concise summary.

## How it works:

1.  **Manual Chat Trigger:** The workflow starts with a "On new manual Chat Message" node, which triggers the workflow when a user sends a message.
2.  **AI Agent:** The "AI Agent" node receives the user's input.  It's configured with a system message that instructs it to use a weather tool and a Wikipedia tool.
3.  **Tools:** The AI Agent utilizes two tools:
    -   **Weather HTTP Request:** The "Weather HTTP Request" node uses the open-meteo API. It is configured to get latitude, longitude, and forecast data. The agent is expected to first determine the coordinates of the location from the user's query.
    -   **Wikipedia:** The "Wikipedia" node is used for general information retrieval.
4.  **Language Model:** The "Ollama Chat Model" node is used as the language model for the agent, running locally, using the llama3.2:latest model.
5.  **Memory:** The "Window Buffer Memory" node stores the last 20 messages of the conversation to maintain context.

## Services:

-   **Open-Meteo API:** Used to fetch weather forecasts.
-   **Wikipedia:** Used for information retrieval.
-   **Ollama:** Used to run the Large Language Model (LLM) locally

## Hashtags:

#n8n #automation #langchain #AIagent #conversationalAI
