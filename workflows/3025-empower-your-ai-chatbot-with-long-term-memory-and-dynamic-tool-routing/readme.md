# 🧠 Give Your AI Agent Chatbot Long Term Memory Tools Router

## Use cases:

- **Personalized Customer Service:** An AI chatbot can remember past customer interactions and preferences to provide tailored support, leading to higher customer satisfaction.
- **Smart Home Automation:** An AI agent can learn user habits and preferences to automate tasks such as adjusting lighting, temperature, and entertainment systems based on long-term memory of user behavior.
- **Enhanced Virtual Assistant:** A virtual assistant can recall important details from previous conversations, appointments, and notes to provide more relevant and helpful assistance to the user.

## How it works:

1.  **Chat Message Received:** The workflow starts when a chat message is received via the "Ⓜ️ When chat message received" trigger or when executed by another workflow through "When Executed by Another Workflow".
2.  **AI Agent Processing:** The message is passed to an OpenAI-powered AI agent ("🤖OpenAI Chat Model", "🧠 AI Agent w/Long Term Memory"), which leverages a window buffer memory ("🤯Window Buffer Memory") for short-term context.
3.  **Tool Decision:** The AI agent decides whether to use a tool like saving or retrieving information based on the system message and then routes this decision in the Memory Tool Router based on the value of "route".
4.  **Memory Management (Save):** If the agent decides to save a memory ("save_memory"), the "Save Long Term Memories" node uses Google Docs to store the memory with the current date and the query from the input.
5.  **Memory Management (Retrieve):** If the agent decides to retrieve a memory ("retrieve_memory"), the "Retrieve Long Term Memories" node retrieves memories from the Google Docs document and responds to the user.
6.  **Sending Memories (Telegram/Gmail):** If the agent decides to send memories via Telegram ("send_memories_to_telegram") or Gmail ("send_memories_to_gmail"), the workflow retrieves the relevant memories from Google Docs, formats the information using "Prepare Telegram Message" and "Prepare Gmail Message" nodes, and sends the formatted content via Telegram or Gmail.

## Services:

-   OpenAI
-   Google Docs
-   Telegram
-   Gmail

## Hashtags:

#n8n #AIagent #LongTermMemory #Automation #Chatbot
