# AcuityScheduling Support Chatbot

## Use cases:

- **Automated Customer Support:**  Provide instant answers to customer inquiries about AcuityScheduling features, setup, and troubleshooting, reducing the workload on human support agents.
- **Internal Help Desk:** Empower employees to quickly find answers to their questions about using AcuityScheduling within the organization.
- **Contextual Help within Application:** Integrate the chatbot into the AcuityScheduling platform to provide users with real-time assistance and guidance while they are using the application.

## How it works:

1.  **Chat Trigger:** The workflow starts when a user sends a message via the "When chat message received" trigger.
2.  **AcuityScheduling Support Chatbot (AI Agent):** This node acts as the main AI agent, orchestrating the response. It's pre-configured with a system message defining its role as an AcuityScheduling support assistant.
3.  **OpenAI Chat Model:** The agent uses the OpenAI Chat Model (gpt-4o-mini) to understand the user's query and generate a response.
4.  **Simple Memory:** The "Simple Memory" node stores conversation history, allowing the chatbot to maintain context and provide more relevant answers.
5.  **Knowledgebase Tool:** If the agent determines the user's question requires information from the AcuityScheduling support knowledge base, it uses the "Knowledgebase Tool" to trigger a sub-workflow ("KnowledgeBase Tool Subworkflow"). The sub-workflow is where the query to the acuity support search API is happening
6.  **KnowledgeBase Tool Subworkflow:**
    *   Receives the query from the AI agent.
    *   Uses the HTTP Request node ("Acuity Support Search API") to query the AcuityScheduling support portal's search API. It sends a POST request with the user's query as a parameter.
    *   The "Has Results?" node checks if the API returned any search results.
    *   If results are found, "Results to Items" splits the array of hits into individual items. "Extract Relevant Fields" extracts the title, body, and URL from each search result.  "Aggregate Response" aggregates the results into a response array.
    *   If no results are found, "Empty Response" creates an empty response array.
7.  **AcuityScheduling Support Chatbot (AI Agent):** The AI Agent receives the support articles, builds a response with links and context, and shares it back to the user via chat.

## Services:

-   **OpenAI:** Used for natural language understanding and response generation.
-   **AcuityScheduling Support Search API (Algolia):** Used to query the AcuityScheduling knowledge base for relevant articles.

## Hashtags:

#n8n #automation #chatbot #AcuityScheduling #AISupport
