# AI-powered automated stock analysis v1

## Use cases:

- **Automated Stock Research:** Automatically gather and analyze information about a specific stock from various sources like Wikipedia and SEC filings, streamlining the research process for investors and analysts.
- **Team Collaboration on Stock Analysis:** Delegate specific research tasks to different AI "researchers" and consolidate their findings into a single report, facilitating collaboration and efficient analysis.
- **Report Generation for Clients:** Create polished and up-to-date stock analysis reports in Google Docs, ready to be shared with clients or used for internal decision-making.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking 'Test workflow'" trigger node.
2.  **Settings:** The "Settings" node (currently empty) could be used to configure parameters such as the stock ticker symbol to analyze or API keys.
3.  **Plan Work for Team:** The "Plan work for team" node uses an OpenAI model to generate a plan for analyzing the stock, leveraging data from the "Wikipedia" and "SEC10 Tool" nodes to perform background research.
4.  **Delegate Work:** The "Delegate work" node splits the work into parallel research tasks.
5.  **Do Detailed Research:** The "Do detailed research" node uses another OpenAI model to conduct in-depth research, again utilizing "Wikipedia1" and "SEC10 Tool1" to gather information.
6.  **Combine All Sections from Researchers:** The "Combine all sections from researchers" node merges the output from the "Do detailed research" node with the delegated work (indexed as 0 and 1 respectively).
7.  **Draft Report:** The "Draft report" node uses a "Code" node to format the merged research into a draft report.
8.  **Polish Report:** The "Polish report" node employs an OpenAI model to refine the draft report.
9.  **Create New Google Docs:** A new Google Docs document is created using the "Create new Google Docs" node.
10. **Update document with report:** Finally, the polished report is added to the newly created Google Docs document.

## Services:

-   **Wikipedia:** Used via the Langchain Wikipedia Tool to fetch information about stocks and related companies.
-   **SEC Filings (SEC10 Tool):**  Used via a Langchain tool to retrieve financial data and reports.
-   **OpenAI:** Used for planning research tasks, performing detailed research, and polishing the generated report.
-   **Google Docs:** Used to create and update a document containing the final stock analysis report.

## Hashtags:

#n8n #automation #stockanalysis #AI #reportgeneration
