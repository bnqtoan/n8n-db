# Automated news to newsletter ai agents v13

## Use cases:

- **Automated Newsletter Creation:**  This workflow can automatically gather news articles based on specified criteria, summarize them, and generate newsletter content for distribution.
- **Content Curation for Social Media:** The workflow can be adapted to curate relevant news and create concise summaries suitable for posting on social media platforms.
- **Personalized News Alerts:** Users can tailor the workflow to monitor specific news sources or topics and receive email alerts with summarized information when new articles are published.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Schedule Trigger" node, which initiates the process at predefined intervals.
2.  **News to Monitor:** Retrieves news from a Google Sheets document.
3.  **Loop Over Items:** Iterates through the rows fetched from Google Sheets.
4.  **Settings:** This node appears to configure settings for the subsequent logic.
5.  **Switch:** The switch node splits the data to differents paths based on a criteria to "News Reporter" or "Research Leader 🔬".
6.  **News Reporter:** Uses a Langchain agent and an OpenAI Chat Model to generates a markdown title.
7.  **Markdown:** Transforms the response to a markdown format.
8.  **Research Leader 🔬:** Orchestrates the research process, assigning tasks to research assistants via "Project Planner".
9. **Project Planner**: Use an OpenAI Chat Model to assign tasks to research assistants, delegating to research assistants via "Delegate to Research Assistants".
10. **Delegate to Research Assistants:** Splits the items from the research planner.
11. **Research Assistant**: Use an OpenAI Chat Model to research and get chapters for the newsletter and then merge it to a single text.
12. **Merge chapters title and text:** Merges the titles and the text to create the final article text.
13. **Final article text:** A code node to get the final article from the JSON data.
14. **Editor:** Uses a Langchain agent to edit and compose the newsletter and extracts the final title to send to Gmail.
15. **Title1:** Uses a Langchain LLM Chain and an OpenAI Chat Model to creates the final title to send to Gmail.
16. **Gmail1:** Sends the created newsletter via Gmail.
17. **Gmail2:** Sends the news title using Gmail.
18. **Execute Workflow Trigger:** Triggers other workflows
19. **Perplexity API:** Uses the Perplexity API to get data.
20. **Response:** Set node to respond to the webhook

## Services:

*   Google Sheets
*   Gmail
*   OpenAI
*   Perplexity API

## Hashtags:

#n8n #automation #newsletter #AI #contentcreation
