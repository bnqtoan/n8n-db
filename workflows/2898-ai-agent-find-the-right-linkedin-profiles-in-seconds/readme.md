# AI-Powered LinkedIn Profile Scraper and Saver

## Use cases:

- **Lead Generation:** Automatically identify and collect LinkedIn profiles of potential leads based on specific criteria (job title, industry, location).
- **Recruiting:** Streamline the candidate sourcing process by gathering profiles that match desired qualifications for open positions.
- **Market Research:** Collect data on professionals in a particular field to analyze trends, skills, and experience levels.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received (`When chat message received` node), acting as the initial trigger for the agent.
2.  **AI Agent Orchestration:** An AI Agent (`AI Agent` node) uses a Large Language Model (LLM) to understand the user's intent and plan actions.
3.  **LLM Selection:** The AI Agent is configured to use the OpenAI Chat Model (`OpenAI Chat Model` node) for natural language processing and response generation.
4.  **Memory Management:** The `Window Buffer Memory` node stores conversation history, allowing the agent to maintain context and provide more relevant responses.
5.  **Tool Integration:** The `Call n8n Workflow Tool` node enables the agent to use external tools, in this case, another n8n workflow, to perform specific tasks.
6.  **Workflow Execution:** A second workflow is triggered by `Execute Workflow Trigger`. It defines search criteria.
7.  **OpenAI Integration:** OpenAI (`OpenAI` node) processes the search criteria.
8.  **Pagination:** `Set Search Page Numbers` and `Split Search Pages` nodes generate a sequence of page numbers to iterate through search results.
9.  **Google Custom Search API:** The `Google Custom Search API Request` node performs searches on Google, likely targeting LinkedIn profiles based on provided search terms.
10. **Profile Filtering:** The `Filter LinkedIn Profiles` node uses code to extract relevant information from the search results and filter out unwanted profiles.
11. **Data Storage:** Finally, the `Save to Google Sheets` node stores the collected profile data into a Google Sheet for further analysis or use.

## Services:

-   **Langchain:** Framework to develop applications powered by language models.
-   **OpenAI:** Provides the Large Language Model for natural language processing.
-   **Google Custom Search API:** Used to search for LinkedIn profiles on Google.
-   **Google Sheets:** Used to store the scraped LinkedIn profile data.

## Hashtags:

#n8n #automation #linkedin #scraper #aiagent
