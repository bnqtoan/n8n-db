# (G) LineChatBot + Google Sheets (as a memory)

## Use cases:

- **Personal AI Assistant on LINE:** Allows users to have a conversation with an AI assistant ("ลลิตา") directly within LINE, where the conversation history is stored and used to provide context-aware responses.
- **Customer Support Chatbot:** Implement a basic customer support chatbot on LINE, answering frequently asked questions and providing assistance based on previous interactions.
- **Language Learning Buddy:** Practice language skills with an AI chatbot on LINE that remembers previous conversations, enabling more personalized and effective language learning experiences.

## How it works:

1.  **Webhook (Line Trigger):** Receives messages sent to the LINE Official Account via a webhook.
2.  **Edit Fields (Prepare LINE data):** Extracts relevant information from the LINE message, such as the user's message and reply token.
3.  **Get History (Retrieve chat history from Google Sheets):** Retrieves the user's previous conversation history from a Google Sheet, using the user ID as a key.
4.  **Prepare Prompt (Construct AI Prompt):** Constructs a prompt for the AI Agent, including the retrieved conversation history and the current user message, to provide context for the AI's response.
5.  **AI Agent (LLM with prompt):** Sends the constructed prompt to the AI Agent, which utilizes the Google Gemini Chat Model to generate a response. The system message defines the AI personality as "ลลิตา".
6.  **Split History (Data cleaning to archive long conversation):** Store message and responses in Google Sheets. If the current amount of conversation exceeds Google Sheet cell limits, split conversation to other columns for archiving.
7.  **Save History (Save to Google Sheets):** Saves the updated conversation history (including the user's message and the AI's response) to the Google Sheet, archiving older messages if the history exceeds a certain length.
8.  **HTTP Request (Send it back to Line):** Sends the AI's response back to the user on LINE using the LINE Messaging API.

## Services:

-   LINE (via LINE Messaging API)
-   Google Sheets
-   Google Gemini Chat Model

## Hashtags:

#n8n #automation #chatbot #line #googlesheets #llm
