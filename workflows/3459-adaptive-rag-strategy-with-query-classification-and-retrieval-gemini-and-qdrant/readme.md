# Adaptive RAG

## Use cases

- **Intelligent Customer Support:**  Automatically classify customer inquiries (e.g., factual questions about product specs, analytical requests for comparisons, or opinion-based feedback). Tailor the retrieval strategy to find the most relevant information from product documentation, FAQs, and community forums, providing accurate and helpful answers.
- **Enhanced Research Assistant:** Assist researchers by adapting information retrieval strategies based on the type of research question. For factual questions, focus on precise data; for analytical questions, explore different aspects and perspectives; and for contextual questions, consider the researcher's specific background and focus.
- **Personalized Learning Experience:**  Adapt the learning material retrieval based on the student's query. For example, if a student asks a factual question, retrieve the specific fact from the textbook. If they ask an analytical question, retrieve explanations covering different perspectives or approaches to the topic.

## How it works

This workflow implements an Adaptive Retrieval-Augmented Generation (RAG) approach to answer user queries based on their type:

1.  **Input:** Accepts a `user_query`, `chat_memory_key` (for conversation history), and `vector_store_id` (specifying the Qdrant collection).
2.  **Query Classification:** Classifies the `user_query` into one of four categories: Factual, Analytical, Opinion, or Contextual using a Google Gemini agent.
3.  **Adaptive Strategy Routing:** A `Switch` node routes the workflow based on the classification result.
4.  **Strategy Implementation:**
    -   **Factual:** Rewrites the query for better precision.
    -   **Analytical:** Breaks down the query into sub-questions.
    -   **Opinion:** Identifies different potential perspectives.
    -   **Contextual:** Infers implied context.
5.  **Retrieval Prompt & Output Setup:** A `Set` node prepares a tailored system prompt for the final answer generation based on the original query classification.
6.  **Document Retrieval (RAG):** The `Retrieve Documents from Vector Store` node searches the specified Qdrant collection using the adapted query.
7.  **Context Preparation:** The content from the retrieved documents is concatenated.
8.  **Answer Generation:** The final `Answer` agent generates the response using the tailored prompt, concatenated context, original `user_query`, and chat history.
9.  **Response:** Sends the generated answer back to the user.

## Services

-   Google Gemini API
-   Qdrant Vector Database

## Hashtags

#n8n #RAG #automation #AI #Gemini
