# 🤖🧑‍💻 AI Agent for Top n8n Creators Leaderboard Reporting

## Use Cases:

- **Automated Community Reporting:** Generate daily or weekly reports on top n8n workflow creators and trending workflows for internal use or public sharing.
- **Creator Recognition:** Identify and highlight top contributors in the n8n community based on their workflow impact, encouraging engagement and collaboration.
- **Workflow Discovery:** Help users discover popular and useful workflows within the n8n ecosystem based on community usage statistics.

## How it works:

1.  **Trigger:** The workflow is triggered either by a schedule (`Schedule Trigger` node) or by another workflow (`When Executed by Another Workflow` node).
2.  **Fetch Data:** It retrieves n8n creator and workflow statistics from a specified GitHub repository using HTTP requests (`stats_aggregate_creators` and `stats_aggregate_workflows` nodes). The URL for the request is constructed using global variables for the path and filenames (`Global Variables` node).
3.  **Parse and Split Data:** The JSON data received is parsed and split into individual creator and workflow items (`Parse Creators Data`, `Parse Workflow Data`, `Split Out Creators`, and `Split Out Workflows` nodes).
4.  **Sort and Limit:** The creators and workflows are sorted by weekly insertions and limited to the top entries (`Sort By Top Weekly Creator Inserts`, `Sort By Top Weekly Workflow Inserts`, `Take Top 10 Creators`, and `Take Top 50 Workflows` nodes).
5.  **Merge Data:** The creators and workflows are merged based on the username (`Merge Creators & Workflows`).
6.  **Aggregate**: The data is aggregated in a single item (`Aggregate` node).
7.  **AI Report Generation:** An AI agent (`n8n Creators Stats Agent` node) uses the aggregated data with OpenAI to generate a Markdown report summarizing the top creators and workflows. A prompt is provided for the ai agent to provide report following specific guidelines. A workflow tool is used to retrieve details about the n8n creators (`Workflow Tool` node).
8.  **Top 10 Workflow List Generation:** The AI creates a list of the top 10 workflows by insertions and includes a hyperlink to it. A Google Gemini Chat Model is used (`Google Gemini Chat Model` node).
9.  **Output:** The report is then saved to google drive (`Google Drive` node). Optionally, it can also be converted to HTML and sent via Gmail (`Convert Markdown to HTML` and `Gmail Creators & Workflows Report` nodes).  The top 10 workflows list can also be sent via Telegram (`Telegram Top 10  Workflows List` node)

## Services:

*   GitHub (via HTTP Request)
*   OpenAI (for report generation)
*   Google Drive (for saving the report)
*   Gmail (for sending the report)
*   Telegram (for sending the top 10 workflows)
*   Google Gemini (for Create Top 10 Workflows List)

## Hashtags:

#n8n #automation #workflow #leaderboard #communityreporting
