# Automatizacion X

## Use cases:

- **Content Creation for Twitter:** Automatically generate engaging tweet threads based on a chat message, saving time and effort for social media management.
- **Interactive Storytelling on Twitter:** Create narrative tweet threads where each tweet connects to the previous one, fostering audience interaction and engagement.
- **Personalized Twitter Updates:** Automatically craft tweets in a first-person, conversational style, reflecting a unique personality and perspective.

## How it works:

This workflow automates the creation of Twitter threads from a starting chat message. Here's a breakdown:

1.  **Trigger:** The workflow is initiated when a chat message is received via the "When chat message received" trigger.
2.  **Agent X (AI Agent):** An AI agent is responsible for generating the tweet thread. It uses a defined role as a tweet writer, and constraints on tweet length (270 characters max).
    *   System Message: The agent has a system message which defines it's role, and provides details for generating the thread.
    *   Tools: Uses `first tweet` and `hilo` (twitter tools), to generate tweets.
3.  **OpenAI Chat Model:** The AI agent uses the OpenAI's `gpt-4o` model to generate the tweets.
4.  **Memory:** The `Simple Memory` node stores the conversation history to maintain context across multiple tweets.
5.  **First Tweet:** The "first tweet" node publishes the initial tweet of the thread to Twitter.
6.  **Hilo (Subsequent Tweets):** The "hilo" node creates subsequent tweets in the thread, replying to the previous tweet to form a coherent conversation.

## Services:

-   **Twitter:** For posting and threading tweets.
-   **OpenAI:** For generating tweet content using the gpt-4o model.

## Hashtags:

#n8n #automation #twitter #ai #contentcreation
