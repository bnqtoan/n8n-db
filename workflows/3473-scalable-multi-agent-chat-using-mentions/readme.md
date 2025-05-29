# Multi-Agent Conversation

## Use cases:

- **Brainstorming and Idea Generation:**  Simulate a team brainstorming session with different AI agents representing various roles (e.g., creative, analytical, technical) to explore diverse perspectives and generate innovative ideas.
- **Customer Service Simulation:** Create a multi-agent system where different agents handle specific aspects of customer inquiries, such as product information, technical support, and order processing, to provide a comprehensive and efficient customer service experience.
- **Educational Role-Playing:** Develop interactive learning scenarios where students can engage in conversations with AI agents representing different historical figures, scientific experts, or literary characters to deepen their understanding of a subject.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" node. This node captures the user's input, including the message content and session information.
2.  **Global and Agent Settings:** The "Define Global Settings" and "Define Agent Settings" nodes define the global context (user information, global system message) and individual AI agent configurations (name, model, system message), respectively.
3.  **Mention Extraction and Agent Selection:** The "Extract mentions" node analyzes the user's message for @mentions of specific agents. If mentions are found, it selects those agents. If no mentions are found, it randomly selects all available agents.
4.  **Looping through Agents:** The "Loop Over Items" node iterates through the selected AI agents.
5.  **Memory Handling:** The "Simple Memory" node uses the Langchain memory buffer to store previous interactions of each sessionId.
6.  **AI Agent interaction:** An "AI Agent" node generates a response based on its defined persona and the user's input.  The agent uses an "OpenRouter Chat Model" configured dynamically with the agent's model and system message.
7.  **Response Combination:** The "Combine and format responses" node gathers the responses from all agents in the loop and combines them into a single, formatted output using horizontal rules as separators.
8.  **Output:** The combined response is returned.

## Services:

-   **OpenRouter:** Used for accessing various LLMs through a unified API.

## Hashtags:

#n8n #automation #workflow #langchain #aiagents
