# Integrating AI with Open-Meteo API for Enhanced Weather Forecasting

## Use cases:

- **AI-Powered Travel Planning:** Users can ask the chat for weather forecasts in specific locations to help them decide when and where to travel, leveraging AI to determine the necessary API calls.
- **Educational Workshop:** This workflow serves as a practical example in workshops, demonstrating how to integrate AI with external APIs and use tools/functions with AI models for enhanced data retrieval and analysis.
- **Intelligent Weather Assistant:** Allows users to interact with a weather assistant that intelligently fetches geolocation data and weather forecasts based on their input, providing a seamless conversational experience.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger node. This sets up a public webhook that listens for incoming chat messages.
2.  **AI Agent Orchestration:** The "Generic AI Tool Agent" node receives the chat message and uses its configured language model ("OpenAI Chat Model") to determine the user's intent and which tools to use.
3.  **Geolocation Retrieval:** If the user asks for the weather in a specific city, the AI Agent utilizes the "A tool for inputting the city and obtaining geolocation" node. This node calls the Open-Meteo Geocoding API to find the city's coordinates.
4.  **Weather Forecast Retrieval:** Once the coordinates are obtained, the AI Agent uses the "A tool to get the weather forecast based on geolocation" node. This node calls the Open-Meteo Forecast API to retrieve the weather forecast for the specified location and number of days.
5.  **Chat Memory:** "Chat Memory Buffer" node stores the previous messages in order to keep the context of the conversation.
6.  **AI Model:** "OpenAI Chat Model" responsible for the language model

## Services:

-   **Open-Meteo Geocoding API:** Used to retrieve the latitude and longitude coordinates for a given city name.
-   **Open-Meteo Forecast API:** Used to retrieve weather forecasts for a specific location (latitude and longitude).
-   **OpenAI API:** Used by the "OpenAI Chat Model" node to process the user's request and to decide which tool to use to fulfill the request.

## Hashtags:

#n8n #automation #AI #weather #OpenMeteo #Langchain #AIChatbot
