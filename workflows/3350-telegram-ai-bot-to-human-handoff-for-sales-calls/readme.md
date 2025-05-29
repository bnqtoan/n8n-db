# My Workflow

## Use cases:

- **Customer Service Automation with Human Fallback:** Automate initial customer interactions through a Telegram bot, collecting necessary information and seamlessly transferring the conversation to a human agent when required.
- **Sales Inquiry Handling:** Qualify leads by gathering key details (name, address, reason for calling) via an AI-powered bot and then route qualified leads to a human sales representative.
- **After-Sales Support with Handoff Option:** Provide automated support for after-sales inquiries, allowing users to request a human agent for complex or unresolved issues.

## How it works:

This workflow automates conversations with users on Telegram, using a state-based approach to manage interactions. It begins with a Telegram Trigger node, which listens for incoming messages. The workflow determines the next step by checking the interaction state stored in Redis.

1.  **State Check:** The "Get Interaction State" node retrieves the current state of the conversation from Redis, determining whether the user is in the "onboarding," "human," or "bot" state.
2.  **Onboarding (if no state or 'onboarding'):** If no state is found or the user is in the "onboarding" state, the "Onboarding Agent" uses a Langchain Agent to gather information from the user (name, address, reason for call). Redis memory is used to save the chat history.
3.  **Information Extraction:** The "Information Extractor" node parses the conversation to extract structured data from the conversation history.
4.  **Human Handoff (if criteria met):** If all required information is collected (checked by the "Has All Criteria?" node), the user is notified, and the conversation is handed off to a human agent using the "Handoff Subworkflow" and “Human Handoff using Send and Wait” nodes. This involves sending a message to a specified Telegram chat with the user's details and session information. The state is set to "human" in Redis.
5.  **Human Interaction:**  While in the "human" state, the bot sends a canned response ("Get Canned Response" node) as it awaits the agent to finish.
6.  **Bot Re-Activation:** The human agent completes the "Human Handoff using Send and Wait" node, providing a summary of the conversation. The "Set Interaction to Bot" node updates the Redis state to "bot." The agent’s memory is updated.
7.  **After-Sales Support (if state is 'bot'):** If the state is "bot," the "After Sales Agent" (another Langchain Agent) handles after-sales inquiries. It uses a "Handoff Tool" that allows the bot to request human intervention if necessary. The chat history is saved in a separate Redis memory instance.
8.  **State Management:** The "Set Interaction to Human" and "Set Interaction to Bot" nodes update the session state in Redis, ensuring the workflow follows the correct path for each user interaction.

## Services:

-   Telegram: For user interaction and message delivery.
-   Redis: For storing and managing conversation states and chat history.
-   OpenAI: For natural language processing and agent functionalities.

## Hashtags:

#n8n #automation #workflow #humanInTheLoop #chatbot
