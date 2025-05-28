# n8n DeepResearcher

## Use cases:

- **Market Research:** Automatically gather and compile information on industry trends, competitor analysis, or emerging technologies.
- **Academic Research:** Streamline literature reviews by automating the collection of relevant sources and extracting key findings.
- **Content Creation:** Generate detailed background reports for blog posts, articles, or other content formats.

## How it works:

1.  **Form Submission:** The workflow starts with a form (`On form submission`) where the user inputs their research query, desired depth, and breadth of the search.
2.  **Clarification Questions (Optional):** The workflow may ask clarifying questions (`Ask Clarity Questions`) to better understand the research topic, ensuring more accurate results.
3.  **Create Notion Page:** A new page is created in a specified Notion database (`Create Row`) to store the final research report.
4.  **Generate Search Queries:** Based on the initial query and any learnings from previous iterations, the workflow generates a list of relevant search queries (`Generate SERP Queries`).
5.  **Web Search and Scraping:** For each generated query, the workflow performs a web search and scrapes the content of the top results using Apify's RAG Web Browser actor (`RAG Web Browser`).
6.  **Extract Learnings:** The scraped content is then fed to a language model (`DeepResearch Learnings`) to extract key learnings and insights.
7.  **Iterative Deepening:** Steps 4-6 are repeated iteratively, with the learnings from each iteration used to refine the subsequent search queries. The depth and breadth parameters control the number of iterations and queries per iteration, respectively.
8.  **Generate Report:** Once the desired depth is reached, all accumulated learnings are compiled and passed to a language model (`DeepResearch Report`) to generate a final research report in Markdown format.
9.  **Format Report for Notion:** The Markdown report is converted into Notion blocks (`Convert to HTML`, `HTML to Array`, `Notion Block Generator`) suitable for the Notion API.
10. **Update Notion Page:** The generated Notion blocks are then used to update the page created in step 3, populating it with the research report.

## Services:

-   **OpenAI:** Used for generating search queries, extracting learnings, and generating the final report (using models like o3-mini).
-   **Google Gemini:** Used to convert markdown to Notion
-   **Notion:** Used as a storage location for the research reports.
-   **Apify:** Used for web search and scraping services.

## Hashtags:

#n8n #automation #research #AI #workflow
