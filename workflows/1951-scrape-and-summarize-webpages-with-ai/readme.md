# Paul Graham Essay Summarizer

## Use cases:

- **Stay updated on Paul Graham's essays:** Automatically fetch and summarize new essays published on his website, providing a quick overview of his latest thoughts and ideas.
- **Content Curation:** Create a curated collection of essay summaries for research, learning, or sharing with others.
- **Knowledge Management:** Archive summaries of key insights from Paul Graham's essays for personal or team knowledge bases.

## How it works:

1. **Trigger:** The workflow starts when you manually click "Execute Workflow".
2. **Fetch Essay List:** It retrieves the HTML content of Paul Graham's articles page (`http://www.paulgraham.com/articles.html`).
3. **Extract Essay Names:** It parses the HTML to extract the URLs of individual essays using CSS selectors.
4. **Split out into items:** Splits the array of essay URLs into individual items for processing.
5. **Limit to first 3:** Limits the workflow to process only the first 3 essays.
6. **Fetch essay texts:** For each essay URL, it fetches the HTML content of the essay page.
7. **Extract Text Only:** It extracts the main text content of the essay using CSS selectors, removing images and navigation elements.
8. **Extract title:** It extracts the title of the essay using CSS selectors.
9. **Default Data Loader:** Loads the extracted text data into a document format suitable for Langchain.
10. **Summarization Chain:** Leverages Langchain's summarization chain to generate a concise summary of the essay. This uses the `gpt-4o-mini` model from OpenAI.
11. **Merge:** Combines the extracted title and the generated summary.
12. **Clean up:** Formats the output, creating a JSON object with the title, summary, and URL of the essay.

## Services:

- Paul Graham's website (paulgraham.com)
- OpenAI (via the `gpt-4o-mini` model)
- Langchain

## Hashtags:

#n8n #automation #webscraping #openai #langchain
