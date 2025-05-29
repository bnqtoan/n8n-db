# Financial News Summarizer with AI Agent

## Use Cases

*   **Daily Financial Briefing:** Automatically gather and summarize financial news to send a daily briefing email to yourself or your team.
*   **Investment Research:** Use AI to analyze news articles and identify potential investment opportunities or risks.
*   **Competitive Analysis:** Monitor news about competitors and summarize key developments to stay informed about their activities.

## How it works

1.  **Trigger:** The workflow starts either on a schedule (using "Schedule Trigger") or manually (using "When clicking ‘Test workflow’").
2.  **Initial Field Configuration:** "Edit Fields1" and "Code" are used to set up initial parameters or variables, potentially preparing the data for the next steps.
3.  **Loop over Items:** The workflow iterates over a set of items, likely representing different news sources or categories.
4.  **Get Financial News:** The "Get financial news online" node retrieves financial news from a specified URL (https://www.ft.com/).
5.  **Gather Elements:** "Gather the elements" node collects or combines data retrieved from the previous node.
6.  **Refine with AI agent :** "Edit fields","AI Agent" and "Edit Fields2" nodes uses AI to analyze and process the financial news content to edit and extract only the relevant information.
7.  **Aggregate Summaries:** The "Aggregate" node combines the summaries from each news source.
8.  **Send Email:** The "Send the summary by e-mail" node sends an email containing the aggregated financial news summary using Microsoft Outlook.

## Services

*   **Financial Times (FT):** Used as a source of financial news (via HTTP Request).
*   **Google Gemini Chat Model:** Used as an AI language model (via Langchain).
*   **Microsoft Outlook:** Used to send the summarized news via email.

## Hashtags

#n8n #automation #financialnews #AI #summarization
