# 🔥📈🤖 AI Agent for n8n Creators Leaderboard - Find Popular Workflows

## Use cases:

- **Community Engagement**: Identify top workflow creators and popular workflows to foster community recognition and engagement.
- **Workflow Optimization**: Help workflow creators understand the impact of their workflows by providing statistics on usage.
- **Personalized Insights**: Generate a detailed report for a specific n8n creator, offering personalized insights into their contributions.

## How it works:

1.  **Trigger**: The workflow starts either when a chat message is received via the "When chat message received" trigger node or when executed by another workflow via the "When Executed by Another Workflow" trigger. The chat message should contain the username of the n8n creator for whom the stats are requested.
2.  **Fetch Data**: It fetches n8n creator and workflow statistics from a GitHub repository using two "HTTP Request" nodes ("stats\_aggregate\_creators" and "stats\_aggregate\_workflows").
3.  **Parse and Transform**: The fetched JSON data is parsed and transformed using "Set" nodes ("Parse Workflow Data" and "Parse Creators Data") to extract relevant information.
4.  **Sort and Limit**: The workflow sorts creators and workflows based on weekly inserters and limits the results to the top 25 creators and top 300 workflows, respectively using "Sort" and "Limit" nodes.
5.  **Merge Data**: The "Merge Creators & Workflows" node merges creator and workflow data based on the username.
6.  **Filter by Username**: It filters the merged data based on the username specified in the trigger using the "Filter By Creator Username" node.
7.  **AI Report Generation**: The filtered data is passed to an AI Agent ("n8n Creator Stats Agent") that uses a language model ("gpt-4o-mini") and the "n8n\_creator\_stats" tool to generate a detailed Markdown report.  The AI Agent follows a defined prompt to create a summary of the contributor's workflows, including a table of workflows with key metrics and community analysis.
8.  **Save Report**: Finally, the generated report is converted to a file using "creator-summary" and saved locally using the "Save creator-summary.md" node.

## Services:

-   GitHub: Used to fetch n8n creator and workflow statistics from JSON files stored in a repository.
-   OpenAI: Used via the "gpt-4o-mini" node for generating the Markdown report.

## Hashtags:

#n8n #automation #workflow #AI #leaderboard
