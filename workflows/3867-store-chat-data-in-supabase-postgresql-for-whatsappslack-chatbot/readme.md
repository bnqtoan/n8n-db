# Supabase Setup Postgres

## Use cases:

- **Chatbot with Memory:**  Build a chatbot that remembers previous conversations using a Supabase Postgres database as memory storage. This is useful for providing personalized and contextual responses.
- **Personalized Customer Support:**  Create a system to automatically update user information (like name) in your Supabase database based on information extracted during a chat session, enabling more tailored customer support interactions.
- **AI-Powered Q&A with Context:**  Develop an AI-driven question answering system that leverages historical chat data stored in Supabase to provide more accurate and relevant answers.

## How it works:

1. **Trigger:** The workflow starts when you manually click 'Test workflow'.
2. **Set Input Variables:**  The "Set sample Input Variables" node defines sample inputs: `session_id`, `name`, and `chatInput`. These variables represent data received from a chat session.
3. **Gemini Flash 2.0:** The "GeminiFlash2.0" node is the Large Language Model (LLM) that processes the `chatInput`. It uses the Google Gemini model.
4. **Supabase Postgres Database (Memory):**  The "Supabase Postgres Database" node acts as memory. It retrieves relevant chat history from the `whatsapp_messages3` table in Supabase based on the `session_id`. It also saves new chat data for future context.
5. **Sample Agent:** The "Sample Agent" node takes the user input (`chatInput`) and passes it to the "GeminiFlash2.0" node for processing. The memory component from step 4 is integrated here, enhancing the agent's context awareness. The system message makes the AI assistant helpful.
6. **Update additional Values:**  The "Update additonal Values e.g. Name, Address ..." node checks if the user's name is `NULL` in the `whatsapp_messages3` table for the given `session_id`. If it is, it updates the record with the user's name provided in the input variables.

## Services:

- **Supabase:**  A platform providing a Postgres database, authentication, and other backend services.
- **Google Gemini API:**  Google's LLM used for processing and generating text in the chatbot.

## Hashtags:

#n8n #automation #chatbot #supabase #AI #Postgres
