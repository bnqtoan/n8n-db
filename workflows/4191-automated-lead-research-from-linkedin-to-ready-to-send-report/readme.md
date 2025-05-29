# Prospect researcher LinkedIn

## Use cases:

- **Lead Generation:** Automatically research potential leads on LinkedIn based on data from a Google Sheet, enriching lead information with insights from Perplexity AI and generating reports.
- **Competitor Analysis:** Gather competitive intelligence by researching companies on LinkedIn and using AI to analyze their positioning and strategies, compiling findings into a shareable document.
- **Automated LinkedIn Engagement Research:** Research prospect's and competitor's content to increase relevance of engagement on LinkedIn.

## How it works:

1.  **Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **Get Data:** Retrieves a list of prospects or companies from a Google Sheet using the "Get All Data" and "Set Data" nodes.
3.  **Looping:** Iterates through each item (prospect/company) using the "Loop Over Items" node.
4.  **LinkedIn Research:**
    *   Uses "Personal LinkedIn Account POST/GET" and "Company LinkedIn Account POST/GET" nodes (HTTP Requests) to fetch data from LinkedIn profiles, both personal and company pages.
    *   These requests are followed by "Wait" nodes to respect rate limits.
    *   The "Set Results" nodes store the retrieved LinkedIn data.
5.  **AI-Powered Research:**
    *   **Perplexity AI Integration:** Uses "Perplexity Search" node (HTTP Request) to gather additional information about the prospect/company from the web.
    *   Uses "check perplexity research" to validate information.
    *   Depending on the result of the check, additional context is added.
6.  **AI Analysis:**
    *   Uses "Analyst of prospect" (Langchain LLM Chain) to analyze the gathered information (LinkedIn + Perplexity).
    *   Uses "OpenAI Chat Model" to inform the analysis
    *   Uses "Structured Output Parser" to structure the output from the analysis
    *   Uses "Perplexity Competitor Research" to reasearch competitors.
7.  **Report Generation:**
    *   Uses "Generate Report" (Langchain LLM Chain) and "OpenAI Chat Model1" to generate a report summarizing the findings.
8.  **Document Creation:** Creates a Google Docs document using "Create doc" and appends the generated report using "Add report to doc".
9.  **Data Storage:** Adds the key findings and report link to a Google Sheet using "Add to sheets".

## Services:

*   Google Sheets
*   Google Docs
*   LinkedIn (via HTTP Requests)
*   OpenAI (via Langchain)
*   Perplexity AI (via HTTP Request)

## Hashtags:

#n8n #automation #linkedin #leadgeneration #competitoranalysis
