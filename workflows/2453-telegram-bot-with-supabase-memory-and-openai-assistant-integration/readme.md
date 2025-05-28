# AI Telegram Bot with Supabase Memory

## Use cases:

-   **Customer Support:** Automate responses to common customer inquiries, providing instant support and freeing up human agents for complex issues. The bot remembers previous interactions, offering tailored assistance.
-   **Virtual Assistant:** Offer personalized assistance to users, helping them manage tasks, set reminders, or provide information. The bot can retain context across multiple interactions for a more seamless experience.
-   **Educational Tool:** Create an interactive learning environment where students can ask questions and receive answers from an AI-powered bot. The bot's memory ensures consistent and context-aware responses throughout the learning session.

## How it works:

1.  **Get New Message (Telegram Trigger):** The workflow starts when a new message is received by the Telegram bot.
2.  **Find User (Supabase):** It searches a Supabase database to check if the user (identified by their Telegram ID) already exists.
3.  **If User Exists (If):**
    -   If the user exists, the workflow proceeds to the **Merge** node, using the existing OpenAI thread ID from Supabase.
    -   If the user doesn't exist, the workflow creates a new thread in OpenAI.
4.  **OPENAI - Create thread (HTTP Request):**  A new thread is created in OpenAI's Assistants API.
5.  **Create User (Supabase):** A new user entry is created in the Supabase database, storing the Telegram ID and the newly created OpenAI thread ID.
6.  **Merge (Merge):** Merges the data from the existing user (if found) or the newly created user data with the incoming message data.
7.  **OPENAI - Send message (HTTP Request):** The user's message from Telegram is sent to the specified OpenAI thread.
8.  **OPENAI - Run assistant (HTTP Request):** Triggers the OpenAI assistant to process the message and generate a response.
9.  **OPENAI - Get messages (HTTP Request):** Retrieves the latest messages from the OpenAI thread, including the assistant's response.
10. **Send Message to User (Telegram):** The assistant's response is sent back to the user via the Telegram bot.

## Services:

-   **Telegram:** Used for receiving user messages and sending responses.
-   **OpenAI Assistants API:** Used for creating threads, sending messages to the assistant, running the assistant, and retrieving messages.
-   **Supabase:** Used as a database to store user information, including Telegram ID and OpenAI thread ID, to maintain context across conversations.

## Hashtags:

\#n8n \#automation \#telegrambot \#openai \#supabase \#conversationalai
