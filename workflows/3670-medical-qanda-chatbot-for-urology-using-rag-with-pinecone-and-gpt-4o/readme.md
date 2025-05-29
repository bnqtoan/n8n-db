# Medical Q&A Assistant for Urology using RAG with Pinecone and GPT-4o

## Use cases:

- **Providing Initial Information on Urology and Andrology Topics:** Patients can ask questions about common urological or andrological conditions, symptoms, and potential causes, receiving instant, verified information in Vietnamese.
- **Pre-Appointment Consultation Support:** Users can get preliminary information and have some of their questions answered before seeing a doctor, leading to more productive in-person consultations.
- **Answering Frequently Asked Questions (FAQs):** The assistant can handle common inquiries, freeing up medical staff to focus on more complex cases.

## How it works:

1.  **Trigger:** The workflow starts when a user sends a message to the chatbot via the "When chat message received" trigger node. The system is pre-configured to give initial instructions.
2.  **AI Agent:** The "AI Agent" node receives the user's input and formulates a query based on the provided system message, which defines its role as a urology and andrology expert, and contains a strict instruction to answer **only** using the data gathered from the vector database.
3.  **OpenAI Chat Model:** Uses GPT-4o-mini to transform input embeddings for Pinecone to use in vector search.
4.  **Simple Memory:**  The "Simple Memory" node stores the conversation history for each user using a unique session ID. This allows the chatbot to maintain context over multiple turns.
5.  **Pinecone Vector Store:** The "Pinecone Vector Store" node connects to a Pinecone vector database ("namkhoaa2z") containing medical knowledge related to urology and andrology. It searches for relevant documents based on the user's query.
6.  **Embeddings OpenAI:** Transforms input into embeddings for Pinecone to use in vector search.
7.  **Answer questions with a vector store:** The "Answer questions with a vector store" node receives context from the vector database and returns relevant information to the AI agent.
8.  **AI Agent:** The "AI Agent" node receives the information retrieved from the vector store by RAG principles and generates an answer that follows specific response guidelines (clear, simple, informative, etc) and delivers a friendly closing/ Call To Action in Vietnamese for the user, recommending the user contact the doctor for specialist advice.
9.  **Reply:** The chatbot responds to the user with the generated answer.

## Services:

-   **Pinecone:** A vector database used for storing and retrieving medical knowledge.
-   **OpenAI:** Provides the GPT-4o-mini language model for understanding and generating human-like text.

## Hashtags:

#n8n #automation #urology #andrology #chatbot
