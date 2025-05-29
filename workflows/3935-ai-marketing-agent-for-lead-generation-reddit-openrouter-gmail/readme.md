# Reddit Competitor and Keyword Analysis Workflow

## Use cases:

- **Brand Monitoring:** Automatically monitor Reddit for mentions of your brand, analyze competitor activity, and identify relevant keywords.
- **Content Strategy:** Discover trending topics and keywords in your niche on Reddit to inform your content creation and improve SEO.
- **Email Newsletter Curation:**  Collect relevant posts from Reddit, analyze competitor strategies, and generate an email with the findings.

## How it works:

1.  **Form Trigger:** Starts the workflow upon form submission.
2.  **Keyword Analyst (Langchain Agent):** Uses a Large Language Model (LLM) via OpenRouter, an HTTP Request tool to search the web, and a Structured Output Parser to identify relevant keywords based on the form input.
3.  **Split Out:** Splits the keyword results into individual items for further processing.
4.  **Get Posts (Reddit):** Retrieves posts from Reddit based on the keywords identified in the previous step.
5.  **Remove Duplicates:** Removes any duplicate posts from the results.
6.  **Filter Posts by Criteria:** Filters the posts based on pre-defined criteria (likely set in the node's configuration).
7.  **Pick Fields to Keep:** Selects specific fields from the filtered Reddit posts for further analysis.
8.  **Competitor Analyst (Langchain Agent):** Uses a Large Language Model (LLM) via OpenRouter and a Structured Output Parser to analyze competitor strategies mentioned in the selected Reddit posts.
9.  **Merge Outputs:** Merges the keyword and competitor analysis data.
10. **Rename Fields from AI Agent' Output:** Renames the fields from the AI agent's output for clarity.
11. **Filter Relevant Posts:** Filters the posts based on relevance (likely using criteria defined in the node).
12. **Generate Email HTML (Code):** Generates HTML content for an email, incorporating the analyzed data from Reddit.
13. **Append Data (Google Sheets):** Appends the data to a Google Sheets spreadsheet.
14. **Send to your email (Gmail):** Sends the generated email via Gmail to a specified recipient.

## Services:

-   Reddit
-   OpenRouter (LLM)
-   Google Sheets
-   Gmail
-   Web (via HTTP Request)

## Hashtags:

#n8n #automation #reddit #competitoranalysis #keywordresearch
