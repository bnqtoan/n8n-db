# Business Travel AI Agent - AI-Powered Travel Assistant

## Use cases:

- **Instant Travel Planning:**  A user can quickly plan a business trip by simply sending a voice message to a Telegram bot, specifying their travel needs. The AI agent automatically extracts the key information and searches for flights and hotels.
- **Hands-Free Booking:**  Ideal for busy professionals who need to arrange travel on the go. They can dictate their requirements without having to manually input data into multiple travel websites.
- **Personalized Travel Recommendations:**  The AI agent learns from past interactions and can tailor travel suggestions to individual preferences (e.g., preferred airlines, hotel types, or locations).

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message (voice or text) to the Telegram bot.
2.  **Verify Message Type:** The workflow verifies if the message type is supported (voice or text).
3.  **Telegram (Voice Retrieval):** If the message is a voice message, this node retrieves the voice message file from Telegram.
4.  **OpenAI (Transcription):** The voice message is then transcribed into text using OpenAI's speech-to-text capabilities.
5.  **Edit Fields:** Edit fields and set the values for the aggregate node.
6.  **Aggregate:** Aggregates data into a single item.
7.  **Information Extractor:** This node uses an AI (powered by the OpenAI Chat Model) to parse the user's message and extract structured travel information like origin, destination, dates, and accommodation needs.
8.  **Search Flights:** The extracted travel parameters are used to query the SerpAPI Google Flights integration, finding available flight options.
9.  **Search Hotels:** If accommodation is required, this node queries the SerpAPI Google Hotels integration to find suitable hotels at the destination.
10. **Window Buffer Memory:** Maintains conversation context by storing recent interactions between the user and the AI assistant.
11. **Business Travel Agent:** This node combines all gathered travel information (flights, hotels, user's message) and generates a formatted travel recommendation using the DeepSeek Chat Model.
12. **Response:** The final travel recommendation is sent back to the user via Telegram.
13. **Unsupported Message Type:** If the message is not supported, a message is sent via Telegram.

## Services:

-   **Telegram:** For receiving user requests and sending travel recommendations.
-   **OpenAI:** For audio transcription and AI model capabilities.
-   **SerpAPI (Google Flights & Hotels):**  For searching flight and hotel options.
-   **DeepSeek Chat Model:** AI model for Business Travel Agent.

## Hashtags:

#n8n #automation #travel #AI #Telegram
