# Chat Message Buffer and Consolidation Workflow

## Use cases:

- **Chatbot message aggregation:** Consolidate multiple user messages within a specified timeframe before sending them to a language model for processing, optimizing API usage and reducing individual request overhead.
- **Inactivity-based summarization:** Trigger a summarization or analysis of buffered messages when a user is inactive for a certain period, providing a contextual overview of the conversation.
- **Threshold-based processing:** Process a batch of chat messages once a certain number of messages have been received, ensuring that the language model has enough context for a comprehensive response.

## How it works:

This workflow buffers incoming chat messages in Redis and processes them either after a period of inactivity or when a message count threshold is reached. Here's a breakdown:

1.  **Input:** The workflow is triggered either by a "When chat message received" event, or by an "Execute Workflow" event, both of which receives a `context_id` and `message`. The first one simulates the input.
2.  **Message Buffering:** Incoming messages are stored in a Redis list (`buffer_in:{context_id}`). Metadata, including the timestamp, is associated with each message. It also increments the buffer_count and sets a "last_seen" timestamp with a time-to-live (TTL).
3.  **Waiting Flag Check:** Workflow checks for a `waiting_reply:{context_id}` flag in Redis, it SETs it to `true` with TTL `waitSeconds`.
4.  **Compute waitSeconds:** Determines the amount of time to wait for a message.
5.  **Inactivity and Count Check:** The workflow periodically checks if a user has been inactive for longer than `waitSeconds` or if the `buffer_count` has reached a threshold. It gets from Redis the `last_seen` and the `buffer_count` values.
6.  **Buffer Retrieval:** If either the inactivity or threshold condition is met, the workflow retrieves all buffered messages from Redis (`buffer_in:{context_id}`).
7.  **Information Extraction:** The `Information Extractor` node (LangChain) consolidates all messages.
8.  **Cleanup:** After processing, the workflow clears the `buffer_in:{context_id}`, `buffer_count:{context_id}` and `waiting_reply:{context_id}` keys from Redis to reset the buffer.

## Services:

-   **Redis:** Used for storing and managing chat message buffers, last seen timestamps, waiting reply flags, and message counts.
-   **OpenAI API (via LangChain):** Used for extrating information and consolidated messages.

## Hashtags:

#n8n #chatbots #automation #messageaggregation #redis
