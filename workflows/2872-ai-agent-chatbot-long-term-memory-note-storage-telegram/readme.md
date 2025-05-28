# 🤖🧠 AI Agent Chatbot + LONG TERM Memory + Note Storage + Telegram

## Use cases:

1.  **Personal AI Assistant:** Create a personalized AI assistant that remembers user preferences, important dates, and specific instructions to provide contextually relevant and helpful responses via Telegram.
2.  **Customer Support Chatbot:** Implement a chatbot that can handle customer inquiries, store important information from interactions, and provide consistent and informed support.
3.  **Information Retrieval System:** Build a system that allows users to store and retrieve notes and long-term memories through a conversational interface, enhancing information management and recall.

## How it works:

1.  **Receive Chat Message:** The workflow starts when a new message is received via Telegram (`When chat message received` node).
2.  **Retrieve Long-Term Memories & Notes:** The workflow retrieves long-term memories and notes from Google Docs (`Retrieve Long Term Memories` and `Retrieve Notes` nodes).
3.  **Merge Information:** The retrieved memories and notes are merged with the chat message.
4.  **AI Agent Processing:** The `AI Tools Agent` node uses the chat message, retrieved memories, and notes, to create a context-aware response. It uses a defined system message to guide its behavior, including rules for memory and note management. The agent utilizes the `gpt-4o-mini` node for LLM functionality.
5.  **AI Tools & Memory Management:**
    *   The AI Agent can leverage tools to `Save Long Term Memories` and `Save Notes`. These tools update Google Docs with newly extracted information.
    *   `Window Buffer Memory` node keeps track of recent conversations for context.
6.  **Respond via Telegram:** The AI agent's response is sent back to the user via Telegram (`Telegram Response` node). Additionally, `Chat Response` node create `output` variable.
7.  **Save Memories**: The new memories and notes are saved to a Google Docs document with `Save Long Term Memories` and `Save Notes` nodes.

## Services:

*   Telegram
*   Google Docs
*   OpenAI API (or DeepSeek API)

## Hashtags:

#n8n #automation #AIagent #chatbot #longtermmemory
