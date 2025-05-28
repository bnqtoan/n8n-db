# BambooHR AI-Powered Company Policies and Benefits Chatbot

## Use cases:

- **Employee Self-Service:** Employees can quickly find answers to common HR-related questions about company policies, benefits, and procedures without needing to directly contact HR staff.
- **Onboarding Support:** New hires can use the chatbot to familiarize themselves with company policies, benefits, and find key personnel, thus streamlining the onboarding process.
- **HR Efficiency:** HR staff can reduce the volume of routine inquiries, freeing them up to focus on more complex or strategic tasks.

## How it works:

1.  **Data Ingestion:** The workflow starts by fetching company policies and documents (handbook, 401k, benefits overview, expense policies) from BambooHR. These files are filtered to include only PDFs from the "Company Files" category.
2.  **Data Processing:** The PDF files are downloaded, and their content is converted into embeddings using OpenAI. These embeddings are stored in a Supabase vector store for efficient semantic search.
3.  **Chat Initiation:** An employee initiates a conversation with the chatbot.
4.  **HR AI Agent Interaction:** The employee's query is sent to an HR AI Agent, which uses several tools:
    *   **Vector Store Tool:**  Retrieves relevant information from the company handbook, 401k policies, benefits overview, and expense policies stored in the Supabase vector store.
    *   **Employee Lookup Tool:** An optional tool (implemented as a sub-workflow) that looks up employee details or department information in BambooHR.  It can find an employee by name or retrieve the most senior person in a given department.
5.  **Employee Lookup (Optional):**  If the AI agent needs to identify a specific employee or a department contact, the workflow uses the BambooHR API to search for that person, using BambooHR's API.
6.  **Response Generation:** The AI agent generates a response to the employee's query using the information retrieved from the vector store and, if needed, the employee lookup tool. The final node is responsible for returning the employee name.

## Services:

*   **BambooHR:** HR information system for retrieving company files and employee data.
*   **OpenAI:** AI language model for generating embeddings and powering the chatbot.
*   **Supabase:** Vector store for storing and retrieving document embeddings.

## Hashtags:

#n8n #automation #HR #chatbot #AI
