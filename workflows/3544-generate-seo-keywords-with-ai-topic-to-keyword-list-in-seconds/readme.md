# AI Keyword Generator by Gegenfeld

## Use cases:

- **Content Creation:** Generate relevant keywords for blog posts, articles, and website content to improve search engine optimization (SEO).
- **Marketing Campaigns:** Discover high-potential keywords for advertising campaigns (e.g., Google Ads) to target the right audience and reduce costs.
- **Product Research:** Identify popular keywords related to specific products or services to understand market trends and customer interests.

## How it works:

1.  **Input Form:** The workflow starts with a Form Trigger node ("Input Form") that captures user input, likely a topic or product description.
2.  **Set Data from Form:** The "Set Data from Form" node probably stores the form data for later use in the workflow.
3.  **Aggregate Data Points for AI Keyword Agent:** The "Aggregate Data Points for AI Keyword Agent" node likely prepares the input data for the AI Agent by formatting or combining the data.
4.  **Select your Chat Model:** The "Select your Chat Model" node probably configures the LLM to use for the AI agent, likely providing access to Groq.
5.  **AI Keyword Agent:** The "AI Keyword Agent" node, using a Langchain Agent, processes the input and generates a list of relevant keywords.
6.  **Extract and Format:** The "Extract and Format" node transforms the AI Agent's output into a desired format (e.g., a comma-separated list or a JSON object).
7.  **Send Result:** The "Send Result" node uses the Gmail node to send the generated keywords to a specified email address.

## Services:

-   **Groq:** An inference platform is likely used via the n8n-nodes-langchain.lmChatGroq node to power the AI keyword generation.
-   **Gmail:** Sends the generated keywords via email.

## Hashtags:

#n8n #automation #AI #keywords #SEO
