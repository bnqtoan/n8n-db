# Modelo do Chatbot

## Use cases:

- **Customer Service Automation:**  The chatbot can answer customer queries about health insurance plans, providing personalized information based on the customer's profile (age, location, family size, etc.) and the available plans.
- **Lead Qualification:**  The chatbot can gather information from potential customers (leads), such as their age, location, and desired insurance type, to qualify them for specific health insurance products.
- **Product Recommendation:** Based on the user's input and data retrieved from external sources (database, APIs), the chatbot can recommend suitable health insurance plans.

## How it works:

1.  **Chat Trigger:** The workflow starts when a user sends a message to the chatbot via a webhook. The initial message is a greeting from "Jovelino," an AI assistant.
2.  **If Condition:** Checks for the existence of leadData in the input.
3.  **Lead Details Processing (Edit Fields1):** If leadData exists, it formats a message (chatInput) containing user's details (name, age, location, profession, education level, etc.). This message is designed to provide the AI assistant with context about the user, which then triggers the OpenAI node
4.  **AI Interaction (OpenAI):** The formatted message is sent to the OpenAI assistant to generate a response based on the available information.
5.  **AI Interaction (OpenAI2):** When leadData doesn't exists it uses the initial input to get help from an openai
6.  **Chat Memory (Postgres Chat Memory, Postgres Chat Memory1):** The workflow uses Postgres to save the conversation history, the session_id keeps the track of what the user has said.
7.  **Data Retrieval (External API, Knowledge Base, Products in Daatabase):**  Depending on the user's query, the workflow can call:
    *   An external API to retrieve user information using name and birthdate.
    *   A knowledge base API to get information (presumably about pricing and other details) based on modality, state, city, and operator.
    *   A MySQL database to find matching product based on the user's city, state, family size and age.
8.  **Response Generation:** Finally, the chatbot replies to the user with the information obtained from the AI assistant and other services.
9.  **Reply Message Processing (Edit Fields2):** Uses the message from the previous chat step.

## Services:

*   OpenAI: Generates conversational responses.
*   PostgreSQL: Stores the chat history for context.
*   MySQL: Database to find health insurance products.
*   External API (integracao-sed-alb...amazonaws.com): Retrieves user information.
*   Knowledge Base API (quotation.joov.com.br): Retrieves information about pricing and plans.

## Hashtags:

#n8n #chatbot #automation #healthinsurance #AI
