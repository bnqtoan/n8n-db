# AI Agent to chat with you Search Console Data, using OpenAI and Postgres

## Use cases:

- **SEO Performance Monitoring:** Users can ask the AI agent about the performance of their website in Google Search, such as "What were the top queries for my site last month?" or "How many clicks did my homepage receive last week?". The agent will fetch and present the data in a user-friendly format.
- **Content Optimization:** Users can identify underperforming content by asking questions like "Which pages have the lowest click-through rate?" or "What are the trending keywords for my blog?". This information can be used to optimize existing content or create new content that targets relevant keywords.
- **Troubleshooting Search Visibility:** Users can diagnose issues affecting their website's visibility in search results by asking questions such as "Has there been a drop in impressions for my site recently?" or "Are there any crawl errors reported in Search Console?". The agent can provide insights and suggest potential solutions.

## How it works:

1.  **Webhook Trigger:** The workflow is initiated by a webhook (`Webhook - ChatInput`) that receives user input (chatInput) and a session ID. Basic authentication is used for security.
2.  **Data Preparation:** The `Set fields` node extracts the `chatInput` and `sessionId` from the webhook and formats the current date.
3.  **AI Agent Interaction:** The `AI Agent` node, powered by OpenAI (`OpenAI Chat Model` node), processes the user input, leveraging a system prompt to guide the conversation. The agent is designed to understand user needs, confirm data requirements, and construct an API call to the Search Console. Chat history is stored in a Postgres database (`Postgres Chat Memory` node).
4.  **Tool Call:** When the AI agent determines it needs to retrieve data (either the list of websites or custom insights), it calls the `Call Search Console Tool` sub-workflow. This sub-workflow is triggered by the `Tool calling` node.
5.  **API Call Construction:** The `Set fields - Consruct API CALL` node prepares the necessary parameters for the Google Search Console API call based on the AI Agent request. A `Switch` node then directs the flow to either retrieve the list of websites or custom insights.
6.  **Search Console API Interaction:** Based on the request type the workflow executes `Search Console - Get Custom Insights` or `## Search Console - Get List of Properties` to fetch the data using the Search Console API. An OAuth2 authentication is used to get the data.
7.  **Data Formatting:** The response from the Search Console API is formatted into an array via the `Set fields - Create searchConsoleDataArray` nodes.
8.  **Response Aggregation:** The array is aggregated by the `Array aggregation - response to AI Agent` nodes into a single `response` field.
9.  **Response to User:** Finally, the `Respond to Webhook` node sends the formatted data back to the user.

## Services:

-   **Google Search Console API:** Used to retrieve website data and performance insights.
-   **OpenAI API:** Powers the AI Agent for understanding user queries and generating responses.
-   **PostgreSQL:** Used to store chat history for context in ongoing conversations.

## Hashtags:

#n8n #automation #workflow #AIagent #searchconsole
