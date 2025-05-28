# Telegram Chat with Buffering

## Use cases

- **Improved Chatbot Experience:** Allows users to send multiple messages in quick succession, which are then treated as a single, coherent conversation by an AI agent, providing a more natural and context-aware interaction.
- **Handling Interrupted Input:**  Useful when users might send incomplete information in multiple messages. The workflow buffers these messages, ensuring the AI agent receives the complete input before generating a response.
- **Processing Multi-Part Queries:** Enables users to break down complex requests into smaller, more manageable messages without losing context, which can be helpful for tasks like ordering items or filling out forms.

## How it works

1.  **Receive Message:** The workflow is triggered when a user sends a message to a Telegram bot via the `Telegram Trigger` node.
2.  **Add to Queued Messages:** The incoming message details (user ID, message text, and message ID) are stored in a Supabase PostgreSQL table named `message_queue` using the `Supabase` node. This acts as a buffer for incoming messages.
3.  **Wait 10 Seconds:** The workflow pauses for 10 seconds, allowing time for the user to send additional messages. The wait time is controlled by `Wait` node.
4.  **Get Queued Messages:** After the wait period, the workflow retrieves all messages from the `message_queue` table for the specific user who triggered the workflow.
5.  **Sort by Message ID:** The retrieved messages are sorted by their message ID to maintain the correct order of conversation.
6.  **Check Most Recent Message:** Compares the most recent message ID with the current message ID to ensure only the newest messages are processed, preventing duplicate processing.
7.  **Delete Queued Messages:** All messages from the `message_queue` belonging to the user are deleted, clearing the buffer.
8.  **Aggregate:** The individual messages are combined into a single string, separated by line breaks.
9.  **AI Agent:** The aggregated message is passed to the `AI Agent` node with Postgres Chat Memory, using the OpenAI Chat Model for processing.
10. **Reply:** The AI agent's response is sent back to the user via the Telegram bot using the `Telegram` node.

## Services

-   **Telegram:** Used for sending and receiving messages.
-   **Supabase:** Used as a database to store and manage the message queue.
-   **OpenAI:** Powers the AI agent with language model.
-   **PostgreSQL:** The database used to save chat memory from the AI agent.

## Hashtags

#n8n #automation #telegram #chatbot #ai
