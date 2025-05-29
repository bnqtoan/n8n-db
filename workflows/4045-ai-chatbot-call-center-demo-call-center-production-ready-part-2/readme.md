# ☎️ Demo Call Center

## Use cases:

- **Simulated Customer Service:**  Emulate an AI-powered call center to handle customer inquiries about a specific service (e.g., taxi booking).
- **AI-Driven Information Retrieval:**  Allow users to interact with an AI agent to get information, potentially using user-specific data stored in a database.
- **Rate Limited Chat Application:**  Build a chat application that limits the number of interactions a user can have within a specific timeframe, preventing abuse or overuse.

## How it works:

This workflow simulates a demo call center powered by an AI agent, including rate limiting and memory features.

1.  **Trigger:** The workflow is initiated by either a "Flow Trigger" or a "Test Trigger."
2.  **Rate Limiting:** Incoming requests are rate-limited using Redis to control the number of interactions within a specific timeframe. The `Rate Limit` node checks if a user has exceeded the limit (30 chats).  If exceeded, the workflow goes to the `Rated Output` node, informing the user to wait.
3.  **Session Management:** Redis is used to manage user sessions. It retrieves (`Session` node) and stores session data.
4.  **Channel Switching:** Determines if the call should go through a "Provider" or to the "AI Agent" directly.
5.  **AI Agent Interaction:**
    -   The "AI Agent" node orchestrates the interaction with the language model, memory, and tools.
    -   xAI @grok-2-1212 is used as the language model to generate responses.
    -   `Postgres Chat Memory` saves the conversation history to a Postgres database.
    -   "Taxi Service" node uses a sub-workflow to simulate the taxi booking process.
    -   `Load User Memory` and `Save User Memory` read and store user-specific data into a Postgres database.
6.  **Provider Selection**: Determine wich service provider use based on the `Provider Switch`.
7.  **Output:** The final response from the AI Agent or the Taxi Service is sent to the user, followed by an optional "Call Back" workflow execution.

## Services:

-   **Redis:** Used for session management and rate limiting.
-   **Postgres:** Used for storing chat memory and user data.
-   **xAI (Grok-2-1212):** Language model used for generating responses.
-   **Taxi Service (simulated):**  Represents an external service or API for taxi booking.

## Hashtags:

#n8n #automation #callcenter #AIagent #chatbot
