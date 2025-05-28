# Perplexity AI Chat with n8n

## Use cases:

- **AI-Powered Information Retrieval:** Automate the process of fetching and summarizing information from the web using Perplexity AI's search capabilities.
- **Competitive Analysis:** Monitor and compare different platforms or services (e.g., n8n vs. Make) by automatically generating reports from Perplexity AI's insights.
- **AI Chatbot Integration:** Integrate the workflow into a chat interface to get AI-powered answers and insights instantly.

## How it works:

1.  **Trigger:** The workflow starts when you manually trigger it using the "When clicking 'Test workflow'" node.
2.  **Set Parameters:** The "Set Params" node defines the prompts and domains for the Perplexity AI request. It sets the `system_prompt` (role of the AI), `user_prompt` (the actual query), and `domains` (websites to search within).
3.  **Perplexity Request:** The "Perplexity Request" node sends a POST request to the Perplexity AI API using the `sonar` model. It includes the defined prompts and domains in the request body, configured to filter search by the last month. The API key for Perplexity AI is retrieved from the configured generic credential.
4.  **Clean Output:** The "Clean Output" node extracts the relevant content from the Perplexity AI response. It retrieves the AI-generated answer and any citations provided by Perplexity AI.
5.  **Output:** The cleaned output containing the AI-generated answer and citations is ready for further use in other nodes (not shown in this workflow).

## Services:

-   **Perplexity AI API:** Used for generating AI-powered answers and insights.

## Hashtags:

#n8n #automation #AI #PerplexityAI #workflow
