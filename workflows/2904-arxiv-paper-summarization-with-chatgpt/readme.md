# Webhook | Paper Summarization

## Use cases:

- Automatically summarize research papers from arXiv based on a provided ID.
- Create a personal research assistant that delivers concise summaries of academic papers.
- Integrate with a research management tool to automatically generate summaries for newly added papers.

## How it works:

1.  **Webhook:** Triggers the workflow when a request is sent to the specified webhook URL (`/paper-summarization`). It expects a query parameter named `id` which contains the arXiv paper ID.
2.  **Request to Paper Page:** Retrieves the HTML content of the arXiv paper using the ID received from the webhook.
3.  **Extract Contents:** Extracts the abstract and sections from the HTML content using CSS selectors.
4.  **Split out All Sections:** Splits the extracted sections into individual items.
5.  **Remove useless links:** Cleans up the extracted sections by removing bracketed citations like `[1]`, `[2]`, etc..
6.  **Summarization Chain:** Uses a summarization chain to summarize each section of the paper, powered by an OpenAI Chat Model.
7.  **Aggregate summarzied content:** Combines the summarized content from all sections into a single text.
8.  **Reorganize Paper Summary:** Reformats the aggregated summary into a structured format (Abstract Overview, Introduction, Results, Conclusion) using a prompt instructing an OpenAI model.
9.  **Content Extractor:** Extracts specific parts of the refomatted summary for each section, such as "Abstract Overview," "Introduction," "Results," and "Conclusion," and prepares the content for the final response.
10. **Respond to Webhook:** Sends the extracted summary as a JSON response to the original webhook request.

## Services:

-   arXiv (via HTTP Request)
-   OpenAI

## Hashtags:

#n8n #automation #paperSummarization #arxiv #openai
