# Linear Issue Sentiment Analysis and Slack Alerting

## Use cases:

- **Proactive Customer Support:** Automatically identify Linear issues with negative sentiment to prioritize and address customer concerns promptly.
- **Team Performance Monitoring:** Track the overall sentiment trend in Linear issues to assess team workload, identify potential bottlenecks, and improve issue resolution strategies.
- **Escalation Management:** Trigger alerts in Slack when an issue's sentiment shifts to negative, ensuring immediate attention from relevant stakeholders for timely intervention.

## How it works:

This workflow automates the process of monitoring Linear issues, analyzing the sentiment of their comments, and sending Slack notifications when negative sentiment is detected.

1.  **Schedule Trigger:** Runs every 30 minutes to fetch recently updated issues from Linear.
2.  **Fetch Active Linear Issues:** Uses the Linear GraphQL API to retrieve active issues, filtering for updates within the last 30 minutes. It also fetches comments associated with each issue, including the comment author and creation date.
3.  **Issues to List:** Splits the received issue data into individual issue items.
4.  **Sentiment over Issue Comments:** Utilizes the Langchain Information Extractor to analyze the sentiment of comments within each issue. It extracts the overall sentiment (positive, negative, or neutral) and a summary of the sentiment.
5.  **Combine Sentiment Analysis:** Combines the sentiment analysis results with the original issue data, augmenting each issue with sentiment information.
6.  **For Each Issue...:** Batches and then iterates on each issue to prepare for Airtable updates.
7.  **Copy of Issue:** Makes a copy of the issue data for use later in the workflow.
8.  **Get Existing Sentiment:** Searches for the issue in an Airtable database using the "Issue ID".
9.  **Update Row:** Updates the Airtable record with the new sentiment data (sentiment, sentimentSummary, issue details). It moves the previous "current sentiment" value to the "previous sentiment" column, enabling the tracking of sentiment transitions.
10. **Airtable Trigger:** Listens for updates in the Airtable database.
11. **Sentiment Transition:** Checks if an issue's sentiment has transitioned from a non-negative state (positive or neutral) to a negative state.
12. **Deduplicate Notifications:** Prevents duplicate Slack notifications for the same issue update.
13. **Report Issue Negative Transition:** Sends a Slack notification to a specified channel, alerting the team about issues with negative sentiment transitions. The notification includes links to the Linear issues.

## Services:

-   **Linear:** Issue tracking and project management platform, accessed via GraphQL API.
-   **OpenAI:** AI Language model used for sentiment analysis via the Langchain nodes.
-   **Airtable:** Database used to store and track sentiment analysis results and issue details.
-   **Slack:** Messaging platform for sending notifications about negative sentiment transitions.

## Hashtags:

#n8n #automation #workflow #sentimentanalysis #lineartool
