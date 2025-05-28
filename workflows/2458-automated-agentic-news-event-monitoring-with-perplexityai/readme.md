# My Workflow

## Use cases:

*   **Automated News Summary:** Receive daily or weekly summaries of news topics directly in your Gmail inbox.
*   **Customized Content Digest:** Create personalized news reports based on specific keywords or sources, delivered regularly.
*   **AI-Powered Newsletter Generation:** Automatically generate newsletter drafts with concise summaries of relevant articles.

## How it works:

This workflow automates the process of fetching news, summarizing it using AI, and sending it to your Gmail account.

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger node, which defines the frequency (e.g., daily, weekly) at which the workflow will run.
2.  **News Reporter:** Triggers a Langchain Agent node to fetch news articles.
3.  **Perplexity:** Sends a message to a large language model like GPT, summarizing the news.
4.  **Markdown:** Formats the summary.
5.  **Title:** Creates a title from the summary
6.  **Gmail:** Sends the generated news summary to your Gmail account.

## Services:

*   Gmail
*   Perplexity (or similar LLM service using Langchain)

## Hashtags:

#n8n #automation #AI #NewsSummary #Gmail
