# MyAIAgentTeam:Email,Meeting,WebSearch,Notion,Tweet,RAG_PUBLIC

## Use cases:

- **AI-Powered Personal Assistant:** Automate tasks such as managing emails, scheduling meetings, creating notes, and posting updates on social media, all through a Telegram interface.
- **Content Creation and Dissemination:** Generate content using OpenAI, perform web searches with Tavily, and automatically post it to X (Twitter) or save it to Notion.
- **RAG-Enhanced Information Retrieval:** Implement Retrieval-Augmented Generation (RAG) to answer questions using up-to-date information from a vector store (Pinecone) combined with web search results, providing more accurate and context-aware responses.

## How it works:

1.  The workflow starts with a **Telegram Trigger**, which listens for incoming messages from a Telegram bot.
2.  The **Switch** node routes the incoming message based on its type (text, audio, image, etc.).
    *   If the message is text, it goes through "Edit Fields\_Text" and then to AI Agent.
    *   If the message is audio, it gets downloaded via the "DownloadAudio" node, transcribed by **OpenAI**, processed by "Edit Fields\_Audio", and then sent to the **AI Agent**.
    *   If the message is an Image, it processed by **OpenAI1**, processed by "Edit Fields\_Image", and then sent to the **AI Agent**.
3.  The **AI Agent** node is the core of the workflow. It uses a Large Language Model (LLM) powered by **GPT** and has access to various tools. These tools include:
    *   **Gmail Tools:** Get Emails, Send Email, Create Draft, Email Reply, Get Labels, and Label Emails.
    *   **Google Calendar Tools:** Create Event with Attendee, Create Event, Get Events, Delete Event, and Update Event.
    *   **Google Sheets Tools:** Get Contact and Add Contact.
    *   **Tavily WebSearch:** To perform web searches.
    *   **Twitter Tool:** Post to X.
    *   **Notion Tool:** Take notes in Notion.
    *   **Pinecone Vector Store:**  For Retrieval-Augmented Generation (RAG).
4.  The **AI Agent** processes the message and, based on the input and the defined tools, executes the appropriate action.
5.  The final result is sent back to the user via the **Telegram** node.
6.  "Window Buffer Memory" node give memory to AI Agent.
7.  The "Think" node is also part of the "AI Agent" tool chain.
8.  **Embeddings OpenAI** and **Pinecone Vector Store** used for "RAG_PUBLIC" use case.

## Services:

*   Telegram
*   OpenAI
*   Gmail
*   Google Calendar
*   Google Sheets
*   Tavily Web Search
*   X (Twitter)
*   Notion
*   Pinecone

## Hashtags:

#n8n #automation #AIagent #workflow #RAG
