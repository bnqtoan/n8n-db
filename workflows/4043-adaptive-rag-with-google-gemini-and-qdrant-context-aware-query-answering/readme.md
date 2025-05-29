# RAG 2.0 - Answer Architecture

## Use cases:

- **Intelligent Customer Support:** Dynamically adapts to different types of customer inquiries (factual, analytical, opinion-based, contextual) to provide the most relevant and accurate information, improving customer satisfaction.
- **Adaptive Knowledge Base Search:** Enhances knowledge base search functionality by classifying user queries and applying tailored retrieval strategies. This allows for more precise, comprehensive, or context-aware search results based on the nature of the question.
- **Personalized Learning Experiences:** In educational settings, this workflow can classify student questions and tailor the information retrieval process to match their learning style or the specific context of their query, fostering a more engaging and effective learning environment.

## How it works:

This workflow implements an Adaptive Retrieval-Augmented Generation (RAG) approach. It classifies user queries into categories (Factual, Analytical, Opinion, or Contextual) and applies different retrieval and generation strategies based on the query type to provide more relevant and tailored answers from a knowledge base stored in a Qdrant vector store.

1.  **Input Trigger:** The workflow is triggered either via a built-in chat interface or by another n8n workflow. It expects inputs such as `user_query`, `chat_memory_key` (for conversation history), and `vector_store_id` (specifying the Qdrant collection).
2.  **Query Classification:** A Google Gemini agent (`Query Classification`) analyzes the `user_query` and classifies it into one of four categories:
    *   Factual: Seeking specific, verifiable information.
    *   Analytical: Requiring comprehensive analysis or explanation.
    *   Opinion: Asking about subjective matters or seeking diverse viewpoints.
    *   Contextual: Dependent on user-specific or implied context.
3.  **Adaptive Strategy Routing:** A `Switch` node routes the workflow based on the classification result from the previous step.
4.  **Strategy Application (Query Adaptation):** Depending on the routing, a specific Google Gemini agent adapts the query or approach:
    *   **Factual Strategy:** Rewrites the query for better precision by focusing on key entities (`Factual Strategy - Focus on Precision`).
    *   **Analytical Strategy:** Breaks down the main query into multiple sub-questions to ensure comprehensive coverage (`Analytical Strategy - Comprehensive Coverage`).
    *   **Opinion Strategy:** Identifies different potential perspectives or approaches related to the query (`Opinion Strategy - Diverse Perspectives`).
    *   **Contextual Strategy:** Extracts the implied context needed to answer the query effectively (`Contextual Strategy - User Context Integration`).
    *   Each strategy path uses its own chat memory buffer for the adaptation step.
5.  **Retrieval Prompt and Output Setup**: Based on the *original* query classification, a `Set` node (`Factual/Analytical/Opinion/Contextual Prompt and Output`, linked through `Set Prompt and Output` node) prepares:
    *   The output from the strategy step (e.g., rewritten query, sub-questions, perspectives).
    *   A system prompt tailored for the final answer generation agent, specifying how it should behave based on the query type (e.g., focus on accuracy for Factual, present diverse opinions for Opinion).
6.  **Document Retrieval (RAG):** The `Retrieve Documents from Vector Store` node uses the adapted query/output from the strategy step to search the specified Qdrant collection (`vector_store_id`). It retrieves the most relevant document chunks using Google Gemini embeddings (vectors).
7.  **Context Preparation:** The content from the retrieved document chunks is concatenated to create a single context block for the final answer generation (`Concatenate Context`).
8.  **Answer Generation:** The final `Answer` agent (powered by Google Gemini) generates the response. It uses:
    *   The custom system prompt set in step 5.
    *   The concatenated context from the retrieved documents (step 7).
    *   The original `user_query`.
    *   Shared chat history (`Chat Buffer Memory`, using `chat_memory_key`).
9.  **Response:** The generated response is sent back to the user via the `Respond to Webhook` node.

## Services:

*   Google Gemini (via n8n Langchain nodes)
*   Qdrant Vector Store

## Hashtags:

#n8n #automation #RAG #adaptiveRAG #AI
