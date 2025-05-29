# 🤖 AI Personal Assistant with GPT-4o, Memory & Scheduling for WhatsApp

## Use cases:

- **WhatsApp-based AI Assistant:** Provides users with an AI-powered personal assistant directly within WhatsApp, capable of answering questions, scheduling appointments, and managing emails.
- **Knowledge Base Integration:** Allows users to add and retrieve information from a custom knowledge base, enabling the assistant to provide context-aware and personalized responses.
- **Automated Task Management:** Automates tasks such as summarizing documents, managing schedules, and handling email interactions through natural language commands.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node, listening for incoming messages from WhatsApp (presumably via a service like Twilio or a custom integration).
2.  **Authentication and Configuration:** Incoming requests are authenticated, and configurations are set, determining the message type.
3.  **Content Processing:**
    *   **File Handling:** If the message contains a file, it's converted to a suitable format, and its content is extracted (e.g., PDF to text). The extracted text is then stored in a vector database (Supabase Vector Store) for later retrieval.
    *   **Text Processing:** If the message is text, it's passed to an OpenAI node for initial processing or directly to the agent.
4.  **Message Classification:** The core logic involves an AI Agent (`classificador_de_intencao`) that classifies the user's intent. This agent is powered by an OpenAI Chat Model and uses a Postgres Chat Memory to maintain conversation history.
5.  **Intent Handling:** Based on the classified intent, the workflow branches to different actions via a Switch node:
    *   **RAG (Retrieval-Augmented Generation):**  Queries a vector store (Supabase Vector Store) to find relevant information. This information, along with the user's query, is fed into another OpenAI Chat Model (`OpenAI Chat Model2`) to generate a response.
    *   **Tool Execution:**  If the intent requires a specific tool, the workflow invokes one of several Langchain Tool Workflow nodes (e.g., `agendamentos` for scheduling, `emails` for email management, `adicionar_conhecimento` for adding to the knowledge base).
6.  **Response Generation:** An AI Agent (`recepcionista`) orchestrates the interaction, using tools, memory, and potentially RAG to respond to the user's query. The agent utilizes OpenAI Chat Model, Postgres Chat Memory, and various tool workflows for specific tasks.
7.  **Memory Update:** The conversation history is stored in a Postgres Chat Memory to provide context for future interactions.

## Services:

-   **OpenAI:** Utilized for language model processing, embeddings, and chat completion.
-   **Supabase:** Used as a vector store to store and retrieve document embeddings and for database operations.
-   **PostgreSQL:** Used to store chat memory and RAG data.
-   **WhatsApp:** as the main communication channel.

## Hashtags:

#n8n #AI #WhatsApp #Automation #PersonalAssistant
