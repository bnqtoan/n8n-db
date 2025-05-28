# Intelligent Web Query and Semantic Re-Ranking Flow

## Use Cases

- **Automated Research:** Automatically gather and rank information from the web based on a user-defined research question, saving time and improving the quality of initial findings.
- **Competitive Intelligence:** Monitor specific industries or competitors by automatically extracting and ranking relevant articles, blog posts, and news items.
- **Content Curation:** Generate a curated list of top-ranked articles and resources on a particular topic for newsletters, blog posts, or internal knowledge bases.

## How it Works

This workflow automates the process of querying the web for information, semantically re-ranking the results, and extracting relevant content. Here's a breakdown of the key steps:

1.  **Webhook Trigger:** The workflow is initiated by a webhook, which receives a research question from the user or another system. The "Webhook" node listens for incoming HTTP requests containing the "Research Question".
2.  **Date & Time:** Capture current date for context.
3.  **Semantic Search - Query Maker:** The research question is fed to a "Semantic Search - Query Maker" node, which uses an LLM chain to intelligently reformulate the question into a more effective search query. This step employs meta-reasoning and multi-chain analysis to optimize the query.
4.  **Brave Web Search Query:** The optimized search query is then sent to the Brave Search API via the "Query" node.  Note that this requires a free API key from Brave Search.
5.  **Query-1 Combined:** This "Code" node extracts the title, URL, and description from each search result provided by Brave Search and aggregates them into a single text string.
6. **Semantic Search - Result Re-Ranker:** The aggregated search results are passed to a "Semantic Search - Result Re-Ranker" node. This node uses an LLM chain to rank the search results based on their relevance to the original research question and extracts the most pertinent information.
7.  **Respond to Webhook:** Finally, the workflow responds to the initial webhook request with a JSON payload containing the titles, links, and descriptions of the top-ranked URLs, along with any extracted information. The response is structured to provide easily accessible and relevant insights.

## Services

-   **Brave Search API:** Used to perform the initial web search based on the formulated query.
-   **Google Gemini(PaLM) Api / Anthropic Claude / OpenAI GPT:** Used for query formulation and semantic re-ranking of search results.

## Hashtags

#n8n #automation #websearch #semanticsearch #LLM